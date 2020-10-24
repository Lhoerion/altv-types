param(
    [Switch] $disableChecks = $false,
    [Switch] $debug = $false,
    [string] $port = "8080"
)

function Cleanup() {
    if($debug) { return }
    Remove-Item -Path 'docfx.zip' -Force 2>&1 > $null
    Remove-Item -Path 'docfx-plugins-typescriptreference.zip' -Force 2>&1 > $null
    Remove-Item -Path 'package.json' -Force 2>&1 > $null
    Remove-Item -Path 'package-lock.json' -Force 2>&1 > $null
    Remove-Item -Path 'node_modules' -Recurse -Force 2>&1 > $null
}

function GetAssemblyVersion([string] $file) {
    if(-not (Test-Path -Path $file)) { throw "Cannot find path $file because it does not exist." }
    $ver=(Get-Item -Path $file | Select-Object -ExpandProperty VersionInfo).FileVersion.Split('.')
    if($ver.Length -lt 4) {
        $ver -Join '.'
    } else {
        ($ver | Select -SkipLast 1) -Join '.'
    }
}

function FetchAndDownloadRelease([string] $repo, [string] $file) {
    $global:ProgressPreference='SilentlyContinue'
    $tag=(Invoke-WebRequest -UseBasicParsing "https://api.github.com/repos/$repo/releases" | ConvertFrom-Json)[0].tag_name
    Invoke-WebRequest -UseBasicParsing "https://github.com/$repo/releases/download/$tag/$file" -OutFile $file
    $global:ProgressPreference='Continue'
    return ([int]$? - 1)
}


function ExtractArchive([string] $path, [string] $dest) {
    if(-not (Test-Path -Path $path)) { throw "Cannot find path $path because it does not exist." }
    $file=Get-Item -Path $path
    if(!$dest) {
        $dest=$file.FullName.Substring(0, $file.FullName.LastIndexOf('.'))
    }
    $global:ProgressPreference='SilentlyContinue'
    Expand-Archive -Path $file -DestinationPath $dest -Force
    $global:ProgressPreference='Continue'
    return ([int]$? - 1)
}

function LogWrap([string] $msg, [ScriptBlock] $action, [boolean] $disResult=$false) {
    Write-Host -NoNewline "$msg . . . "
    try {
        $errcode, $msg=Invoke-Command -ScriptBlock $action
    } catch {
        $err=$true
        $errcode=1
        $msg=$_
    }
    if(-not $err) {
        if(-not ($errcode -is [int])) {
            $errcode=$LastExitCode
        }
        if(-not $msg) {
            $msg=$Error[0].Exception.Message
        }
    }
    if(-not $disResult -and $errcode -eq 0x0) {
        Write-Host -NoNewline -ForegroundColor 'green' "done`n"
    } elseif($errcode -eq -0x1) {
        Write-Host -NoNewline -ForegroundColor 'yellow' "skipped`n"
    } elseif($errcode -gt 0x0) {
        Write-Host -NoNewline -ForegroundColor 'red' "failed"
        Write-Host -ForegroundColor 'red' " with code $($errcode):`n$($msg)"
        exit
    }
}

try
{
    LogWrap "Downloading DocFx package" {
        if(Test-Path "./docfx/docfx.exe") { return -0x1 }
        FetchAndDownloadRelease "dotnet/docfx" "docfx.zip" 2>$null
    }
    LogWrap "Extracting DocFx package" {
        if(Test-Path "./docfx/docfx.exe") { return -0x1 }
        ExtractArchive "docfx.zip" 2>$null
    }

    LogWrap "Downloading DocFx TypeScriptReference package" {
        if(Test-Path "./templates/docfx-plugins-typescriptreference") { return -0x1 }
        FetchAndDownloadRelease "Lhoerion/DocFx.Plugins.TypeScriptReference" "docfx-plugins-typescriptreference.zip" 2>&1 6>$null
    }
    LogWrap "Extracting DocFx TypeScriptReference package" {
        if(Test-Path "./templates/docfx-plugins-typescriptreference") { return -0x1 }
        ExtractArchive "docfx-plugins-typescriptreference.zip" 2>&1 6>$null
    }

    LogWrap "Installing node dependencies" {
        yarn --version 2>$null
        if($?) {
            yarn install 2>$null
        } else {
            npm install 2>$null
        }
    }

    LogWrap "Tools version" {
        $dotnetVersion=dotnet --version
        $docfxVer=GetAssemblyVersion "./docfx/docfx.exe"
        $pluginVer=GetAssemblyVersion "./templates/docfx-plugins-typescriptreference/plugins/*.dll"
        $typedocVer=npm view typedoc version
        $type2docfxVer=npm view typedoc version
        Write-Host -NoNewline -ForegroundColor "green" "done`n"
        Write-Host ".NET Core v$dotnetVersion"
        Write-Host "DocFx v$docfxVer"
        Write-Host "DocFx TypescriptReference v$pluginVer"
        Write-Host "TypeDoc v$typedocVer"
        Write-Host "type2docfx v$type2docfxVer"
    } $true

    LogWrap "Generating project metadata" {
        $stderr=npx typedoc --options './typedoc.json' 2>$null
        if($LastExitCode -gt 0x0) { return $LastExitCode, $stderr }
        $stderr=npx type2docfx './output.json' './api' --basePath '.' --sourceUrl 'https://github.com/altmp/altv-types' --sourceBranch 'master' --disableAlphabetOrder 2>&1 6>$null
        return $LastExitCode, $buff
    }

    ./docfx/docfx "docfx.json" --serve -p $port
}
finally
{
    Cleanup
}

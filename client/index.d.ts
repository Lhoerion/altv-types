/// <reference types="@altv/types-shared"/>
/**
 * @module alt-client
 */
declare module "alt-client" {
  import * as shared from "alt-shared";

  type StackFrameType = "script" | "constructor" | "eval" | "wasm";

  export const enum Locale {
    Arabic = "ar",
    Belarusian = "by",
    Czech = "cz",
    German = "de",
    English = "en",
    Spanish = "es",
    Farsi = "fa",
    French = "fr",
    Hebrew = "he",
    Hungarian = "hu",
    Indonesian = "id",
    Hindi = "in_hd", // Wrong tag (hi_in)
    Malayalam = "in_ml", // Wrong tag (ml_in)
    Telugu = "in_tl", // Wrong tag (te_in)
    Tamil = "in_tm", // Wrong tag (ta_in)
    Italian = "it",
    Lithuanian = "lt",
    Latvian = "lv",
    NorwegianBokmal = "nb_no",
    NorwegianNynorsk = "nn_no",
    Polish = "pl",
    Portugese = "pt",
    BrazilianPortuguese = "pt_br",
    Romanian = "ro",
    Serbian = "rs", // Wrong tag (sr)
    Russian = "ru",
    Slovak = "sk",
    Thai = "th",
    Turkish = "tr",
    Ukrainian = "ua", // Wrong tag (uk)
    ChineseSimplified = "zh_cn",
    ChineseTraditional = "zh_tw",
  }

  export const enum Permission {
    None,
    ScreenCapture,
    WebRTC,
    All,
  }

  export const enum PermissionState {
    Allowed,
    Denied,
    Unspecified,
    Failed,
  }

  export const enum StatName {
    Stamina = "stamina",
    Strength = "strength",
    LungCapacity = "lung_capacity",
    Wheelie = "wheelie_ability",
    Flying = "flying_ability",
    Shooting = "shooting_ability",
    Stealth = "stealth_ability",
  }

  export const enum CheckpointType {
    CylinderSingleArrow,
    CylinderDoubleArrow,
    CylinderTripleArrow,
    CylinderCycleArrow,
    CylinderCheckerboard,
    CylinderWrench,
    CylinderSingleArrow2,
    CylinderDoubleArrow2,
    CylinderTripleArrow2,
    CylinderCycleArrow2,
    CylinderCheckerboard2,
    CylinderWrench2,
    RingSingleArrow,
    RingDoubleArrow,
    RingTripleArrow,
    RingCycleArrow,
    RingCheckerboard,
    SingleArrow,
    DoubleArrow,
    TripleArrow,
    CycleArrow,
    Checkerboard,
    CylinderSingleArrow3,
    CylinderDoubleArrow3,
    CylinderTripleArrow3,
    CylinderCycleArrow3,
    CylinderCheckerboard3,
    CylinderSingleArrow4,
    CylinderDoubleArrow4,
    CylinderTripleArrow4,
    CylinderCycleArrow4,
    CylinderCheckerboard4,
    CylinderSingleArrow5,
    CylinderDoubleArrow5,
    CylinderTripleArrow5,
    CylinderCycleArrow5,
    CylinderCheckerboard5,
    RingPlaneUp,
    RingPlaneLeft,
    RingPlaneRight,
    RingPlaneDown,
    Empty,
    Ring,
    Empty2,
    Cylinder,
    Cylinder1,
    Cylinder2,
    Cylinder3,
    Cylinder4,
    Cylinder5,
    Empty3,
    Empty4,
    Empty5,
    Empty6,
    RingDollar,
    RingWolf,
    RingQuestionMark,
    RingPlane,
    RingChopper,
    RingBoat,
    RingCar,
    RingBike,
    RingBicycle,
    RingTruck,
    RingParachute,
    RingJetpack,
    RingWhirl,
  }

  export enum BlipSprite {
    Higher,
    Lower,
    PolicePed,
    WantedRadius,
    Area,
    Centre,
    North,
    Waypoint,
    Radius,
    RadiusOutline,
    WeaponHigher,
    WeaponLower,
    HigherAI,
    LowerAI,
    PoliceHeliSpin,
    PolicePlaneMove,
    MPCrew = 27,
    MPFriendlies,
    CableCar = 36,
    Activities,
    Raceflag,
    Safehouse = 40,
    Police,
    PoliceChase,
    PoliceHeli,
    BombA,
    Snitch = 47,
    PlanningLocations,
    CriminalCarsteal = 50,
    CriminalDrugs,
    CriminalHoldups,
    CriminalPlayer = 54,
    CopPatrol = 56,
    CopPlayer,
    CriminalWanted,
    Heist,
    PoliceStation,
    Hospital,
    AssassinsMark,
    Elevator,
    Helicopter,
    RandomCharacter = 66,
    SecurityVan,
    TowTruck,
    IllegalParking = 70,
    Barber,
    CarModShop,
    ClothesStore,
    Tattoo = 75,
    ArmenianFamily,
    LesterFamily,
    MichaelFamily,
    TrevorFamily,
    JewelryHeist,
    DragRaceFinish = 82,
    Rampage = 84,
    VinewoodTours,
    LamarFamily,
    FranklinFamily = 88,
    ChineseStrand,
    FlightSchool,
    EyeSky,
    AirHockey,
    Bar,
    BaseJump,
    Basketball,
    BiolabHeist = 96,
    CabaretClub = 99,
    CarWash,
    ComedyClub = 102,
    Darts,
    DocksHeist,
    FbiHeist,
    FbiOfficersStrand,
    FinaleBankHeist,
    FinancierStrand,
    Golf,
    GunShop,
    InternetCafe,
    MichaelFamilyExile,
    NiceHouseHeist,
    RandomFemale,
    RandomMale,
    RuralBankHeist = 118,
    ShootingRange,
    SolomonStrand,
    StripClub,
    Tennis,
    TrevorFamilyExile,
    MichaelTrevorFamily,
    Triathlon = 126,
    OffRoadRacing,
    GangCops,
    GangMexicans,
    GangBikers,
    SnitchRed = 133,
    CriminalCuffKeys,
    Cinema,
    MusicVenue,
    PoliceStationBlue,
    Airport,
    CriminalSavedVehicle,
    WeedStash,
    Hunting,
    Pool,
    ObjectiveBlue,
    ObjectiveGreen,
    ObjectiveRed,
    ObjectiveYellow,
    ArmsDealing,
    MPFriend,
    CelebrityTheft,
    WeaponAssaultRifle,
    WeaponBat,
    WeaponGrenade,
    WeaponHealth,
    WeaponKnife,
    WeaponMolotov,
    WeaponPistol,
    WeaponRocket,
    WeaponShotgun,
    WeaponSmg,
    WeaponSniper,
    MPNoise,
    PointOfInterest,
    Passive,
    UsingMenu,
    GangCopsPartner = 171,
    WeaponMinigun = 173,
    WeaponArmour = 175,
    PropertyTakeover,
    GangMexicansHighlight,
    GangBikersHighlight,
    TriathlonCycling,
    TriathlonSwimming,
    PropertyTakeoverBikers,
    PropertyTakeoverCops,
    PropertyTakeoverVagos,
    Camera,
    CentreRed,
    HandcuffKeysBikers,
    HandcuffKeysVagos,
    HandcuffsClosedBikers,
    HandcuffsClosedVagos,
    CameraBadger = 192,
    CameraFacade,
    CameraIfruit,
    Yoga = 197,
    Taxi,
    Shrink = 205,
    Epsilon,
    FinancierStrandGrey,
    TrevorFamilyGrey,
    TrevorFamilyRed,
    FranklinFamilyGrey,
    FranklinFamilyBlue,
    FranklinA,
    FranklinB,
    FranklinC,
    GangVehicle = 225,
    GangVehicleBikers,
    GangVehicleCops,
    GangVehicleVagos,
    Guncar,
    DrivingBikers,
    DrivingCops,
    DrivingVagos,
    GangCopsHighlight,
    ShieldBikers,
    ShieldCops = 235,
    ShieldVagos,
    CustodyBikers,
    CustodyVagos,
    ArmsDealingAir = 251,
    PlayerStateArrested,
    PlayerStateCustody,
    PlayerStateDriving,
    PlayerStateKeyholder,
    PlayerStatePartner,
    Ztype = 262,
    Stinger,
    Packer,
    Monroe,
    Fairground,
    Property,
    GangHighlight,
    Altruist,
    AI,
    OnMission,
    CashPickup,
    Chop,
    Dead,
    TerritoryLocked,
    CashLost,
    CashVagos,
    CashCops,
    Hooker,
    Friend,
    Mission2to4,
    Mission2to8,
    Mission2to12,
    Mission2to16,
    CustodyDropOff,
    OnMissionCops,
    OnMissionLost,
    OnMissionVagos,
    CriminalCarStealCops,
    CriminalCarStealBikers,
    CriminalCarStealVagos,
    BandStrand,
    SimeonFamily,
    Mission1,
    Mission2,
    FriendDarts,
    FriendComedyClub,
    FriendCinema,
    FriendTennis,
    FriendStripClub,
    FriendLiveMusic,
    FriendGolf,
    BountyHit,
    UgcMission,
    Horde,
    CrateDrop,
    PlaneDrop,
    Sub,
    Race,
    Deathmatch,
    ArmWrestling,
    Mission1to2,
    ShootingRangeGunShop,
    RaceAir,
    RaceLand,
    RaceSea,
    Tow,
    Garbage,
    Drill,
    Spikes,
    Firetruck,
    Minigun2,
    Bugstar,
    Submarine,
    Chinook,
    GetawayCar,
    MissionBikers1,
    MissionBikers1to2,
    MissionBikers2,
    MissionBikers2to4,
    MissionBikers2to8,
    MissionBikers2to12,
    MissionBikers2to16,
    MissionCops1,
    MissionCops1to2,
    MissionCops2,
    MissionCops2to4,
    MissionCops2to8,
    MissionCops2to12,
    MissionCops2to16,
    MissionVagos1,
    MissionVagos1to2,
    MissionVagos2,
    MissionVagos2to4,
    MissionVagos2to8,
    MissionVagos2to12,
    MissionVagos2to16,
    GangBike,
    GasGrenade,
    PropertyForSale,
    GangAttackPackage,
    MartinMadrazzo,
    EnemyHeliSpin,
    Boost,
    Devin,
    Dock,
    Garage,
    GolfFlag,
    Hangar,
    Helipad,
    JerryCan,
    Mask,
    HeistPrep,
    Incapacitated,
    SpawnPointPickup,
    Boilersuit,
    Completed,
    Rockets,
    GarageForSale,
    HelipadForSale,
    DockForSale,
    HangarForSale,
    Placeholder6,
    Business,
    BusinessForSale,
    RaceBike,
    Parachute,
    TeamDeathmatch,
    RaceFoot,
    VehicleDeathmatch,
    Barry,
    Dom,
    Maryann,
    Cletus,
    Josh,
    Minute,
    Omega,
    Tonya,
    Paparazzo,
    Aim,
    CrateDropBackground,
    GreenAndNetPlayer1,
    GreenAndNetPlayer2,
    GreenAndNetPlayer3,
    GreenAndFriendly,
    NetPlayer1AndNetPlayer2,
    NetPlayer1AndNetPlayer3,
    Creator,
    CreatorDirection,
    Abigail,
    Blimp,
    Repair,
    Testosterone,
    Dinghy,
    Fanatic,
    InfoIcon = 407,
    CaptureTheFlag,
    LastTeamStanding,
    Boat,
    CaptureTheFlagBase,
    CaptureTheFlagOutline = 413,
    CaptureTheFlagBaseNoBag,
    WeaponJerrycan,
    Rp,
    LevelInside,
    BountyHitInside,
    CaptureTheUSAFlag,
    CaptureTheUSAFlagOutline,
    Tank,
    PlayerHeli,
    PlayerPlane,
    PlayerJet,
    CentreStroke,
    PlayerGunCar,
    PlayerBoat,
    MPHeist,
    Temp1,
    Temp2,
    Temp3,
    Temp4,
    Temp5,
    Temp6,
    RaceStunt,
    HotProperty,
    UrbanWarfareVersus,
    KingOfTheCastle,
    PlayerKing,
    DeadDrop,
    PennedIn,
    Beast,
    EdgePointer,
    EdgeCrossTheLine,
    MPLamar,
    Bennys,
    CornerNumber1,
    CornerNumber2,
    CornerNumber3,
    CornerNumber4,
    CornerNumber5,
    CornerNumber6,
    CornerNumber7,
    CornerNumber8,
    Yacht,
    FindersKeepers,
    AssaultPackage,
    HuntTheBoss,
    Sightseer,
    TurretedLimo,
    BellyOfTheBeast,
    YachtLocation,
    PickupBeast,
    PickupZoned,
    PickupRandom,
    PickupSlowTime,
    PickupSwap,
    PickupThermal,
    PickupWeed,
    WeaponRailgun,
    Seashark,
    PickupHidden,
    Warehouse,
    WarehouseForSale,
    Office,
    OfficeForSale,
    Truck,
    Contraband,
    Trailer,
    VIP,
    Cargobob,
    AreaOutline,
    PickupAccelerator,
    PickupGhost,
    PickupDetonator,
    PickupBomb,
    PickupArmoured,
    Stunt,
    WeaponLives,
    StuntPremium,
    Adversary,
    BikerClubhouse,
    BikerCagedIn,
    BikerTurfWar,
    BikerJoust,
    ProductionWeed,
    ProductionCrack,
    ProductionFakeId,
    ProductionMeth,
    ProductionMoney,
    Package,
    Capture1,
    Capture2,
    Capture3,
    Capture4,
    Capture5,
    Capture6,
    Capture7,
    Capture8,
    Capture9,
    Capture10,
    Quad,
    Bus,
    DrugsPackage,
    PickupJump,
    Adversary4,
    Adversary8,
    Adversary10,
    Adversary12,
    Adversary16,
    Laptop,
    PickupDeadline,
    SportsCar,
    WarehouseVehicle,
    RegPapers,
    PoliceStationDropoff,
    Junkyard,
    ExVech1,
    ExVech2,
    ExVech3,
    ExVech4,
    ExVech5,
    ExVech6,
    ExVech7,
    TargetA,
    TargetB,
    TargetC,
    TargetD,
    TargetE,
    TargetF,
    TargetG,
    TargetH,
    Juggernaut,
    PickupRepair,
    SteeringWheel,
    Trophy,
    PickupRocketBoost,
    PickupHomingRocket,
    PickupMachinegun,
    PickupParachute,
    PickupTime5,
    PickupTime10,
    PickupTime15,
    PickupTime20,
    PickupTime30,
    Supplies,
    PropertyBunker,
    GrWvm1,
    GrWvm2,
    GrWvm3,
    GrWvm4,
    GrWvm5,
    GrWvm6,
    GrCovertOps,
    AdversaryBunker,
    GrMocUpgrade,
    GrWUpgrade,
    SmCargo,
    SmHangar,
    TfCheckpoint,
    RaceTf,
    SmWp1,
    SmWp2,
    SmWp3,
    SmWp4,
    SmWp5,
    SmWp6,
    SmWp7,
    SmWp8,
    SmWp9,
    SmWp10,
    SmWp11,
    SmWp12,
    SmWp13,
    SmWp14,
    NhpBag,
    NhpChest,
    NhpOrbit,
    NhpVeh1,
    NhpBase,
    NhpOverlay,
    NhpTurret,
    NhpMgFirewall,
    NhpMgNode,
    NhpWp1,
    NhpWp2,
    NhpWp3,
    NhpWp4,
    NhpWp5,
    NhpWp6,
    NhpWp7,
    NhpWp8,
    NhpWp9,
    NhpCCTV,
    NhpStarterpack,
    NhpTurretConsole,
    NhpMgMirRotate,
    NhpMgMirStatic,
    NhpMgProxy,
    AcsrRaceTarget,
    AcsrRaceHotring,
    AcsrWp1,
    AcsrWp2,
    BatClubProperty,
    BatCargo,
    BatTruck,
    BatHackJewel,
    BatHackGold,
    BatKeypad,
    BatHackTarget,
    PickupDtbHealth,
    PickupDtbBlastIncrease,
    PickupDtbBlastDecrease,
    PickupDtbBombIncrease,
    PickupDtbBombDecrease,
    BatRivalClub,
    BatDrone,
    BatCashReg,
    CCTV,
    BatAssassinate,
    BatPbus,
    BatWp1,
    BatWp2,
    BatWp3,
    BatWp4,
    BatWp5,
    BatWp6,
    Blimp2,
    Oppressor2,
    BatWp7,
    ArenaSeries,
    ArenaPremium,
    ArenaWorkshop,
    RaceWars,
    ArenaTurret,
    ArenaRCCar,
    ArenaRCWorkshop,
    ArenaTrapFire,
    ArenaTrapFlip,
    ArenaTrapSea,
    ArenaTrapTurn,
    ArenaTrapPit,
    ArenaTrapMine,
    ArenaTrapBomb,
    ArenaTrapWall,
    ArenaTrapBrd,
    ArenaTrapSbrd,
    ArenaBruiser,
    ArenaBrutus,
    ArenaCerberus,
    ArenaDeathbike,
    ArenaDominator,
    ArenaImpaler,
    ArenaImperator,
    ArenaIssi,
    ArenaSasquatch,
    ArenaScarab,
    ArenaSlamvan,
    ArenaZr,
  }

  export enum BlipColor {
    White,
    Red,
    Green,
    Blue,
    Yellow = 5,
    LightRed,
    Violet,
    Pink,
    LightOrange,
    LightBrown,
    LightGreen,
    LightBlue,
    LightPurple,
    DarkPurple,
    Cyan,
    LightYellow,
    Organe,
    DarkPink = 19,
    GraniteGreen,
    DarkBrown,
    LightGray,
    LightPink,
    LemonGreen,
    ForestGreen,
    ElectricBlue,
    BrightPurple,
    DarkYellow,
    DarkCyan = 30,
    Beige = 36,
    DarkGray = 40,
    PinkRed,
    Gold = 46,
    Orange,
    BrilliantRose,
    MediumPurple = 50,
    Salmon,
    DarkGreen,
    BlizzardBlue,
    OracleBlue,
    Silver,
    EastBay = 58,
    YellowOrange = 60,
    MulberryPink,
    AltoGray,
    JellyBeanBlue,
    DarkOrange,
    Mamba,
    TransparentBlack = 72,
    DeepRed = 76,
    TransparentRed = 79,
    TransparentBlue = 80,
    Purple = 83,
  }

  export const enum VehicleIndicatorLights {
    BlinkLeft = 1,
    BlinkRight = 2,
    BlinkPermBoth = 4,
    StaticBoth = 8,
    Interior = 64,
  }

  export const enum WebSocketReadyState {
    Connecting,
    Open,
    Closing,
    Closed,
  }

  export const enum ConfigFlag {
    /** @alpha */
    DisableAutoWeaponSwap = "DISABLE_AUTO_WEAPON_SWAP",
    DisablePedPropKnockOff = "DISABLE_PED_PROP_KNOCK_OFF",
  }

  export interface IClientEvent {
    anyResourceError: (resourceName: string) => void;
    anyResourceStart: (resourceName: string) => void;
    anyResourceStop: (resourceName: string) => void;
    changedVehicleSeat: (vehicle: Vehicle, oldSeat: number, seat: number) => void;
    connectionComplete: () => void;
    consoleCommand: (name: string, ...args: string[]) => void;
    disconnect: () => void;
    enteredVehicle: (vehicle: Vehicle, seat: number) => void;
    gameEntityCreate: (entity: Entity) => void;
    gameEntityDestroy: (entity: Entity) => void;
    keydown: (key: number) => void;
    keyup: (key: number) => void;
    leftVehicle: (vehicle: Vehicle, seat: number) => void;
    removeEntity: (object: shared.BaseObject) => void;
    resourceStart: (errored: boolean) => void;
    resourceStop: () => void;
    syncedMetaChange: (entity: Entity, key: string, value: any, oldValue: any) => void;
    streamSyncedMetaChange: (entity: Entity, key: string, value: any, oldValue: any) => void;
    globalMetaChange: (key: string, value: any, oldValue: any) => void;
    globalSyncedMetaChange: (key: string, value: any, oldValue: any) => void;
    /**
     * No particular usage for now, stick to {@link everyTick} instead.
     *
     * @beta
     */
    render: () => void;
    [name: string]: (...args: any[]) => void;
  }

  export interface IDiscordOAuth2Token {
    readonly token: string;
    readonly expires: number;
    readonly scopes: string;
  }

  export interface IDiscordUser {
    readonly id: string;
    readonly name: string;
    readonly discriminator: string;
    readonly avatar: string;
  }

  /**
   * Vehicle handling, which affects how vehicle responds and reacts to the inputs of a driver.
   * This handling applies to particular vehicle instance, as opposed to the {@link HandlingData}.
   *
   * @remarks Changes will be reflected only on a particular instance of the vehicle. On creation, model handling will be used as a base and changed properties will be added on top of it.
   */
  export interface IVehicleHandling {
    readonly handlingNameHash: number;
    acceleration: number;
    antiRollBarBiasFront: number;
    antiRollBarBiasRear: number;
    antiRollBarForce: number;
    brakeBiasFront: number;
    brakeBiasRear: number;
    brakeForce: number;
    camberStiffness: number;
    centreOfMassOffset: shared.Vector3;
    clutchChangeRateScaleDownShift: number;
    clutchChangeRateScaleUpShift: number;
    collisionDamageMult: number;
    damageFlags: number;
    deformationDamageMult: number;
    downforceModifier: number;
    driveBiasFront: number;
    driveInertia: number;
    driveMaxFlatVel: number;
    engineDamageMult: number;
    handBrakeForce: number;
    handlingFlags: number;
    inertiaMultiplier: shared.Vector3;
    initialDragCoeff: number;
    initialDriveForce: number;
    initialDriveGears: number;
    initialDriveMaxFlatVel: number;
    lowSpeedTractionLossMult: number;
    mass: number;
    modelFlags: number;
    monetaryValue: number;
    oilVolume: number;
    percentSubmerged: number;
    percentSubmergedRatio: number;
    petrolTankVolume: number;
    rollCentreHeightFront: number;
    rollCentreHeightRear: number;
    seatOffsetDistX: number;
    seatOffsetDistY: number;
    seatOffsetDistZ: number;
    steeringLock: number;
    steeringLockRatio: number;
    suspensionBiasFront: number;
    suspensionBiasRear: number;
    suspensionCompDamp: number;
    suspensionForce: number;
    suspensionLowerLimit: number;
    suspensionRaise: number;
    suspensionReboundDamp: number;
    suspensionUpperLimit: number;
    tractionBiasFront: number;
    tractionBiasRear: number;
    tractionCurveLateral: number;
    tractionCurveLateralRatio: number;
    tractionCurveMax: number;
    tractionCurveMaxRatio: number;
    tractionCurveMin: number;
    tractionCurveMinRatio: number;
    tractionLossMult: number;
    tractionSpringDeltaMax: number;
    tractionSpringDeltaMaxRatio: number;
    unkFloat1: number;
    unkFloat2: number;
    unkFloat4: number;
    unkFloat5: number;
    weaponDamageMult: number;

    /**
     * Indicates whether vehicle handling was modified.
     *
     * @returns `true` if vehicle handling was modified; otherwise, `false`.
     */
    isModified(): boolean;

    /**
     * Resets the vehicle handling back to a model handling.
     */
    reset(): void;
  }

  export interface IHttpResponse {
    readonly statusCode: number;
    readonly body: string;
    readonly headers: Record<string, string>;
  }

  export interface IStackFrame {
    readonly script: string;
    readonly line: number;
    readonly function: string;
    readonly type: StackFrameType;
  }

  /** @beta */
  export class Audio extends shared.BaseObject {
    /**
     * Creates a new Audio instance.
     *
     * @param source The source url of the audio.
     * @param volume The volume of the audio. Ranges from 0 to 1.
     * @param category The category of the audio. Defaults to 'radio'.
     * @param play2D If the sound will be played in 2D, if false it will be 3D.
     */
    public constructor(source: string, volume: number, category?: string, play2D?: boolean);

    public source: string;

    public looped: boolean;

    public volume: number;

    public category: string;

    public readonly frontendPlay: boolean;

    public readonly currentTime: number;

    public readonly maxTime: number;

    public readonly playing: boolean;

    /**
     * @remarks This method has no effect if the @{link frontendPlay} property returns true.
     */
    public addOutput(entity: Entity | number): void;

    /**
     * @remarks This method has no effect if the @{link frontendPlay} property returns true.
     */
    public removeOutput(entity: Entity | number): void;

    /**
     * @remarks This method has no effect if the @{link frontendPlay} property returns true.
     */
    public getOutputs(): Array<Entity | number>;

    public play(): void;
    public pause(): void;
    public reset(): void;

    public seek(time: number): void;

    public on(event: "streamEnded", callback: () => void): void;
    public on(event: "error", callback: (code: number, message: string) => void): void;
  }

  export class WorldObject extends shared.BaseObject {
    /**
     * Object position
     */
    public pos: shared.Vector3;
  }

  export class Checkpoint extends WorldObject {
    public checkpointType: CheckpointType;
    public nextPos: shared.Vector3;
    public radius: number;
    public height: number;
    public color: shared.RGBA;

    constructor(type: CheckpointType, pos: shared.Vector3, nextPos: shared.Vector3, radius: number, height: number, rgbcolor: shared.RGBA);

    public isEntityIn(entity: Entity): boolean;
    public isPointIn(pos: shared.Vector3): boolean;
  }

  export class Entity extends WorldObject {
    /**
     * Array with all entities.
     *
     * @remarks This creates a clone of the array everytime it is called.
     * It is advised to call this once and store the result in a variable, before iterating over it.
     * @example
     * ```js
     * const entities = alt.Entity.all; // Store it in a variable, so it doesn't create a copy of the array on each iteration
     * for(let i = 0; i < entities.length; i++)
     * {
     *   alt.log(`${entities[i].id}`); // Logs the id of every entity
     * }
     * ```
     */
    public static readonly all: Array<Entity>;

    /** Entity unique id */
    public readonly id: number;

    /** Internal game id that can be used in native calls */
    public readonly scriptID: number;

    /**
     * Returns whether the entity is spawned in the game world.
     *
     * @remarks This does the same thing as checking if the {@link scriptID} is 0.
     *
     * @beta
     */
    public readonly isSpawned: boolean;

    /** Hash of entity model */
    public readonly model: number;

    /**
     * Object position
     */
    public readonly pos: shared.Vector3;

    /** Entity rotation in radians */
    public readonly rot: shared.Vector3;

    public readonly visible: boolean;

    /**
     * Retrieves the entity from the pool.
     *
     * @param id The id of the entity.
     * @returns Entity if it was found, otherwise null.
     */
    public static getByID(id: number): Entity | null;

    /**
     * Retrieves the entity from the pool.
     *
     * @param scriptID The script id of the entity.
     * @returns Entity if it was found, otherwise null.
     */
    public static getByScriptID(scriptID: number): Entity | null;

    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key.
     */
    public getSyncedMeta(key: string): any;

    /**
     * Determines whether contains the specified key.
     *
     * @param key The key of the value to locate.
     * @returns Return is dependent on whether element associated with the specified key is stored.
     */
    public hasSyncedMeta(key: string): boolean;

    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key.
     */
    public getStreamSyncedMeta(key: string): any;

    /**
     * Determines whether contains the specified key.
     *
     * @param key The key of the value to locate.
     * @returns Return is dependent on whether element associated with the specified key is stored.
     */
    public hasStreamSyncedMeta(key: string): boolean;
  }

  export class Player extends Entity {
    /**
     * Array with all players.
     *
     * @remarks This creates a clone of the array everytime it is called.
     * It is advised to call this once and store the result in a variable, before iterating over it.
     * @example
     * ```js
     * const players = alt.Player.all; // Store it in a variable, so it doesn't create a copy of the array on each iteration
     * for(let i = 0; i < players.length; i++)
     * {
     *   alt.log(`${players[i].name}`); // Logs the name of every player
     * }
     * ```
     */
    public static readonly all: Array<Player>;

    /**
     * Array with all streamed in players.
     *
     * @beta
     */
    public static readonly streamedIn: Array<Player>;

    /** Local player */
    public static readonly local: Player;

    /** Player talking state */
    public readonly isTalking: boolean;

    /** Player talking volume */
    public readonly micLevel: number;

    /** Player name */
    public readonly name: string;

    /** Player's vehicle, null if player is not in any vehicle */
    public readonly vehicle: Vehicle | null;

    /**
     * Current weapon components.
     */
    public readonly currentWeaponComponents: Array<number>;

    /**
     * Tint index for currently equipped weapon.
     *
     * @alpha
     */
    //public readonly currentWeaponTintIndex: number;

    /**
     * Currently equipped weapon.
     */
    public readonly currentWeapon: number;

    /**
     * Is the player currently jumping.
     *
     * @alpha
     */
    //public readonly isJumping: boolean;

    /**
     * Is the player currently in ragdoll.
     */
    public readonly isInRagdoll: boolean;

    /**
     * Is the player currently aiming.
     *
     * @remarks
     * Returns ``true`` _ONLY_ if:
     *  - you are in first person with a gun equipped and you are not sprinting
     *  - you are in third person and aiming/shooting
     */
    public readonly isAiming: boolean;

    /**
     * Is the player currently shooting with a weapon.
     */
    //public readonly isShooting: boolean;

    /**
     * Is the player currently reloading their weapon.
     */
    //public readonly isReloading: boolean;

    /**
     * Current armour.
     */
    public readonly armour: number;

    /**
     * Max available armour value.
     */
    public readonly maxArmour: number;

    /**
     * Current player movement speed.
     */
    public readonly moveSpeed: number;

    /**
     * Position the player is currently aiming at.
     */
    public readonly aimPos: shared.Vector3;

    /**
     * Rotation of the head of the player.
     */
    public readonly headRot: shared.Vector3;

    /**
     * Curent seat the player is sitting in.
     */
    public readonly seat: number;

    /**
     * The entity the player is aiming at.
     */
    public readonly entityAimingAt: Entity | null;

    /**
     * The current aim offset of the player.
     */
    public readonly entityAimOffset: shared.Vector3 | null;

    /**
     * Is the flashlight of the player activated.
     */
    public readonly flashlightActive: boolean;

    /**
     * Current health of the player.
     */
    public readonly health: number;

    /**
     * Current max health of the player.
     */
    public readonly maxHealth: number;

    /**
     * Retrieves the player from the pool.
     *
     * @param id The id of the player.
     * @returns Entity if it was found, otherwise null.
     */
    public static getByID(id: number): Player | null;

    /**
     * Retrieves the player from the pool.
     *
     * @param scriptID The script id of the player.
     * @returns Entity if it was found, otherwise null.
     */
    public static getByScriptID(scriptID: number): Player | null;

    /**
     * Set & get the volume for 3D Voice.
     *
     * @remarks Value needs to be between 0-1.
     */
    public spatialVolume: number;

    /**
     * Set & get the volume for 2D Voice.
     *
     * @remarks Value needs to be between 0-1.
     */
    public nonSpatialVolume: number;
  }

  export class Vehicle extends Entity {
    /**
     * Array with all vehicles.
     *
     * @remarks This creates a clone of the array everytime it is called.
     * It is advised to call this once and store the result in a variable, before iterating over it.
     * @example
     * ```js
     * const vehicles = alt.Vehicle.all; // Store it in a variable, so it doesn't create a copy of the array on each iteration
     * for(let i = 0; i < vehicles.length; i++)
     * {
     *   alt.log(`${vehicles[i].model}`); // Logs the model of every vehicle
     * }
     * ```
     */
    public static readonly all: Array<Vehicle>;

    /**
     * Array with all streamed in vehicles.
     *
     * @beta
     */
    public static readonly streamedIn: Array<Vehicle>;

    /**
     * Vehicle gear
     *
     * @remarks Setter is only available in dev and rc branch.
     *
     * @param value The desired gear.
     *
     * @beta
     */
    public set gear(value: number);

    /**
     * Vehicle gear
     *
     * @returns A number indicating actual gear.
     */
    public get gear(): number;

    /**
     * Vehicle max gear.
     *
     * @beta
     */
    public maxGear: number;

    /**
     * Vehicle handling, which affects how vehicle responds and reacts to the inputs of a driver.
     */
    public handling: IVehicleHandling;

    /**
     * Vehicle indicator lights.
     *
     * @beta
     */
    public indicatorLights: VehicleIndicatorLights;

    /**
     * Vehicle RPM.
     *
     * @returns Normalised value on a scale of [0, 1].
     */
    public readonly rpm: number;

    /**
     * Vehicle wheels speed.
     */
    public readonly speed: number;

    /**
     * Vehicle speed vector.
     */
    public readonly speedVector: shared.Vector3;

    /**
     * Vehicle wheels count.
     */
    public readonly wheelsCount: number;

    /**
     * Is the vehicle destroyed.
     *
     * @alpha
     */
    //public readonly isDestroyed: boolean;

    /**
     * Available modkits for the vehicle.
     *
     * @alpha
     */
    //public readonly modKitsCount: number;

    /**
     * Current vehicle modkit.
     *
     * @alpha
     */
    //public readonly modKit: number;

    /**
     * Vehicle primary color.
     *
     * @alpha
     */
    //public readonly primaryColor: number;

    /**
     * Custom (RGB) vehicle primary color.
     *
     * @alpha
     */
    //public readonly customPrimaryColor: shared.RGBA;

    /**
     * Vehicle secondary color.
     *
     * @alpha
     */
    //public readonly secondaryColor: number;

    /**
     * Custom (RGB) vehicle secondary color.
     *
     * @alpha
     */
    //public readonly customSecondaryColor: shared.RGBA;

    /**
     * Vehicle pearl color.
     *
     * @alpha
     */
    //public readonly pearlColor: number;

    /**
     * Vehicle wheel color.
     *
     * @alpha
     */
    //public readonly wheelColor: number;

    /**
     * Vehicle interior color.
     *
     * @alpha
     */
    //public readonly interiorColor: number;

    /**
     * Vehicle dashboard color.
     *
     * @alpha
     */
    //public readonly dashboardColor: number;

    /**
     * Vehicle tire smoke color.
     *
     * @alpha
     */
    //public readonly tireSmokeColor: number;

    /**
     * Vehicle wheel type.
     *
     * @alpha
     */
    //public readonly wheelType: number;

    /**
     * Vehicle front wheels variation.
     *
     * @alpha
     */
    //public readonly frontWheels: number;

    /**
     * Vehicle rear wheels variation.
     *
     * @alpha
     */
    //public readonly rearWheels: number;

    /**
     * Are custom tires active.
     *
     * @alpha
     */
    //public readonly customTires: boolean;

    /**
     * Vehicle darkness.
     *
     * @alpha
     */
    //public readonly darkness: number;

    /**
     * Vehicle number plate type index.
     *
     * @alpha
     */
    //public readonly numberPlateIndex: number;

    /**
     * Vehicle number plate text.
     *
     * @alpha
     */
    //public readonly numberPlateText: string;

    /**
     * Vehicle window tint.
     *
     * @alpha
     */
    //public readonly windowTint: number;

    /**
     * Vehicle dirt level.
     *
     * @alpha
     */
    //public readonly dirtLevel: number;

    /**
     * Vehicle neon.
     *
     * @alpha
     */
    //public readonly neon: IVehicleNeon;

    /**
     * Vehicle neon color.
     *
     * @alpha
     */
    //public readonly neonColor: shared.RGBA;

    /**
     * Vehicle livery.
     *
     * @alpha
     */
    //public readonly livery: number;

    /**
     * Vehicle roof livery.
     *
     * @alpha
     */
    //public readonly roofLivery: number;

    /**
     * Vehicle engine state.
     *
     * @alpha
     */
    //public readonly engineOn: boolean;

    /**
     * Vehicle handbrake state.
     *
     * @alpha
     */
    //public readonly handbrakeActive: boolean;

    /**
     * Vehicle headlight color.
     *
     * @alpha
     */
    //public readonly headlightColor: number;

    /**
     * Vehicle active radio station.
     *
     * @alpha
     */
    //public readonly activeRadioStation: number;

    /**
     * Vehicle siren state.
     *
     * @alpha
     */
    //public readonly sirenActive: boolean;

    /**
     * Vehicle lock state.
     *
     * @alpha
     */
    //public readonly lockState: number;

    /**
     * Vehicle daylight state.
     *
     * @alpha
     */
    //public readonly daylightOn: boolean;

    /**
     * Vehicle nightlight state.
     *
     * @alpha
     */
    //public readonly nightlightOn: boolean;

    /**
     * Vehicle roof state.
     *
     * @alpha
     */
    //public readonly roofState: number;

    /**
     * Vehicle flamethrower state.
     *
     * @alpha
     */
    //public readonly flamethrowerActive: boolean;

    /**
     * Vehicle lights multiplier.
     *
     * @alpha
     */
    //public readonly lightsMultiplier: number;

    /**
     * The vehicle's engine health.
     *
     * @alpha
     */
    //public readonly engineHealth: number;

    /**
     * The vehicle's petrol tank health.
     *
     * @alpha
     */
    //public readonly petrolTankHealth: number;

    /**
     * Vehicle repairs count.
     *
     * @alpha
     */
    //public readonly repairsCount: number;

    /**
     * The vehicle's body health.
     *
     * @alpha
     */
    //public readonly bodyHealth: number;

    /**
     * The vehicle's additional body health.
     *
     * @alpha
     */
    //public readonly bodyAdditionalHealth: number;

    /**
     * Does the vehicle currently have the bulletproof windows?
     *
     * @alpha
     */
    //public readonly hasArmoredWindows: boolean;

    /**
     * Determines whether the vehicle's engine should be turned on/off automatically.
     *
     * @alpha
     */
    //public readonly manualEngineControl: boolean;

    /**
     * Retrieves the vehicle from the pool.
     *
     * @param id The id of the vehicle.
     * @returns Entity if it was found, otherwise null.
     */
    public static getByID(id: number): Vehicle | null;

    /**
     * Retrieves the vehicle from the pool.
     *
     * @param scriptID The script id of the vehicle.
     * @returns Entity if it was found, otherwise null.
     */
    public static getByScriptID(scriptID: number): Vehicle | null;
  }

  export class WebView extends shared.BaseObject {
    /** View visibility state */
    public isVisible: boolean;
    /** View URL */
    public url: string;

    /**
     * Is the webview a overlay.
     *
     * @alpha
     */
    public readonly isOverlay: boolean;

    /**
     * Is the webview ready.
     *
     * @alpha
     */
    public readonly isReady: boolean;

    /**
     * Is the webview focused.
     *
     * @alpha
     */
    public focused: boolean;

    /**
     * Creates a fullscreen WebView.
     *
     * @param url URL of the html file.
     * @param isOverlay true to render as overlay, false to render on game's GUI stage.
     */
    constructor(url: string, isOverlay?: boolean);

    /**
     * Creates a WebView.
     *
     * @param url URL of the html file.
     * @param pos x, y coordinates of the position.
     *
     * @beta
     *
     * @hidden
     */
    constructor(url: string, pos: shared.IVector2);

    /**
     * Creates a custom size WebView and specific pos.
     *
     * @param url URL of the html file.
     * @param pos x, y coordinates of the position.
     * @param size x, y to define the size.
     *
     * @beta
     *
     * @hidden
     */
    constructor(url: string, pos: shared.IVector2, size: shared.IVector2);

    /**
     * Creates a custom size WebView and specific pos.
     *
     * @param url URL of the html file.
     * @param isOverlay true to render as overlay, false to render on game's GUI stage.
     * @param pos x, y coordinates of the position.
     * @param size x, y to define the size.
     *
     * @beta
     *
     * @hidden
     */
    constructor(url: string, isOverlay: boolean, pos: shared.IVector2, size: shared.IVector2);

    /**
     * Creates a WebView rendered on game object.
     *
     * @param url URL of the html file.
     * @param propHash Hash of object to render on.
     * @param targetTexture Name of object's texture to replace.
     */
    constructor(url: string, propHash: number, targetTexture: string);

    /**
     * Emits specified event across particular WebView.
     *
     * @param eventName Name of the event.
     * @param args Rest parameters for emit to send.
     */
    public emit(eventName: string, ...args: any[]): void;

    /**
     * Unsubscribes from WebView event handler with specified listener.
     *
     * @remarks Listener should be of the same reference as when event was subscribed.
     *
     * @param eventName Name of the event.
     * @param listener Listener that should be removed.
     */
    public off(eventName: string, listener: (...args: any[]) => void): void;

    /**
     * Subscribes to WebView event handler with specified listener.
     *
     * @param eventName Name of the event.
     * @param listener Listener that should be added.
     */
    public on(eventName: string, listener: (...args: any[]) => void): void;

    /**
     * Subscribes to WebView event handler with specified listener.
     *
     * @param eventName Name of the event.
     * @param listener Listener that should be added.
     */
    public on(eventName: "load", listener: () => void): void;

    /**
     * Subscribes to WebView event with specified listener, which only triggers once.
     *
     * @param eventName Name of the event.
     * @param listener Listener that should be added.
     */
    public once(eventName: string, listener: (...args: any[]) => void): void;

    /**
     * Focuses the webview so it can be interacted with.
     */
    public focus(): void;

    /**
     * Unfocuses the webview so it ignores user input.
     */
    public unfocus(): void;

    /**
     * Gets all the listeners for the specified webview event.
     *
     * @param eventName Name of the event.
     * @returns Array of listener functions for that event.
     *
     * @beta
     */
    public getEventListeners(eventName: string | null): Function[];
  }

  export class Blip extends WorldObject {
    public static routeColor: shared.RGBA;

    public alpha: number;

    public asMissionCreator: boolean;

    public bright: boolean;

    public category: number;

    public color: BlipColor;

    public crewIndicatorVisible: boolean;

    public display: number;

    public flashes: boolean;

    public flashesAlternate: boolean;

    public flashInterval: number;

    public flashTimer: number;

    public friendIndicatorVisible: boolean;

    public gxtName: string;

    public heading: number;

    public headingIndicatorVisible: boolean;

    public highDetail: boolean;

    public name: string;

    public number: number;

    public outlineIndicatorVisible: boolean;

    public priority: number;

    public pulse: boolean;

    public route: boolean;

    public scale: number;

    public secondaryColor: number | shared.RGBA;

    public shortRange: boolean;

    public showCone: boolean;

    public shrinked: boolean;

    public size: shared.Vector2;

    public sprite: BlipSprite;

    public tickVisible: boolean;

    public fade(opacity: number, duration: number): void;
  }

  export class AreaBlip extends Blip {
    constructor(x: number, y: number, z: number, width: number, height: number);
  }

  export class RadiusBlip extends Blip {
    constructor(x: number, y: number, z: number, radius: number);
  }

  export class PointBlip extends Blip {
    constructor(x: number, y: number, z: number);
  }

  // /** @alpha */
  // export class PedBlip extends Blip {
  //   constructor(ped: number);
  // }

  // /** @alpha */
  // export class VehicleBlip extends Blip {
  //   constructor(vehicle: number);
  // }

  /**
   * Vehicle handling, which affects how vehicle responds and reacts to the inputs of a driver.
   * This handling applies to all vehicle instances, as opposed to the {@link Vehicle.handling}.
   *
   * @remarks Changes will be reflected on every vehicle using this particular handling, but might require vehicle recreating for changes to apply properly.
   */
  export class HandlingData {
    public readonly handlingNameHash: number;
    public acceleration: number;
    public antiRollBarBiasFront: number;
    public antiRollBarBiasRear: number;
    public antiRollBarForce: number;
    public brakeBiasFront: number;
    public brakeBiasRear: number;
    public brakeForce: number;
    public camberStiffnesss: number;
    public centreOfMassOffset: shared.Vector3;
    public clutchChangeRateScaleDownShift: number;
    public clutchChangeRateScaleUpShift: number;
    public collisionDamageMult: number;
    public damageFlags: number;
    public deformationDamageMult: number;
    public downforceModifier: number;
    public driveBiasFront: number;
    public driveInertia: number;
    public driveMaxFlatVel: number;
    public engineDamageMult: number;
    public handBrakeForce: number;
    public handlingFlags: number;
    public inertiaMultiplier: shared.Vector3;
    public initialDragCoeff: number;
    public initialDriveForce: number;
    public initialDriveGears: number;
    public initialDriveMaxFlatVel: number;
    public lowSpeedTractionLossMult: number;
    public mass: number;
    public modelFlags: number;
    public monetaryValue: number;
    public oilVolume: number;
    public percentSubmerged: number;
    public percentSubmergedRatio: number;
    public petrolTankVolume: number;
    public rollCentreHeightFront: number;
    public rollCentreHeightRear: number;
    public seatOffsetDistX: number;
    public seatOffsetDistY: number;
    public seatOffsetDistZ: number;
    public steeringLock: number;
    public steeringLockRatio: number;
    public suspensionBiasFront: number;
    public suspensionBiasRear: number;
    public suspensionCompDamp: number;
    public suspensionForce: number;
    public suspensionLowerLimit: number;
    public suspensionRaise: number;
    public suspensionReboundDamp: number;
    public suspensionUpperLimit: number;
    public tractionBiasFront: number;
    public tractionBiasRear: number;
    public tractionCurveLateral: number;
    public tractionCurveLateralRatio: number;
    public tractionCurveMax: number;
    public tractionCurveMaxRatio: number;
    public tractionCurveMin: number;
    public tractionCurveMinRatio: number;
    public tractionLossMult: number;
    public tractionSpringDeltaMax: number;
    public tractionSpringDeltaMaxRatio: number;
    public unkFloat1: number;
    public unkFloat2: number;
    public unkFloat4: number;
    public unkFloat5: number;
    public weaponDamageMult: number;

    /**
     * Initializes a new instance of the {@link HandlingData} class that can modify handling properties for the specified handling name.
     *
     */
    public static getForHandlingName(handlingHash: number): HandlingData;

    /**
     * Initializes a new instance of the {@link HandlingData} class that can modify handling properties for the specified handling name.
     *
     * @deprecated See {@link getForHandlingName}.
     */
    public static getForModelName(handlingHash: number): HandlingData;
  }

  export class MapZoomData {
    public fZoomScale: number;
    public fZoomSpeed: number;
    public fScrollSpeed: number;
    public vTilesX: number;
    public vTilesY: number;

    constructor(zoomDataId: number);

    public static get(zoomData: string): MapZoomData;

    public static resetAll(): void;

    public reset(): void;
  }

  export class LocalStorage {
    /**
     * Gets the local storage instance.
     */
    public static get(): LocalStorage;

    /**
     * Gets the value from the specified key in the local storage.
     *
     * @beta
     */
    public static get(key: string): any;

    /**
     * Deletes the specified key from the local storage.
     *
     * @beta
     */
    public static delete(key: string): void;

    /**
     * Deletes all keys from the local storage.
     *
     * @beta
     */
    public static deleteAll(): void;

    /**
     * Alias for {@link deleteAll}.
     *
     * @beta
     */
    public static clear(): void;

    /**
     * Saves the changes to the disk.
     *
     * @beta
     */
    public static save(): void;

    /**
     * Sets the specified key to the specified value in the local storage.
     *
     * @beta
     */
    public static set(key: string, value: any): void;

    /**
     * Deletes the specified key from the local storage.
     *
     * @deprecated Use the static methods instead.
     */
    public delete(key: string): void;

    /**
     * Deletes all keys from the local storage.
     *
     * @deprecated Use the static methods instead.
     */
    public deleteAll(): void;

    /**
     * @remarks Alias for deleteAll.
     *
     * @deprecated Use the static methods instead.
     */
    public clear(): void;

    /**
     * Gets the value from the specified key in the local storage.
     *
     * @deprecated Use the static methods instead.
     */
    public get(key: string): any;

    /**
     * Saves the changes to the disk.
     *
     * @deprecated Use the static methods instead.
     */
    public save(): void;

    /**
     * Sets the specified key to the specified value in the local storage.
     *
     * @deprecated Use the static methods instead.
     */
    public set(key: string, value: any): void;
  }

  export class MemoryBuffer {
    constructor(size: number);

    public byte(offset: number): number;

    public double(offset: number): number;

    public float(offset: number): number;

    public int(offset: number): number;

    public long(offset: number): bigint;

    public short(offset: number): number;

    public string(offset: number, length: number): string;

    public ubyte(offset: number): number;

    public uint(offset: number): number;

    public ulong(offset: number): bigint;

    public ushort(offset: number): number;

    public address(): bigint;

    public free(): boolean;
  }

  export class Discord {
    public static readonly currentUser: IDiscordUser | null;
  }

  export class Voice {
    /**
     * Determines whether the microphone input is currently disabled.
     */
    static muteInput: boolean;

    /**
     * Determines if the voice activation is enabled.
     *
     * @beta
     */
    static activityInputEnabled: boolean;

    /**
     * Returns the keycode of the voice activation key.
     *
     * @beta
     */
    static activationKey: number;
  }

  /**
   * Adds a new GXT entry with the specified value.
   *
   * @remarks The GXT entry FE_THDR_GTAO is locked and cannot be changed.
   *
   * @param key GXT entry name.
   * @param value GXT entry value.
   */
  export function addGxtText(key: string, value: string): void;

  /**
   * Executes the specified scaleform method on the minimap.
   */
  export function beginScaleformMovieMethodMinimap(methodName: string): boolean;

  /**
   * Emits specified event to server.
   *
   * @param player Event is sent to specific player.
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   */
  export function emitServer(name: string, ...args: any[]): void;

  /**
   * Returns whether the game controls are currently enabled.
   */
  export function gameControlsEnabled(): boolean;

  /**
   * Gets the current position of the cursor.
   */
  export function getCursorPos(): shared.Vector2;

  /**
   * Gets the value of the specified GXT entry.
   *
   * @param key GXT entry name.
   */
  export function getGxtText(key: string): string;

  export function getLicenseHash(): string;

  /**
   * Gets the current alt:V locale.
   */
  export function getLocale(): string;

  /**
   * Gets the current milliseconds per game minute.
   *
   * @remarks This is set with the {@link setMsPerGameMinute} function.
   */
  export function getMsPerGameMinute(): number;

  /**
   * Gets the state of the specified permission.
   *
   * @param permId Permission id.
   * @returns Permission state.
   */
  export function getPermissionState(permId: Permission): PermissionState;

  /**
   * Gets a value of the specified statistic.
   *
   * @param statName Name of the statistic.
   */
  export function getStat(statName: StatName): number;

  /**
   * Returns state of console window.
   *
   * @returns True when console window is opened.
   */
  export function isConsoleOpen(): boolean;

  /**
   * Returns state of game window.
   *
   * @returns True when game window is focused.
   */
  export function isGameFocused(): boolean;

  /**
   * Returns if alt:V is in streamer mode.
   *
   * @returns True when alt:V client is launched in streamer mode.
   *
   */
  export function isInStreamerMode(): boolean;

  /**
   * Returns if alt:V is in debug mode.
   *
   * @returns True when the alt:V client is launched with debug mode enabled.
   *
   * @deprecated In dev branch, use {@link debug}.
   */
  export function isInDebug(): boolean;

  /**
   * Returns whether voice activity input is enabled in alt:V settings.
   *
   * @returns True when voice activity input is enabled in alt:V settings.
   *
   * @deprecated Use alt.Voice.activityInputEnabled instead.
   */
  export function isVoiceActivityInputEnabled(): boolean;

  /**
   * Returns whether the specified key is toggled.
   *
   * @param key Keycode.
   */
  export function isKeyToggled(key: number): boolean;

  /**
   * Determines whether the specified key is pressed.
   *
   * @param Keycode of the key.
   */
  export function isKeyDown(key: number): boolean;

  /**
   * Returns state of user interface and console window.
   *
   * @returns True when user interface or console window is opened.
   */
  export function isMenuOpen(): boolean;

  export function isTextureExistInArchetype(modelHash: number, modelName: string): boolean;

  /**
   * Loads a model into memory synchronously.
   *
   * @param modelHash Hash of the model.
   */
  export function loadModel(modelHash: number): void;

  /**
   * Loads a model into memory asynchronously.
   *
   * @param modelHash Hash of the model.
   */
  export function loadModelAsync(modelHash: number): void;

  /**
   * Unsubscribes from a server event with the specified listener.
   *
   * @remarks Listener should be of the same reference as when event was subscribed to.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be removed.
   */
  export function offServer(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Subscribes to a client event with the specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on<K extends keyof IClientEvent>(eventName: K, listener: IClientEvent[K]): void;

  /**
   * Subscribes to a client event with the specified listener, which only triggers once.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function once<K extends keyof IClientEvent>(eventName: K, listener: IClientEvent[K]): void;

  /**
   * Subscribes to a server event with the specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function onServer(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Subscribes to all server events with the specified listener.
   *
   * @remarks Listener will be only called for user-created events.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   *
   * @beta
   */
  export function onServer(listener: (eventName: string, ...args: any[]) => void): void;

  /**
   * Subscribes to a server event with the specified listener, which only triggers once.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function onceServer(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Subscribes to all server events with the specified listener, which only triggers once.
   *
   * @remarks Listener will be only called for user-created events.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   *
   * @beta
   */
  export function onceServer(listener: (eventName: string, ...args: any[]) => void): void;

  /**
   * Removes the specified GXT entry.
   *
   * @param key GXT entry name.
   */
  export function removeGxtText(key: string): void;

  /**
   * Unloads the specified ipl.
   *
   * @param iplName Name of the ipl.
   */
  export function removeIpl(iplName: string): void;

  /**
   * Loads the specified ipl.
   *
   * @param iplName Name of the ipl.
   */
  export function requestIpl(iplName: string): void;

  /**
   * The output is returned as a base64 string.
   *
   * @returns Return is dependent on the success of the operation.
   *
   */
  export function takeScreenshot(): Promise<string>;

  /**
   * The output is returned as a base64 string.
   *
   * @remarks This only takes a screenshot of the raw GTA:V window. WebViews, game overlays etc. won't be captured.
   *
   * @returns Return is dependent on the success of the operation.
   */
  export function takeScreenshotGameOnly(): Promise<string>;

  /**
   * Resets a statistic to its default value.
   *
   * @param statName Name of the statistic.
   */
  export function resetStat(statName: StatName): void;

  /**
   * Freezes the camera in place so it doesn't change position or rotation.
   *
   * @remarks You can still move your character even if your camera is frozen.
   *
   * @param state True to freeze the camera, false to unfreeze the camera.
   */
  export function setCamFrozen(state: boolean): void;

  /**
   * Sets the specified ped config flag of the local player to the specified state.
   *
   * @param flag Config flag name.
   * @param state Config flag state.
   */
  export function setConfigFlag(flag: ConfigFlag, state: boolean): void;

  /**
   * Returns the state of the specified ped config flag of the local player.
   *
   * @param flag Config flag name.
   * @returns State of the specified config flag.
   */
  export function getConfigFlag(flag: ConfigFlag): boolean;

  /**
   * Returns whether the specified config flag exists.
   *
   * @param flag Config flag name.
   * @returns True when the config flag exists.
   */
  export function doesConfigFlagExist(flag: string): boolean;

  /**
   * Sets the current position of the cursor.
   *
   * @remarks The cursor has to be visible for this to take effect.
   */
  export function setCursorPos(pos: shared.IVector2): void;

  /**
   * Sets the amount of real milliseconds that have to pass every game minute.
   */
  export function setMsPerGameMinute(milliseconds: number): void;

  /**
   * Sets the rotation velocity for the specified entity.
   *
   * @param scriptID The script id of the entity.
   * @param x The rotation velocity on the X axis.
   * @param y The rotation velocity on the Y axis.
   * @param z The rotation velocity on the Z axis.
   */
  export function setRotationVelocity(scriptID: number, x: number, y: number, z: number): void;

  /**
   * Sets a statistic to desired value.
   *
   * @param statName Name of the statistic.
   * @param value Value of the statistic you want to set.
   */
  export function setStat(statName: StatName, value: number): void;

  /**
   * Sets the current weather cycle.
   *
   * @remarks This has to be activated after using it by using the {@link setWeatherSyncActive} function.
   * The weathers and multipliers array has to be of the same length.
   *
   * @param weathers An array containing the weather ids for the weather cycle.
   * @param multipliers An array containing the multipliers for the weather cycle.
   */
  export function setWeatherCycle(weathers: Array<number>, multipliers: Array<number>): void;

  /**
   * Sets whether the weather sync is active.
   *
   * @remarks The weather sync has to be set by using the {@link setWeatherCycle} function.
   *
   * @param isActive Whether the weather sync should be active.
   */
  export function setWeatherSyncActive(isActive: boolean): void;

  /**
   * Changes the visibility of cursor.
   *
   * @remarks This is handled by resource scoped internal integer, which gets increased/decreased by every function call. When you show your cursor 5 times, to hide it you have to do that 5 times accordingly.
   *
   * @param state A boolean indicating whenever cursor should be visible or not.
   */
  export function showCursor(state: boolean): void;

  /**
   * Toggles the game controls.
   *
   * @remarks When this is set to false, all controls are disabled, so you can't move your character or the camera.
   *
   * @param state True to enable controls, false to disable controls.
   */
  export function toggleGameControls(state: boolean): void;

  export function toggleVoiceControls(state: boolean): void;

  /** @beta */
  export class WebSocketClient extends shared.BaseObject {
    public autoReconnect: boolean;

    public perMessageDeflate: boolean;

    public pingInterval: number;

    public url: string;

    public readonly readyState: WebSocketReadyState;

    constructor(url: string);

    public on(eventName: "open", listener: () => void): void;

    public on(eventName: "close", listener: (code: number, reason: string) => void): void;

    public on(eventName: "message", listener: (message: string) => void): void;

    public on(eventName: "error", listener: (error: string) => void): void;

    public off(eventName: string, listener: (...args: any[]) => void): void;

    /**
     * Starts the websocket connection.
     */
    public start(): void;

    /**
     * Stops the websocket connection.
     */
    public stop(): void;

    /**
     * Sends the specified message to the websocket server.
     *
     * @param message The message to send.
     * @returns Whether sending the message was successful.
     */
    public send(message: string | ArrayBuffer | ArrayBufferView): boolean;

    /**
     * Adds a sub protocol to the websocket.
     *
     * @param protocol Name of the protocol.
     */
    public addSubProtocol(protocol: string): void;

    /**
     * Gets all added sub protocols.
     */
    public getSubProtocols(): string[];

    /**
     * Sets the specified header to the specified value.
     *
     * @param header Header name.
     * @param value Header value.
     */
    public setExtraHeader(header: string, value: string): void;

    /**
     * Gets all the listeners for the specified websocket event.
     *
     * @param eventName Name of the event.
     * @returns Array of listener functions for that event.
     *
     * @beta
     */
    public getEventListeners(eventName: string | null): Function[];
  }

  /**
   * Load a specific ytyp file.
   *
   * @example
   * ```js
   * alt.loadYtyp("x64u.rpf/levels/gta5/_hills/country_06/country_06_metadata.rpf/cs6_08_interior_cs6_08_mine_int.ytyp")
   * ```
   *
   * @param path Relative path to the game folder.
   *
   * @beta
   */
  export function loadYtyp(path: string): boolean;

  /**
   * Unload a specific ytyp file.
   *
   * @example
   * ```js
   * alt.unloadYtyp("x64u.rpf/levels/gta5/_hills/country_06/country_06_metadata.rpf/cs6_08_interior_cs6_08_mine_int.ytyp")
   * ```
   *
   * @param path Relative path to the game folder.
   *
   * @beta
   */
  export function unloadYtyp(path: string): boolean;

  /**
   * Evaluates and executes the given JavaScript code.
   *
   * @remarks The code is evaluated in its own context, so it cannot access variables, functions etc. from the calling file.
   *
   * @param code The JavaScript code.
   * @returns The exports of the evaluated module.
   *
   * @beta
   */
  export function evalModule(code: string): Record<string, any>;

  /**
   * Gets all the listeners for the specified local event.
   *
   * @param eventName Name of the event or null for generic event.
   * @returns Array of listener functions for that event.
   *
   * @beta
   */
  export function getEventListeners(eventName: string | null): Function[];

  /**
   * Gets all the listeners for the specified remote event.
   *
   * @param eventName Name of the event or null for generic event.
   * @returns Array of listener functions for that event.
   *
   * @beta
   */
  export function getRemoteEventListeners(eventName: string | null): Function[];

  /** @beta */
  export class HttpClient extends shared.BaseObject {
    public constructor();

    public setExtraHeader(header: string, value: string): void;

    public getExtraHeaders(): Record<string, string>;

    public get(url: string): IHttpResponse;

    public head(url: string): IHttpResponse;

    public post(url: string, body: string): IHttpResponse;

    public put(url: string, body: string): IHttpResponse;

    public delete(url: string, body: string): IHttpResponse;

    public connect(url: string, body: string): IHttpResponse;

    public options(url: string, body: string): IHttpResponse;

    public trace(url: string, body: string): IHttpResponse;

    public patch(url: string, body: string): IHttpResponse;
  }

  /**
   * Gets the Base64 encoded string of the headshot with the specified ID.
   *
   * @remarks The headshot ID is returned by the `registerPedheadshot3`, `registerPedheadshotTransparent` or `registerPedheadshot` native.
   *
   * @param id ID of the headshot.
   * @returns The Base64 string of the headshot image.
   *
   * @beta
   */
  export function getHeadshotBase64(id: number): string;

  /**
   * Gets the current V8 stack trace.
   *
   * @param maxDepth Maximum depth of the stack trace. Defaults to 16.
   * @returns Array of stack frames, starting at the latest frame.
   *
   * @alpha
   */
  export function getStackTrace(maxDepth?: number): Array<IStackFrame>;

  export * from "alt-shared";
}

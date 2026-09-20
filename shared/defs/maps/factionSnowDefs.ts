import { GameConfig } from "../../gameConfig.ts";
import { util } from "../../utils/util.ts";
import { v2 } from "../../utils/v2.ts";
import type { MapDef } from "../mapDefs.ts";
import { Main, type PartialMapDef } from "./baseDefs.ts";

const mapDef: PartialMapDef = {
    mapId: GameConfig.MapId.Faction,
    desc: {
        name: "50v50",
        icon: "img/gui/star.svg",
        buttonCss: "btn-mode-faction-snow",
        buttonText: "50v50",
        backgroundImg: "img/main_splash_0_7_0.png",
    },
    assets: {
        audio: [
            {
                name: "lt_assigned_01",
                channel: "ui",
            },
            {
                name: "captain_assigned_01",
                channel: "ui",
            },
            {
                name: "medic_assigned_01",
                channel: "ui",
            },
            {
                name: "marksman_assigned_01",
                channel: "ui",
            },
            {
                name: "recon_assigned_01",
                channel: "ui",
            },
            {
                name: "grenadier_assigned_01",
                channel: "ui",
            },
            {
                name: "bugler_assigned_01",
                channel: "ui",
            },
            {
                name: "last_man_assigned_01",
                channel: "ui",
            },
            {
                name: "ping_leader_01",
                channel: "ui",
            },
            {
                name: "bugle_01",
                channel: "activePlayer",
            },
            {
                name: "bugle_02",
                channel: "activePlayer",
            },
            {
                name: "bugle_03",
                channel: "activePlayer",
            },
            {
                name: "bugle_01",
                channel: "otherPlayers",
            },
            {
                name: "bugle_02",
                channel: "otherPlayers",
            },
            {
                name: "bugle_03",
                channel: "otherPlayers",
            },
            { name: "log_05", channel: "sfx" },
            { name: "vault_change_03", channel: "sfx" },
            { name: "watering_01", channel: "sfx" },
            { name: "snowball_01", channel: "sfx" },
            { name: "snowball_02", channel: "sfx" },
            { name: "snowball_pickup_01", channel: "ui" },
        ],
        atlases: ["loadout", "shared", "faction", "snow", "factionSnow"], 
    },
    biome: {
        colors: {
            background: 0x93639,
            water: 0xc4d51,
            waterRipple: 0xb3f0ff,
            beach: 0xcdb35b,
            riverbank: 0x905e24,
            grass: 0xbdbdbd,
            underground: 0x1b0d03,
            playerSubmerge: 0x2b8ca4,
            playerGhillie: 0xbbbbbb,
        },
        particles: { camera: "falling_snow_slow" },
    },
    gameMode: {
        maxPlayers: 100,
        factionMode: true,
        factions: 2,
    },
    /* STRIP_FROM_PROD_CLIENT:START */
    gameConfig: {
        planes: {
            timings: [
                {
                    circleIdx: 1,
                    wait: 10,
                    options: {
                        type: GameConfig.Plane.Airstrike,
                        numPlanes: [
                            { count: 3, weight: 5 },
                            { count: 4, weight: 1 },
                            { count: 5, weight: 0.1 },
                        ],
                        airstrikeZoneRad: 60,
                        wait: 1.5,
                        delay: 1,
                    },
                },
                {
                    circleIdx: 2,
                    wait: 6,
                    options: { type: GameConfig.Plane.Airdrop },
                },
                {
                    circleIdx: 2,
                    wait: 30,
                    options: {
                        type: GameConfig.Plane.Airstrike,
                        numPlanes: [
                            { count: 3, weight: 4 },
                            { count: 4, weight: 1 },
                            { count: 5, weight: 0.1 },
                        ],
                        airstrikeZoneRad: 55,
                        wait: 1.5,
                        delay: 1,
                    },
                },
                {
                    circleIdx: 3,
                    wait: 8,
                    options: {
                        type: GameConfig.Plane.Airstrike,
                        numPlanes: [
                            { count: 3, weight: 3 },
                            { count: 4, weight: 1 },
                            { count: 5, weight: 0.1 },
                        ],
                        airstrikeZoneRad: 50,
                        wait: 1.5,
                        delay: 1,
                    },
                },
                {
                    circleIdx: 4,
                    wait: 3,
                    options: { type: GameConfig.Plane.Airdrop },
                },
                {
                    circleIdx: 4,
                    wait: 21,
                    options: {
                        type: GameConfig.Plane.Airstrike,
                        numPlanes: [
                            { count: 3, weight: 2 },
                            { count: 4, weight: 1 },
                            { count: 5, weight: 0.1 },
                        ],
                        airstrikeZoneRad: 45,
                        wait: 1.5,
                        delay: 1,
                    },
                },
                {
                    circleIdx: 5,
                    wait: 6,
                    options: {
                        type: GameConfig.Plane.Airstrike,
                        numPlanes: [
                            { count: 3, weight: 1 },
                            { count: 4, weight: 1 },
                            { count: 5, weight: 0.1 },
                        ],
                        airstrikeZoneRad: 40,
                        wait: 1.5,
                        delay: 1,
                    },
                },
            ],
            crates: [{ name: "airdrop_crate_03", weight: 1 }],
        },
        roles: {
            timings: [
                {
                    role: "leader_winter",
                    circleIdx: 0,
                    wait: 50,
                },
                {
                    role: "lieutenant_winter",
                    circleIdx: 0,
                    wait: 54,
                },
                {
                    role: "marksman_winter",
                    circleIdx: 0,
                    wait: 58,
                },
                {
                    role: "recon_winter",
                    circleIdx: 0,
                    wait: 62,
                },
                {
                    role: "grenadier_winter",
                    circleIdx: 0,
                    wait: 66,
                },
                // {
                //     role: () =>
                //         util.weightedRandom([
                //             { type: "lieutenant", weight: 1 },
                //             { type: "marksman", weight: 1 },
                //             { type: "recon", weight: 1 },
                //             { type: "grenadier", weight: 1 },
                //         ]).type,
                //     circleIdx: 0,
                //     wait: 54,
                // },
                {
                    role: "medic_winter",
                    circleIdx: 0,
                    wait: 70,
                },
                {
                    role: "bugler_winter",
                    circleIdx: 0,
                    wait: 74,
                },
            ],
        },
        bagSizes: {},
        bleedDamage: 2,
        bleedDamageMult: 1.25,
    },
    lootTable: {
        tier_guns: [
            { name: "famas", count: 1, weight: 0.9 },
            { name: "hk416", count: 1, weight: 4 },
            { name: "mk12", count: 1, weight: 0.1 },
            { name: "pkp", count: 1, weight: 0.005 },
            { name: "m249", count: 1, weight: 0.006 },
            { name: "ak47", count: 1, weight: 2.7 },
            { name: "scar", count: 1, weight: 0.01 },
            { name: "dp28", count: 1, weight: 0.5 },
            { name: "bar", count: 1, weight: 0.05 },
            { name: "mosin", count: 1, weight: 0.05 },
            { name: "m39", count: 1, weight: 0.1 },
            { name: "mp5", count: 1, weight: 10 },
            { name: "mac10", count: 1, weight: 6 },
            { name: "ump9", count: 1, weight: 3 },
            { name: "m870", count: 1, weight: 9 },
            { name: "m1100", count: 1, weight: 6 },
            { name: "mp220", count: 1, weight: 2 },
            { name: "saiga", count: 1, weight: 0.1 },
            { name: "ot38", count: 1, weight: 8 },
            { name: "m9", count: 1, weight: 19 },
            { name: "m93r", count: 1, weight: 5 },
            { name: "glock", count: 1, weight: 7 },
            { name: "deagle", count: 1, weight: 0.05, preload: true },
            { name: "vector", count: 1, weight: 0.01 },
            { name: "sv98", count: 1, weight: 0.01 },
            { name: "spas12", count: 1, weight: 1 },
            { name: "qbb97", count: 1, weight: 0.01 },
            { name: "flare_gun", count: 1, weight: 0.1, preload: true },
            { name: "groza", count: 1, weight: 0.8 },
            { name: "scout_elite", count: 1, weight: 0.1 },
            { name: "vss", count: 1, weight: 0.1 }, // ?
        ],
        tier_toilet: [
            { name: "tier_guns", count: 1, weight: 0.1 },
            { name: "tier_scopes", count: 1, weight: 0.05 },
            { name: "tier_medical", count: 1, weight: 0.6 },
            {
                name: "tier_throwables",
                count: 1,
                weight: 0.05,
            },
            {
                name: "tier_faction_outfits",
                count: 1,
                weight: 0.025,
            },
        ],
        tier_container: [
            { name: "tier_guns", count: 1, weight: 0.29 },
            { name: "tier_ammo", count: 1, weight: 0.04 },
            { name: "tier_scopes", count: 1, weight: 0.15 },
            { name: "tier_armor", count: 1, weight: 0.1 },
            {
                name: "tier_medical",
                count: 1,
                weight: 0.17,
            },
            {
                name: "tier_throwables",
                count: 1,
                weight: 0.05,
            },
            { name: "tier_packs", count: 1, weight: 0.09 },
            {
                name: "tier_faction_outfits",
                count: 1,
                weight: 0.035,
            },
        ],
        tier_medical: [
            { name: "bandage", count: 5, weight: 16 },
            { name: "healthkit", count: 1, weight: 4 },
            { name: "soda", count: 1, weight: 15 },
            { name: "painkiller", count: 1, weight: 5 },
            { name: "frag", count: 1, weight: 2 },
        ],
        tier_airdrop_uncommon: [
            { name: "vector", count: 1, weight: 2 },
            { name: "vss", count: 1, weight: 2 },
            { name: "m39", count: 1, weight: 2 },
            { name: "mk12", count: 1, weight: 2 },
            { name: "saiga", count: 1, weight: 2 },
            { name: "scout_elite", count: 1, weight: 2 },
            { name: "bar", count: 1, weight: 2 },
            { name: "scar", count: 1, weight: 1.5 },
            { name: "mosin", count: 1, weight: 1 },
            { name: "qbb97", count: 1, weight: 1 },
            { name: "deagle", count: 1, weight: 1 },
            { name: "ots38_dual", count: 1, weight: 1 },
            { name: "garand", count: 1, weight: 0.5 },
            { name: "sv98", count: 1, weight: 0.5 },
            { name: "m9", count: 1, weight: 0.01 },
        ],
        tier_airdrop_rare: [
            { name: "scorpion", count: 1, weight: 3 },
            { name: "m4a1", count: 1, weight: 3 },
            { name: "grozas", count: 1, weight: 3 },
            { name: "awc", count: 1, weight: 2.25 },
            { name: "garand", count: 1, weight: 2 },
            { name: "ots38_dual", count: 1, weight: 2 },
            { name: "spas16", count: 1, weight: 2 },
            { name: "sv98", count: 1, weight: 2 },
            { name: "barrett", count: 1, weight: 0.5 },
            { name: "ash12", count: 1, weight: 0.5 },
            { name: "p30l_dual", count: 1, weight: 0.3 },
            { name: "deagle_dual", count: 1, weight: 0.3 },
            { name: "pkp", count: 1, weight: 0.1 },
            { name: "m249", count: 1, weight: 0.1 },
        ],
        tier_airdrop_melee: [
            { name: "", count: 1, weight: 2 },
            { name: "iceaxe", count: 1, weight: 3 },
            { name: "tier_katanas", count: 1, weight: 3 },
            { name: "naginata", count: 1, weight: 1 },
            { name: "fireaxe", count: 1, weight: 1 },
            { name: "pan", count: 1, weight: 0.5 },
        ],
        tier_airdrop_outfits: [
            { name: "", count: 1, weight: 20 },
            { name: "outfitSpetsnaz", count: 1, weight: 5 },
            { name: "outfitHeaven", count: 1, weight: 1 },
            {
                name: "outfitGhillie",
                count: 1,
                weight: 0.5,
            },
        ],
        tier_airdrop_scopes: [
            { name: "", count: 1, weight: 12 },
            { name: "4xscope", count: 1, weight: 5 },
            { name: "8xscope", count: 1, weight: 1 },
            { name: "15xscope", count: 1, weight: 0.01 },
        ],
        tier_ammo_crate: [
            { name: "9mm", count: 60, weight: 3 },
            { name: "762mm", count: 60, weight: 3 },
            { name: "556mm", count: 60, weight: 3 },
            { name: "12gauge", count: 10, weight: 3 },
            { name: "50AE", count: 21, weight: 1 },
            { name: "308sub", count: 5, weight: 1 },
        ],
        tier_mansion_floor: [{ name: "outfitSpetsnaz", count: 1, weight: 1 }],
        tier_conch: [{ name: "outfitKeyLime", count: 1, weight: 1 }],
        tier_chrys_01: [
            {
                name: "outfitCarbonFiber",
                count: 1,
                weight: 1,
            },
        ],
        tier_throwables: [
            { name: "frag", count: 2, weight: 1 },
            { name: "smoke", count: 1, weight: 1 },
            { name: "mirv", count: 2, weight: 0.05 },
            { name: "snowball", count: 5, weight: 1 },
        ],
        tier_sv98: [{ name: "sv98_winter", count: 1, weight: 1 }],
        tier_outfits: [
            { name: "outfitCobaltShell", count: 1, weight: 0.3 },
            { name: "outfitWoodland", count: 1, weight: 0.3 },
            { name: "outfitBlackIce", count: 1, weight: 0.2 },
            { name: "outfitSpetsnaz", count: 4, weight: 0.2 },
            { name: "outfitCamo", count: 1, weight: 0.15 },
            { name: "outfitSnow", count: 1, weight: 0.15 },
            { name: "outfitGhillie", count: 1, weight: 0.01 },
        ],
        tier_airdrop_throwables: [
            { name: "frag", count: 2, weight: 1 },
            { name: "mirv", count: 2, weight: 0.5 },
            { name: "snowball", count: 20, weight: 0.5 },
        ],
        tier_campsite_snow_cache: [
            { name: "tier_ammo", count: 1, weight: 2 },
            { name: "tier_medical", count: 2, weight: 2 },
            { name: "tier_throwables", count: 1, weight: 2 },
            { name: "ak47", count: 1, weight: 1 },
        ]
    },
    mapGen: {
        map: {
            baseWidth: 512,
            baseHeight: 512,
            scale: { small: 1.5, large: 1.5 },
            extension: 112,
            shoreInset: 48,
            grassInset: 18,
            rivers: {
                weights: [
                    { weight: 1, widths: [20] },
                    { weight: 1, widths: [20, 4] },
                    { weight: 1, widths: [20, 8, 4] },
                ],
                smoothness: 0.15,
            },
        },
        places: [
            { name: "Riverside", pos: v2.create(0.51, 0.5) },
            {
                name: "Pineapple",
                pos: v2.create(0.84, 0.18),
            },
            { name: "Tarkhany", pos: v2.create(0.21, 0.79) },
        ],
        bridgeTypes: {
            medium: "bridge_md_structure_01",
            large: "bridge_lg_structure_01",
            xlarge: "bridge_xlg_structure_01",
        },
        customSpawnRules: {
            locationSpawns: [],
            placeSpawns: [],
        },
        densitySpawns: [
            {
                stone_01x: 350,
                barrel_01: 76,
                silo_01: 8,
                crate_01x: 38,
                crate_02fx: 6, //winter soviet crate
                crate_22x: 6, //initiative crate
                crate_03: 8,
                crate_03x: 1,
                bush_01x: 78,
                tree_10: 400, //small winter tree
                tree_10x: 420, //big chungus winter tree
                hedgehog_01: 24,
                container_01x: 5,
                container_02: 5,
                container_03: 5,
                container_04: 5,
                shack_01x: 7,
                outhouse_01x: 5,
                loot_tier_1: 24,
                loot_tier_beach: 4,
            },
        ],
        fixedSpawns: [
            {
                warehouse_01f: 6,
                house_red_01x: 4,
                house_red_02x: 4,
                barn_01x: 4,
                bank_01x: 1,
                police_01x: 1,
                hut_01x: 4,
                hut_02x: 1,
                shack_03a: 2,
                shack_03x: 3,
                greenhouse_01: 1,
                cache_01f: 4,
                cache_02f: 1,
                cache_07f: 1,
                mansion_structure_01x: 1,
                bunker_structure_01: { odds: 1 },
                bunker_structure_03: 1,
                bunker_structure_04: 1,
                warehouse_complex_01: 1,
                chest_01: 1,
                chest_03fx: 1,
                mil_crate_02: { odds: 1 },
                mil_crate_03: 2,
                tree_02: 3,
                campsite_faction_snow_01: 2,
                campsite_faction_snow_02: 2,
            },
        ],
        randomSpawns: [],
        spawnReplacements: [
            {
                bush_01: "bush_01x", //"bush_01f",
                crate_02: "crate_01",
                stone_01: "stone_01x", //"stone_01f",
                stone_03: "stone_03x", //"stone_03f",
                tree_01: "tree_08f",
                crate_22: "crate_22x",
                crate_02f: "crate_02fx",
                statue_structure_01: "statue_structure_01_winter",
                statue_structure_02: "statue_structure_02_winter",
                river_town_01: "river_town_03",
            },
        ],
        importantSpawns: [
            "river_town_01",
            "river_town_03",
            "police_01",
            "bank_01",
            "mansion_structure_01",
            "warehouse_complex_01",
        ],
    },
    /* STRIP_FROM_PROD_CLIENT:END */
};

export const FactionSnow = util.mergeDeep({}, Main, mapDef) as MapDef;

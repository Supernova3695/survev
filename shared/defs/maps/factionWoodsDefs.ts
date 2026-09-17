import { GameConfig } from "../../gameConfig.ts";
import { util } from "../../utils/util.ts";
import { v2 } from "../../utils/v2.ts";
import type { MapDef } from "../mapDefs.ts";
import { Main, type PartialMapDef } from "./baseDefs.ts";

const mapDef: PartialMapDef = {
    mapId: GameConfig.MapId.Faction,
    desc: {
        name: "Woods 50v50",
        icon: "img/gui/star.svg",
        buttonCss: "btn-mode-faction",
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
            { name: "vault_change_02", channel: "sfx" },
            { name: "footstep_08", channel: "sfx" },
            { name: "footstep_09", channel: "sfx" },
            { name: "helmet03_forest_pickup_01", channel: "ui" },
        ],
        atlases: ["loadout", "shared", "faction", "woods"],
    },
    biome: {
        colors: {
            background: 0x20536e,
            water: 0x3282ab,
            waterRipple: 0xb3f0ff,
            beach: 0xefb35b,
            riverbank: 0x77360b,
            grass: 0x8e832a,
            underground: 0x1b0d03,
            playerSubmerge: 0x2b8ca4,
            playerGhillie: 0x91852c,
        },
        particles: { camera: "falling_leaf" },
    },
    gameMode: {
        maxPlayers: 100,
        factionMode: true,
        factions: 2,
        woodsMode: true
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
                    role: "leader",
                    circleIdx: 0,
                    wait: 50,
                },
                {
                    role: "lieutenant",
                    circleIdx: 0,
                    wait: 54,
                },
                {
                    role: "marksman",
                    circleIdx: 0,
                    wait: 58,
                },
                {
                    role: "recon",
                    circleIdx: 0,
                    wait: 62,
                },
                {
                    role: "grenadier",
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
                    role: "medic",
                    circleIdx: 0,
                    wait: 70,
                },
                {
                    role: "bugler",
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
        tier_ammo: [
            { name: "762mm", count: 60, weight: 3 },
            { name: "556mm", count: 60, weight: 6 },
            { name: "12gauge", count: 10, weight: 1 },
        ],
        tier_ammo_crate: [
            { name: "762mm", count: 60, weight: 3 },
            { name: "556mm", count: 60, weight: 6 },
            { name: "12gauge", count: 10, weight: 1 },
        ],
        tier_guns: [
            { name: "dp28", count: 1, weight: 2.75 },
            { name: "bar", count: 1, weight: 2.75 },
            { name: "imbel", count: 1, weight: 2.75 },
            { name: "m870", count: 1, weight: 2.5 },
            { name: "m1100", count: 1, weight: 3 },
            { name: "mp220", count: 1, weight: 2 },
            { name: "saiga", count: 1, weight: 0.15 },
            { name: "spas12", count: 1, weight: 2.5 },
            { name: "qbb97", count: 1, weight: 0.125 },
            { name: "pkp", count: 1, weight: 0.007 },
            { name: "m249", count: 1, weight: 0.011 },
            { name: "flare_gun", count: 1, weight: 0.1, preload: true },
        ],
        tier_throwables: [
            { name: "frag", count: 3, weight: 2 },
            { name: "mirv", count: 2, weight: 1.0 },
            { name: "smoke", count: 1, weight: 2 },
            { name: "strobe", count: 1, weight: 0.5 },
        ],
        tier_armor: [
            { name: "helmet01", count: 1, weight: 2.5 },
            { name: "helmet02", count: 1, weight: 2.5 },
            { name: "helmet03", count: 1, weight: 1 },
            { name: "chest01", count: 1, weight: 2.5 },
            { name: "chest02", count: 1, weight: 2.5 },
            { name: "chest03", count: 1, weight: 1 },
        ],
        tier_packs: [
            { name: "backpack01", count: 1, weight: 2 },
            { name: "backpack02", count: 1, weight: 3 },
            { name: "backpack03", count: 1, weight: 1 },
        ],
        tier_chest: [
            { name: "dp28", count: 1, weight: 0.5 },
            { name: "saiga", count: 1, weight: 0.1 },
            { name: "spas12", count: 1, weight: 1 },
            { name: "qbb97", count: 1, weight: 0.1 },
            { name: "bar", count: 1, weight: 1 },
            { name: "helmet03", count: 1, weight: 1 },
            { name: "chest03", count: 1, weight: 1 },
            { name: "4xscope", count: 1, weight: 1 },
            { name: "8xscope", count: 1, weight: 0.5 },
            { name: "pkp", count: 1, weight: 0.05 },
            { name: "m249", count: 1, weight: 0.05 },
        ],
        tier_airdrop_throwables: [
            { name: "frag", count: 2, weight: 1 },
            { name: "mirv", count: 2, weight: 0.5 },
            { name: "strobe", count: 1, weight: 0.5 },
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
            { name: "m4a1", count: 1, weight: 3 },
            { name: "grozas", count: 1, weight: 3 },
            { name: "awc", count: 1, weight: 2.25 },
            { name: "garand", count: 1, weight: 2 },
            { name: "ots38_dual", count: 1, weight: 2 },
            { name: "spas16", count: 1, weight: 2 },
            { name: "sv98", count: 1, weight: 2 },
            { name: "barrett", count: 1, weight: 0.5 },
            { name: "ash12", count: 1, weight: 0.5 },
            { name: "deagle_dual", count: 1, weight: 0.3 },
            { name: "pkp", count: 1, weight: 0.1 },
            { name: "m249", count: 1, weight: 0.1 },
        ],
        tier_airdrop_melee: [
            { name: "", count: 1, weight: 2 },
            { name: "tier_katanas", count: 1, weight: 3 },
            { name: "naginata", count: 1, weight: 1 },
            { name: "fireaxe", count: 1, weight: 1 },
            { name: "sledgehammer", count: 1, weight: 1 },
            { name: "pan", count: 1, weight: 0.5 },
        ],
        tier_airdrop_outfits: [
            { name: "", count: 1, weight: 25 },
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
        tier_mansion_floor: [{ name: "outfitCamo", count: 1, weight: 1 }],
        tier_conch: [{ name: "outfitKeyLime", count: 1, weight: 1 }],
        tier_chrys_01: [
            {
                name: "outfitCarbonFiber",
                count: 1,
                weight: 1,
            },
        ],
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
                lakes: [
                    {
                        odds: 1,
                        innerRad: 20,
                        outerRad: 52,
                        centerObj: "teapavilion_01w",
                        riverMaskRad: 0,
                        spawnBound: {
                            pos: v2.create(0.40, 0.50),
                            rad: 56,
                        },
                    },
                ],
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
            locationSpawns: [
                {
                    type: "logging_complex_01",
                    pos: v2.create(0.5, 0.5),
                    rad: 200,
                    retryOnFailure: true,
                },
            ],
            placeSpawns: [],
        },
        densitySpawns: [
            {
                stone_01: 350,
                barrel_01: 76,
                silo_01: 8,
                crate_01: 38,
                crate_02f: 5,
                crate_22: 5,
                crate_03: 8,
                crate_19: 12,
                bush_01: 78,
                hedgehog_01: 24,
                container_01: 5,
                container_02: 5,
                container_03: 5,
                container_04: 5,
                shack_01: 7,
                outhouse_01: 5,
                loot_tier_1: 24,
                loot_tier_beach: 4,
            },
        ],
        fixedSpawns: [
            {
                stone_04: 6, //hardstone block
                warehouse_01f: 6,
                house_red_01: 4,
                house_red_02: 4,
                barn_01: 4,
                bank_01: 1,
                police_01: 1,
                hut_01: 4,
                hut_02: 1,
                shack_03a: 2,
                shack_03b: 3,
                greenhouse_01: 1,
                cache_01f: 1,
                cache_02f: 1,
                cache_07f: 1,
                mansion_structure_01: 1,
                bunker_structure_01: { odds: 1 },
                bunker_structure_03: 1,
                bunker_structure_04: 1,
                logging_complex_02: 1,
                logging_complex_03: 3,
                chest_01: 1,
                chest_03: 1,
                mil_crate_02: { odds: 1 },
                tree_02: { small: 6, large: 8 },
                tree_07: 1100,
                tree_08: 1100,
                tree_08b: 150,
                tree_09: 84,
                workshop_complex_01: 1,
            },
        ],
        randomSpawns: [],
        spawnReplacements: [
            {
                tree_01: "tree_07",
                crate_02: "crate_19",
                crate_08: "crate_19",
                crate_09: "crate_19",
                // make eye bunkers have the proper woods recorders
                recorder_01: "recorder_08",
                recorder_02: "recorder_09",
            },
        ],
        importantSpawns: [
            "river_town_01",
            "police_01",
            "bank_01",
            "mansion_structure_01",
        ],
    },
    /* STRIP_FROM_PROD_CLIENT:END */
};

export const FactionWoods = util.mergeDeep({}, Main, mapDef) as MapDef;

import type { AtlasDef } from "../atlasDefs.ts";
import { BuildingSprites } from "./buildings.ts";

export const FactionSnowAtlas: AtlasDef = {
    images: [
        "map/map-airdrop-03.svg",
        "map/map-airdrop-04.svg",
        "map/map-building-bridge-xlg-floor.svg",

        ...BuildingSprites.greenhouse,
        ...BuildingSprites.bunker_chrys,

        "map/map-chest-03f.svg",

        ...BuildingSprites.warehouse_complex,
        // 50v50 main bridge only
        "map/map-complex-warehouse-floor-04.svg",

        "map/map-crate-02f.svg", //soviet faction crate

        "map/map-crate-12.svg", //military meteor crate
        "map/map-crate-13.svg", //gold military meteor crate
        "map/map-crate-22.svg", //initative crate

        "map/map-crate-02fx.svg",  //snowy soviet faction crate
        "map/map-crate-22x.svg", //snowy initiative crate
        "map/map-statue-01-snowy.svg", //rt statue base
        "map/map-statue-top-01-snowy.svg", //rt statue top
        "map/map-statue-top-02-snowy.svg", //^^^
        
        "map/map-bush-01f.svg",
        "map/map-tree-08f.svg",
        "map/map-tree-08.svg",
        "map/map-tree-08sp.svg",

        "map/map-stone-03f.svg",
        "map/map-stone-res-02f.svg",
    ],
};

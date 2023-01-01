import Item from "../item/item.js";
import { itemsJson } from "../item/itemsjson.js";
import linkCSS from "../../utils/linkCSS.js";

export default function Grid()
{
    const obj = JSON.parse(itemsJson);
    const grid = document.createElement("div");
    grid.setAttribute("id","grid");
    linkCSS(grid,"components/grid/style.grid.css");
    for (let index = 0; index < obj.items.length; index++) {
        grid.appendChild(Item(index));
    }
    return grid;
}
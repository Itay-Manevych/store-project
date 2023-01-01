import { itemsJson } from "./itemsjson.js";
import CreateItemNode from "/components/item/createItemNode.js";
import linkCSS from "../../utils/linkCSS.js";

export default function Item(index)
{
    const itemsObj = JSON.parse(itemsJson);
    const item = document.createElement("div");
    item.setAttribute("id","item");
    linkCSS(item,"components/item/style.item.css");
    CreateItemNode(item, itemsObj, index);
    return item;
}



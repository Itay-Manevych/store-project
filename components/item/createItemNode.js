import CreateInnerValue from "/components/item/createInnerValue.js";

export default function CreateItemNode(itemObj, itemsJson, index)
{
    itemObj.appendChild(CreateInnerValue("img", itemsJson.items[index].img, undefined));
    itemObj.appendChild(CreateInnerValue("p",itemsJson.items[index].title, "Title: "));
    itemObj.appendChild(CreateInnerValue("p",itemsJson.items[index].description, "Description: "));
    itemObj.appendChild(CreateInnerValue("p",itemsJson.items[index].category, "Category: "));
    itemObj.appendChild(CreateInnerValue("p",itemsJson.items[index].price, "Price: "));
}
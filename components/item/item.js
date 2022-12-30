import { itemsJson } from "/components/item/itemjson.js";

export default function Item()
{
    const obj = JSON.parse(itemsJson);
    const item = document.createElement("div");
    item.setAttribute("id","item");

    // Create new link Element
    const link = document.createElement('link');

    // set the attributes for link element
    link.rel = 'stylesheet';

    link.type = 'text/css';

    link.href = 'components/item/style.item.css';

    // Append link element to HTML head
    item.appendChild(link);

    const CreateNode = (elementType, value, extraText)=>{
        const node = document.createElement(`${elementType}`);
        node.setAttribute("id",`${elementType}`);
        if(elementType === "img")
        {
            node.src = value;
        }
        
        else
        {
            node.innerHTML = extraText + value;
        }
            
        return node;
    }

   
    item.appendChild(CreateNode("img",obj.items[0].img));
    item.appendChild(CreateNode("p",obj.items[0].title, "Title: "));
    item.appendChild(CreateNode("p",obj.items[0].description, "Description: "));
    item.appendChild(CreateNode("p",obj.items[0].category, "Category: "));
    item.appendChild(CreateNode("p",obj.items[0].price, "Price: "));
    // img.setAttribute("id", "image")
    // img.src = obj.items[0].img;
    // item.appendChild(img);
    return item;
}



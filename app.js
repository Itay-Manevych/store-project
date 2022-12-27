import Item from "./components/item/item.js";
document.body.onload = Root();

function Root()
{
    const root = document.getElementById("root");
    root.append(Item());
}


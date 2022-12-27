export default function Item()
{
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
    return item;
}



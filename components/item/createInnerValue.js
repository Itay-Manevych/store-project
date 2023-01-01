export default function CreateInnerValue(elementType, value, extraText)
{
    const node = document.createElement(elementType);
    node.setAttribute("id",elementType);

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
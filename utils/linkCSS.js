export default function linkCSS(node, location){
    // Create new link Element
    const link = document.createElement('link');

    // set the attributes for link element
    link.rel = 'stylesheet';

    link.type = 'text/css';

    link.href = location;
    // append the link to the child
    node.appendChild(link);
}
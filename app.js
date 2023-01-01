import Grid from "/components/grid/grid.js"
document.body.onload = Root();

function Root()
{
    const root = document.getElementById("root");
    root.append(Grid());
}


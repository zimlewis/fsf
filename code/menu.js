function autoclose()
{
    var click = document.getElementById('dropdown');
    click.style.display = "none";
}

function menu()
{
    var click = document.getElementById('dropdown');
    if (click.style.display === "none")
    {
        click.style.display = "block";
        setTimeout(autoclose, 8000);
    }
    else
    {
        click.style.display = "none";
    }
}
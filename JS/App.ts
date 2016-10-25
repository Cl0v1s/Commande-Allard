class App
{
    public static Main()
    {
        View.RootID = "Content";
        new ArticlesView().Show();
        console.log("Started");
    }
}

window.onload =  App.Main;
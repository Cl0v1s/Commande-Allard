class App
{

    public static EndPoint : string = "http://172.17.0.2/rest/api/";
    public static Token : string = "5e33c6d1ec779b9210e9cdad";

    public static Main()
    {
        View.RootID = "Content";
        new ArticlesView().Show();
        console.log("Started");
    }
}

window.onload =  App.Main;
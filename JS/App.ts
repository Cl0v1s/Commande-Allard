class App
{

    public static EndPoint : string = "http://172.17.0.2/rest/api";
    public static Token : string = "5e33c6d1ec779b9210e9cdad";


    public static Main()
    {
        View.RootID = "Content";

        let showArticles : Function = function(){
            Model.RetrieveArticles(() => {
                new ArticlesView().Show();
            });
        };
        
        let showReplays : Function = function(){
            Model.RetrieveReplays(() => {
                new ReplaysView().Show();
            });
        };

        let showArticle : Function = function(params)
        {
            Model.RetrieveArticles(() => {
                new ArticleFocusView(Model.GetArticle(params[0])).Show();
            });
        };


        Linker.GetInstance().AddLink("articles", showArticles);
        Linker.GetInstance().AddLink("replays", showReplays);
        Linker.GetInstance().AddLink("article", showArticle);

        Linker.GetInstance().Analyze();
    }

    /**
     * Envoie des requetes Ajax GET
     */
    public static Get(url : string, callback : Function) : void
    {
        var xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            callback(xhttp.responseText.trim());
        };
        xhttp.open("GET", url + "?token="+App.Token, true);
        xhttp.send("token="+App.Token);
        console.log("Processing "+url);

}
}

window.onload =  App.Main;
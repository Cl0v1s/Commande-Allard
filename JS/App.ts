class App
{

    public static EndPoint : string = "http://172.17.0.2/rest/api";
    public static Token : string = "5e33c6d1ec779b9210e9cdad";


    public static Main()
    {
        View.RootID = "Content";

        /**
         * Affiche l'ensemble des articles présents dans le site
         */
        let showArticles : Function = function(){
            Model.RetrieveArticles(() => {
                new ArticlesView().Show();
            });
        };

        /**
         * Affiche l'ensemble des replays disponibles
         */
        let showReplays : Function = function(){
            Model.RetrieveReplays(() => {
                new ReplaysView().Show();
            });
        };

        /**
         * Affiche un article en particulier (premier élément du tableau params)
         */
        let showArticle : Function = function(params)
        {
            Model.RetrieveArticles(() => {
                new ArticleFocusView(Model.GetArticle(params[0])).Show();
            });
        };

        let showError500 : Function = function()
        {
            new Error500View().Show();
        }

        let showError404 : Function = function()
        {
            new Error404View().Show();
        }

        let showHome : Function = function()
        {
            //TODO: à implémenter
            console.log("Home");
        }


        Linker.GetInstance().AddLink("articles", showArticles);
        Linker.GetInstance().AddLink("replays", showReplays);
        Linker.GetInstance().AddLink("article", showArticle);
        Linker.GetInstance().AddLink(Link_Special.Error_404, showError404);
        Linker.GetInstance().AddLink(Link_Special.Error_500, showError500);
        Linker.GetInstance().AddLink(Link_Special.Default, showHome);

        Linker.GetInstance().Analyze();
    }

    /**
     * Envoie des requetes Ajax GET
     */
    public static Get(url : string, callback : Function, error? : Function) : void
    {
        var xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            callback(xhttp.responseText.trim());
        };
        xhttp.onerror = function()
        {
            if(error != null)
                error();
        }
        xhttp.open("GET", url + "?token="+App.Token, true);
        xhttp.send("token="+App.Token);
        console.log("Processing "+url);

}
}

window.onload =  App.Main;
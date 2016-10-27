class Model
{
    public static Articles : Array<Article> = new Array<Article>();
    public static Replays : Array<Replay> = new Array<Replay>();


    private static RetrieveReplays(callback : Function) : void
    {
        App.Get(App.EndPoint+"/collections/get/Replays", (data) => {
            data = JSON.parse(data);
            data.forEach((e) => {
                Model.Replays.push(new Replay(e));
            });
            callback();
        });
    }

    private static RetrieveArticles(callback : Function) : void
    {
        App.Get(App.EndPoint+"/collections/get/Articles", (data) => {
            data = JSON.parse(data);
            data.forEach((e) => {
                Model.Articles.push(new Article(e));
            });
            callback();
        });
    }

    public static Retrieve(callback : Function) : void
    {
        Model.RetrieveArticles(() => {
            Model.RetrieveReplays(() => {
                callback();
            });
        });
    }

    public static GetArticle(id : string) : Article
    {
        for(let i : number  = 0; i != Model.Articles.length; i++)
        {
            let e : Article = Model.Articles[i];
            if(e.Id() == id)
            {
                return e;
            }
        }
        return null;
    }
}
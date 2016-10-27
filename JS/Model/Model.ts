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
}
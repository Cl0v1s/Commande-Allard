class ArticlesView extends View
{
    public Show() : void
    {
        let base : Component = new Component({
            body : "", 
            classes : "Articles"
        });
        base.Mount(null, null);
        Model.GetArticles().forEach((data) => {
            new ArticleComponent(data).Mount(base);
        });
    }
}
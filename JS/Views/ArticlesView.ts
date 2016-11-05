class ArticlesView extends View
{
    public Show() : void
    {
        let base : Component = new Component({
            body : "", 
            classes : "Articles"
        });
        base.Mount(null, null);
        new TitleComponent(Locale.GetInstance().Word("Articles")).Mount(base);
        Model.GetArticles().forEach((data) => {
            new ArticleComponent(data).Mount(base);
        });
    }
}
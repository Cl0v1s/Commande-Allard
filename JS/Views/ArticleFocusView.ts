class ArticleFocusView extends View
{

    private article : Article;

    constructor(article : Article)
    {
        super();
        if(article == null)
        {
            console.log("404"); //TODO: implémenter erreur 404
            return;
        }
        this.article = article;

        console.log("Focus article "+this.article.Id());
    }

    public Show() : void
    {
        super.Show();
        let base : Component = new Component({
            body : "", 
            classes : "Articles"
        });
        base.Mount(null, null);

        let articleFocus : ArticleFocusComponent = new ArticleFocusComponent(this.article);
        articleFocus.Mount(base);
        new DisqusComponent(this.article).Mount(articleFocus);
    }
}
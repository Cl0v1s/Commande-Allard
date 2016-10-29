class ArticleFocusView extends View
{

    private article : Article;

    constructor(article : Article)
    {
        super();
        if(article == null)
        {
            window.location.replace("Index.html?"+Link_Special.Error_404);
            return;
        }
        this.article = article;
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
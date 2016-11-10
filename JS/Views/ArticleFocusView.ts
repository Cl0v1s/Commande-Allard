/**
 * Affiche la view permettant de présenter un unique article 
 */
class ArticleFocusView extends View
{

    private article : Article;

    constructor(article : Article)
    {
        super();
        // Si l'article est nul, on redirige vers l'erreur 404
        if(article == null)
        {
            window.location.replace("Index.html?"+Link_Special.Error_404);
            return;
        }
        this.article = article;
    }

    /**
     * Actions a réaliser lors de l'affichage de la vue 
     */
    public Show() : void
    {
        super.Show();
        let base : Component = new Component({
            body : "", 
            classes : "Articles"
        });
        base.Mount(null, null);

        // Ajout du composant de titre
        this.Add(new TitleComponent(this.article.Title())).Mount(base);
        // Ajout du composant ArticleFocus contenant un unique article 
        let articleFocus : ArticleFocusComponent = this.Add(new ArticleFocusComponent(this.article));
        articleFocus.Mount(base);
        // Ajout du composant disqus comportant la zone de commmentaires
        this.Add(new DisqusComponent(this.article).Mount(articleFocus));
    }
}
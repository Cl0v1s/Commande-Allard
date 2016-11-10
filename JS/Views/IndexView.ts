/**
 * Présente la page d'index
 */
class IndexView extends View
{
    /**
     * Actions àréaliser lors de l'affichae de la page 
     */
    public Show() : void
    {
        super.Show();

        let base : Component = new Component({
            body : "", 
            classes : "Index",
        });
        base.Mount(null, null);

        // Affichage du titre de la page 
        this.Add(new TitleComponent(Locale.GetInstance().Word("Index"))).Mount(base);

        // Création d'une zone présentant les informations au sein de la page 
        let indexLayout : Component = new Component({
            body: "", 
            classes : "IndexLayout"
        });
        indexLayout.Mount(base, null);

        // Ajout d'un composant affichant les derniers articles parus 
        let lastArticles : LastsArticlesComponent = new LastsArticlesComponent(Model.GetArticles(), 5);
        lastArticles.Mount(indexLayout);
        // Ajout d'un composant affichant les derniers replays parus 
        let lastReplays : LastsReplaysComponent = new LastsReplaysComponent(Model.GetReplays(), 5);
        lastReplays.Mount(indexLayout);


    }
}
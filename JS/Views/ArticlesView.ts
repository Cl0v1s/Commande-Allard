/**
 * Présente la liste des articles par ordre descendant de dates
 */
class ArticlesView extends View
{

    /**
     * Action a réaliser lors de l'affichage de la vue
     */
    public Show() : void
    {
        let base : Component = new Component({
            body : "", 
            classes : "Articles"
        });
        base.Mount(null, null);

        // Ajout du cmposant présentant le titre
        this.Add(new TitleComponent(Locale.GetInstance().Word("Articles"))).Mount(base);
        // pour chacun des articles présents dans le modèle, on ajoute un nouveau composant article chargé de le présenter 
        Model.GetArticles().forEach((data) => {
            this.Add(new ArticleComponent(data)).Mount(base);
        });
    }
}
/**
 * Affiche la page d'errur 404 correspondant à ressource non trouvée
 */
class Error404View extends View
{

    /**
     * Action a réaliser lors de l'affichage de la vue 
     */
    public Show() : void
    {
        super.Show();
        let base : Component = new Component({
            body :  ""
        });
        this.Add(base);
        base.Mount(null, null);

        // AJout du composant présentant le titre
        this.Add(new TitleComponent(Locale.GetInstance().Word("Error")+" 404")).Mount(base);

        // AJout du composant présentant le message d'erreur 
        this.Add(new MessageComponent(Locale.GetInstance().Word("Details"), Locale.GetInstance().Word("Error404"))).Mount(base);
    }
}
/**
 * Affiche la page d'errur 500 correspondant à erreur serveur 
 */
class Error500View extends View
{

    /**
     * Actions à réaliser lors de l'affichage de la vue 
     */
    public Show() : void
    {
        super.Show();
        let base : Component = new Component({
            body :  ""
        });
        base.Mount(null, null);

        // Affichage du titre de la page 
        this.Add(new TitleComponent(Locale.GetInstance().Word("Error")+" 500")).Mount(base);
        // Affichage du message présentant les détails de l'erreur 
        this.Add(new MessageComponent(Locale.GetInstance().Word("Details"), Locale.GetInstance().Word("Error500"))).Mount(base);
    }
}
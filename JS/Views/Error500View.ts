/**
 * Affiche la page d'errur 500 correspondant à erreur serveur 
 */
class Error500View extends View
{
    public Show() : void
    {
        let base : Component = new Component({
            body :  ""
        });
        base.Mount(null, null);
        new TitleComponent("Erreur 500").Mount(base);
        new MessageComponent("Détails", "Une erreur serveur a eu lieu, veuillez réessayer ultérieurement.").Mount(base);
    }
}
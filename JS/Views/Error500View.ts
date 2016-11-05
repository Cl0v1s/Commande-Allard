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
        new TitleComponent(Locale.GetInstance().Word("Error")+" 500").Mount(base);
        new MessageComponent(Locale.GetInstance().Word("Details"), Locale.GetInstance().Word("Error500")).Mount(base);
    }
}
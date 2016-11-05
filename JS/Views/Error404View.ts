/**
 * Affiche la page d'errur 404 correspondant à ressource non trouvée
 */
class Error404View extends View
{
    public Show() : void
    {
        let base : Component = new Component({
            body :  ""
        });
        base.Mount(null, null);
        new TitleComponent(Locale.GetInstance().Word("Error")+" 404").Mount(base);
        new MessageComponent(Locale.GetInstance().Word("Details"), Locale.GetInstance().Word("Error404")).Mount(base);
    }
}
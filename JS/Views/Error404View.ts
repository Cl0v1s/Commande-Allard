class Error404View extends View
{
    public Show() : void
    {
        let base : Component = new Component({
            body :  ""
        });
        base.Mount(null, null);
        new MessageComponent("Erreur 404", "Impossible de trouver le contenu demandé.").Mount(base);
    }
}
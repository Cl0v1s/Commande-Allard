class Error404View extends View
{
    public Show() : void
    {
        let base : Component = new Component({
            body :  ""
        });
        base.Mount(null, null);
        new TitleComponent("Erreur 404").Mount(base);
        new MessageComponent("Détails", "Impossible de trouver le contenu demandé.").Mount(base);
    }
}
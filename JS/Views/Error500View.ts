class Error500View extends View
{
    public Show() : void
    {
        let base : Component = new Component({
            body :  ""
        });
        base.Mount(null, null);
        new MessageComponent("Erreur 500", "Une erreur serveur a eu lieu, veuillez réessayer ultérieurement.").Mount(base);
    }
}
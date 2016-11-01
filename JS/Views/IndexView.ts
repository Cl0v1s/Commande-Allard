class IndexView extends View
{
    public Show() : void
    {
        super.Show();

        let base : Component = new Component({
            body : "", 
            classes : "Index",
        });
        base.Mount(null, null);

        new TitleComponent("Accueil").Mount(base);


        let indexLayout : Component = new Component({
            body: "", 
            classes : "IndexLayout"
        });
        indexLayout.Mount(base, null);

        let lastArticles : LastsArticlesComponent = new LastsArticlesComponent(Model.GetArticles(), 5);
        lastArticles.Mount(indexLayout);
        let lastReplays : LastsReplaysComponent = new LastsReplaysComponent(Model.GetReplays(), 5);
        lastReplays.Mount(indexLayout);


    }
}
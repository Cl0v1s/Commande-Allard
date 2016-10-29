class ReplaysView extends View
{
    public Show() : void
    {
        super.Show();
        let base : Component = new Component({
            body : '', 
            classes : 'Replays'
        });
        base.Mount(null, null);
        
        new TitleComponent("Replays").Mount(base);
        Model.GetReplays().forEach((e) => {
            new ReplayComponent(e).Mount(base);
        });
    }
}
class TitleComponent extends Component
{
    private content : string; 

    constructor(title : string)
    {
        super({
            body : "{{message}}", 
            classes : "Title"
        });
        this.content = title;
    }

    public Mount(parent : Component) : void
    {
        let opts = {
            message : this.content
        };
        super.Mount(parent, opts);
    }

}
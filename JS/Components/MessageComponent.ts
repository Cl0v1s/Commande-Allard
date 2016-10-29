class MessageComponent extends Component
{
    private title : string;
    private message : string;

    constructor(title : string, message:string)
    {
        super({
            body: "<p>{{message}}</p>",
            classes:  "item"
        });
        this.title = title;
        this.message = message;
    }

    public Mount(parent: Component) : void
    {
        let opts : any = {
            message : this.message
        };
        super.Mount(parent, opts);
        this.GetDOM().setAttribute("data-title", this.title);
    }
}
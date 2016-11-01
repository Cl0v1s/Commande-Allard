class Replay
{

    private id : string;
    private title : string;
    private description : string;
    private picture : string;
    private url : string;
    private created : number;

    constructor(data : any)
    {
        this.id = data._id;
        this.title = data.Title;
        this.description = data.Description;
        this.picture = data.Picture;
        this.url = data.Url;
        this.created = data.created;
    }

    public Id() : string
    {
        return this.id;
    }

    public Title() : string
    {
        return this.title;
    }

    public Description() : string
    {
        return this.description;
    }

    public Picture() : string
    {
        return this.picture;
    }

    public Url() : string
    {
        return this.url;
    }

    public Created() : number
    {
        return this.created;
    }
}
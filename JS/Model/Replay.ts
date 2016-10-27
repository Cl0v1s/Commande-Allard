class Replay
{
    private title : string;
    private description : string;
    private picture : string;
    private url : string;

    constructor(data : any)
    {
        this.title = data.Title;
        this.description = data.Description;
        this.picture = data.Picture;
        this.url = data.Url;
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
}
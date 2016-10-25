class Article
{
    private id : string;
    private title : string;
    private picture : string;
    private description : string;
    private content : string;
    private created : number;
    private modified : number;

    constructor(data : any)
    {
        this.id = data._id;
        this.title = data.Title;
        this.picture = data.Picture;
        this.description = data.Description;
        this.content = data.Content;
        this.created = data.created;
        this.modified = data.modified;
    }

    public Id() : string
    {
        return  this.id;
    }

    public Title() : string
    {
        return this.title;
    }

    public Picture() : string
    {
        return this.picture;
    }

    public Description() : string
    {
        return this.description;
    }

    public Content() : string
    {
        return this.content;
    }

    public Modified() : number
    {
        return this.modified;
    }

    public Created() : number
    {
        return this.created;
    }

}
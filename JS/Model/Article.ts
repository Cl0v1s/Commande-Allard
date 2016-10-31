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

    // Id dans la base de données 
    public Id() : string
    {
        return  this.id;
    }

    // Titre de l'article 
    public Title() : string
    {
        return this.title;
    }

    // Photo de preview de l'article
    public Picture() : string
    {
        return this.picture;
    }

    // Description de l'article
    public Description() : string
    {
        return this.description;
    }

    // Retourne le contenu de l'article
    public Content() : string
    {
        return this.content;
    }

    // Retourne la date de modification de l'article (timestamp visiblement)
    public Modified() : number
    {
        return this.modified;
    }

    // Retourne la date de création de l'article (timestamp visiblement)
    public Created() : number
    {
        return this.created;
    }

}
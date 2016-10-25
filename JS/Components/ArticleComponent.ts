class ArticleComponent extends Component
{
    private title : string;
    private picture : string;
    private description : string;

    constructor(title : string, picture : string, description : string)
    {
        super({
            body : "\<img class='thumbnail' src='{{picture}}'>\
                <div class='content'>\
                    <p>{{description}}</p>\
                </div>\
                <button class='more'>\
                    Lire la suite...\
                </button>\
                ", 
            classes : "item Article"
        })
        this.title = title;
        this.picture = picture;
        this.description = description;
    }

    public Mount(parent : Component) : void
    {
        let opts : any = {
            picture : this.picture, 
            description : this.description
        }
        super.Mount(parent, opts);
        this.GetDOM().setAttribute("data-title", this.title);
    }



}
class ArticleComponent extends Component
{
    private title : string;
    private picture : string;
    private description : string;
    private article : Article;

    constructor(data : Article)
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
        this.article = data;

        this.title = data.Title();
        this.picture = data.Picture();
        this.description = data.Description();
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
class ArticleFocusComponent extends Component
{
    private article : Article;

    constructor(article : Article)
    {
        super({
            body : "\<img class='thumbnail' src='{{picture}}'>\
                <div class='content'>\
                    <p>{{content}}</p>\
                </div>\
                ", 
            classes : "item Article"
        })
        this.article = article;
    }

    public Mount(parent : Component) : void
    {
        let opts : any = {
            picture : this.article.Picture(), 
            content : this.article.Content()
        }
        super.Mount(parent, opts);
        this.GetDOM().setAttribute("data-title", this.article.Title());
    }



}
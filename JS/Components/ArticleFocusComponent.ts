class ArticleFocusComponent extends Component
{
    private article : Article;

    constructor(article : Article)
    {
        super({
            body : "\<div class='thumbnail' style='background-image: url({{picture}});'></div>\
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
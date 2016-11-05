class ArticleComponent extends Component
{
    private article : Article;

    constructor(article : Article)
    {
        super({
            body : "\<div class='thumbnail' style='background-image: url({{picture}});'></div>\
                <div class='content'>\
                    <p>{{description}}</p>\
                </div>\
                <a href='Index.html?article-{{id}}'>\
                    <button class='more'>\
                        {{readMore}}\
                    </button>\
                </a>\
                ", 
            classes : "item Article"
        })
        this.article = article;

    }

    public Mount(parent : Component) : void
    {
        let opts : any = {
            'id' : this.article.Id(),
            'picture' : this.article.Picture(), 
            'description' : this.article.Description(), 
            'readMore' : Locale.GetInstance().Word("ReadMore"),
        }
        super.Mount(parent, opts);
        this.GetDOM().setAttribute("data-title", this.article.Title());

    }



}
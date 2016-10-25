class DisqusComponent extends Component 
{

    private article : Article;

    constructor(article : Article)
    {
        super({
            body : "<div id='disqus_thread'></div>\
                    <script>"
        });
        this.article = article;
    }

    public Mount(parent :  Component)
    {
        super.Mount(parent, null);

        /**
        *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
        *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*
        **/
        /*var disqus_config = function () {
        this.page.url = '/article';  // Replace PAGE_URL with your page's canonical URL variable\
        this.page.identifier = this.article.Id(); // Replace PAGE_IDENTIFIER with your page's unique identifier variable\
        };*/
        
        var d = document, s = d.createElement('script');
        s.src = 'http://allard.disqus.com/embed.js';
        s.setAttribute('data-timestamp', new Date().toString());
        (d.head || d.body).appendChild(s);
    }
}
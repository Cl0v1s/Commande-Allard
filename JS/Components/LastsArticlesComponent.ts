/** 
 * Composant présentant les derniers articles parus
 */
class LastsArticlesComponent extends Component
{
    private articles : Array<Article>;

    constructor(articles : Array<Article>, articleNumber : number)
    {
        super({
            body : "<table>\
                        <tr>\
                            <th>{{title}}</th><th>{{date}}</th>\
                        </tr>\
                        {{content}}\
                    </table>", 
            classes : "Frame item"
        });
        // selection des articleNumber derniers aticles
        this.articles = new Array<Article>();
        for(let i : number = 0; i!= articleNumber; i++)
        {
            if(articles[i] != null)
                this.articles.push(articles[i]);
        }

    }

    public Mount(parent : Component) : void
    {
        let content : string = "";
        this.articles.forEach((e) => {
            let date : Date = new Date(e.Created()*1000);
            content = content + "<tr><td><a href='Index.html?article-"+e.Id()+"'>"+e.Title()+"</a></td><td>"+date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()+"</td></tr>";
        });
        let opts = {
            'content' : content, 
            'title'  : Locale.GetInstance().Word("Title"), 
            'date' : Locale.GetInstance().Word("Date"),
        };
        super.Mount(parent, opts);
        this.GetDOM().setAttribute("data-title", Locale.GetInstance().Word("LastArticles"));
    }
}
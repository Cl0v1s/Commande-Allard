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
                        <th>\
                            <td>Titre</td><td>Date</td>\
                        </th>\
                        {{content}}\
                    </table>", 
            classes : "LastsArticles"
        });
        // selection des articleNumber derniers aticles
        this.articles = new Array<Article>();
        for(let i : number; i!= articleNumber; i++)
        {
            this.articles.push(articles[i]);
        }
    }

    public Mount(parent : Component) : void
    {
        let content : string = "";
        this.articles.forEach((e) => {
            content = content + "<tr><td>"+e.Title()+"</td><td>"+new Date(e.Created()).toString()+"</td></tr>";
        });
        let opts = {
            'content' : content
        };
        super.Mount(parent, opts);
    }
}
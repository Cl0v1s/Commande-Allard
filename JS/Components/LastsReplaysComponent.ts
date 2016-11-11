/** 
 * Composant présentant les derniers articles parus
 */
class LastsReplaysComponent extends Component
{
    private replays : Array<Replay>;

    constructor(replays : Array<Replay>, replayNumber : number)
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
        this.replays = new Array<Replay>();
        for(let i : number = 0; i!= replayNumber; i++)
        { 
            if(replays[i] != null)
                this.replays.push(replays[i]);
        }

    }

    public Mount(parent : Component) : void
    {
        let content : string = "";
        this.replays.forEach((e) => {
            let date : Date = new Date(e.Created()*1000);
            content = content + "<tr><td><a href='Index.html?replays'>"+e.Title()+"</a></td><td>"+date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()+"</td></tr>";
        });
        let opts = {
            'content' : content, 
            'title' : Locale.GetInstance().Word("Title"), 
            'date' : Locale.GetInstance().Word("Date"),
        };
        super.Mount(parent, opts);
        this.GetDOM().setAttribute("data-title", Locale.GetInstance().Word("LastReplays"));
    }
}
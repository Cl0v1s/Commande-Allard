class ReplayComponent extends Component
{

    private replay : Replay;

    constructor(replay : Replay)
    {
        super({
            body : "<h2>{{title}}</h2>\
                <div class='thumbnail' style='background-image: url({{picture}});'></div>\
                <a href='{{url}}'>\
                    <button>\
                        Télécharger\
                    </button>\
                </a>", 
            classes : 'Replay item'
        });
        this.replay = replay;
    }

    public Mount(parent : Component)
    {
        let opts : any = {
            title : this.replay.Title(),
            picture : this.replay.Picture(),
            url : this.replay.Url(),
        };
        super.Mount(parent, opts);

    }
}
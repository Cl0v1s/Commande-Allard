class Link
{
    public url : string;
    public method : Function;

    constructor(url : string, method : Function)
    {
        this.url = url;
        this.method = method;
    }
}

class Linker
{
    private static Instance : Linker;

    public static GetInstance() : Linker 
    {
        if(Linker.Instance == null)
            Linker.Instance = new Linker();
        return Linker.Instance;
    }

    private registry : Array<Link> = new Array<Link>();

    public AddLink(url : string, method : Function)
    {
        let link : Link = new Link(url, method);
        this.registry.push(link);
    }
    
    public Analyze() : void
    {
        let url : string = window.location.toString().split("?")[1];
        let params : Array<string> = url.split("-");
        url = params.shift();
        this.registry.forEach((e) => {
            if(e.url == url)
            {
                e.method(params);
            }
        });
    }
}
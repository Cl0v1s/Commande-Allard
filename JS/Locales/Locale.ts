class Locale 
{
    private static Instance : Locale;

    public CreateInstance(callback : Function) : void
    {
        if(Locale.Instance == null)
            Locale.Instance = new Locale();     
    }

    public GetInstance() : Locale
    {
        return Locale.Instance;
    }

    private file : any;

    constructor()
    {
        // TODO: déterminer la locale 
        let lang : string = "Fr-fr";
        App.Get("/Locales/Fr-fr.json", (data) => {

        })

    }
}
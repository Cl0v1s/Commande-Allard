class Locale 
{
    private static Instance : Locale;

    public static CreateInstance(callback : Function) : void
    {
        if(Locale.Instance == null)
            Locale.Instance = new Locale(callback);     
    }

    public static GetInstance() : Locale
    {
        return Locale.Instance;
    }

    private data : any;

    constructor(callback : Function)
    {
        let self : Locale = this;
        let lang : string = "FR-fr"; // On charge le français par défaut

        let load : Function =  function()
        {
            App.Get("Locales/"+lang+".json", (data) => {
                console.log(data);
                self.data = JSON.parse(data);
                callback();
            });
        };

        // Récupération de la locale 
        App.Get("http://ip-api.com/json/", (data) => {
            data = JSON.parse(data);
            lang = data.countryCode.toUpperCase() + "-" + data.countryCode.toLowerCase();
            load();
        }, load);



    }

    public Word(word : string) : string
    {
        return this.data[word];
    }
}
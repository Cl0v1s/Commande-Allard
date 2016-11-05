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

        let error : Function;

        let load : Function =  function(lang : string)
        {
            App.Get("Locales/"+lang+".json", (data) => {
                try
                {
                    self.data = JSON.parse(data);
                    callback();
                }
                catch(e)
                {
                    error();
                }

            }, error);
        };

        error = function() // En cas d'échec (on ne peux charger la langue, on ne la trouve pas), on charge la langue française par défaut
        {
            load("FR-fr");
        }

        // Récupération de la locale 
        App.Get("http://ip-api.com/json/", (data) => {
            data = JSON.parse(data);
            load(data.countryCode.toUpperCase() + "-" + data.countryCode.toLowerCase());
        }, () => {
            load("FR-fr"); // En cas d'échec de récupération de la localisation, on appelle quand même load avec des valeurs par defaut 
        }); 



    }

    public Word(word : string) : string
    {
        return this.data[word];
    }
}
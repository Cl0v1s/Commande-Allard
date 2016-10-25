class View
{

    public static RootID : string = null;

    private components : Array<Component>;

    constructor()
    {
        this.components = new Array<Component>();
    }

    /**
     * Affiche la vue
     */
    public Show() : void
    {
        if(View.RootID == null)
            document.body.innerHTML = "";
        else 
            document.getElementById(View.RootID).innerHTML = "";
    }

    /**
     * Appelé lorsque l'on rentre dans la vue
     */
    public Enter() : void
    {

    }
    

    /**
     * Appelé lorsque l'on quitte la vue
     */
    public Leave() : void
    {

    }
}
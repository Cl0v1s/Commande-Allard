class Model {
    /**
     * Récupère la liste des replays présents dans la base de données
     * Appelle callback une fois l'opération de récupération terminée
     */
    static RetrieveReplays(callback) {
        Model.Replays = new Array();
        App.Get(App.EndPoint + "/collections/get/Replays", (data) => {
            data = JSON.parse(data);
            data.forEach((e) => {
                Model.Replays.push(new Replay(e));
            });
            callback();
        });
    }
    /**
     * Récupère la liste des articles présents dans la base de données
     * Appelle callback une fois l'opération de récupération terminée
     */
    static RetrieveArticles(callback) {
        Model.Articles = new Array();
        App.Get(App.EndPoint + "/collections/get/Articles", (data) => {
            data = JSON.parse(data);
            data.forEach((e) => {
                Model.Articles.push(new Article(e));
            });
            callback();
        });
    }
    /*
    public static Retrieve(callback : Function) : void
    {
        Model.RetrieveArticles(() => {
            Model.RetrieveReplays(() => {
                callback();
            });
        });
    }*/
    /**
     * Retourne l'article possédant l'id précisé depuis la liste des articles présents dans le CMS
     */
    static GetArticle(id) {
        if (Model.Articles == null)
            throw Error("Les articles doivent être récupérés depuis le CMS avant opération.");
        for (let i = 0; i != Model.Articles.length; i++) {
            let e = Model.Articles[i];
            if (e.Id() == id) {
                return e;
            }
        }
        return null;
    }
    static GetArticles() {
        if (Model.Articles == null)
            throw Error("Les articles doivent être récupérés depuis le CMS avant opération.");
        return Model.Articles;
    }
    static GetReplays() {
        if (Model.Replays == null)
            throw Error("Les replays doivent être récupérés depuis le CMS avant opération.");
        return Model.Replays;
    }
}
Model.Articles = null;
Model.Replays = null;
class Article {
    constructor(data) {
        this.id = data._id;
        this.title = data.Title;
        this.picture = data.Picture;
        this.description = data.Description;
        this.content = data.Content;
        this.created = data.created;
        this.modified = data.modified;
    }
    Id() {
        return this.id;
    }
    Title() {
        return this.title;
    }
    Picture() {
        return this.picture;
    }
    Description() {
        return this.description;
    }
    Content() {
        return this.content;
    }
    Modified() {
        return this.modified;
    }
    Created() {
        return this.created;
    }
}
class Replay {
    constructor(data) {
        this.title = data.Title;
        this.description = data.Description;
        this.picture = data.Picture;
        this.url = data.Url;
    }
    Title() {
        return this.title;
    }
    Description() {
        return this.description;
    }
    Picture() {
        return this.picture;
    }
    Url() {
        return this.url;
    }
}
/**
 * Représente un composant de l'interface
 */
class Component {
    constructor(args) {
        if (args.body == undefined)
            throw new Error("You must define a body to this component");
        this.body = args.body;
        this.classes = args.classes;
    }
    GetDOM() {
        return document.getElementById("component-" + this.id);
    }
    /**
     * Construit le composant dans la page
     */
    Mount(parent, opts) {
        this.id = Component.IDS;
        Component.IDS = Component.IDS + 1;
        let par;
        if (parent == null)
            par = null;
        else if (parent.id == undefined)
            throw Error("Parent must be mount.");
        else
            par = "component-" + parent.id;
        this.Render(par, opts);
    }
    /**
     * Affiche le composant dans la page
     */
    Render(parent, opts) {
        let target;
        if (parent != null)
            target = document.getElementById(parent);
        else {
            if (View.RootID == null)
                target = document.body;
            else
                target = document.getElementById(View.RootID);
        }
        // remplacement des valeurs
        if (opts != null) {
            for (var key in opts) {
                let reg = new RegExp("{{" + key + "}}", "g");
                this.body = this.body.replace(reg, opts[key]);
            }
        }
        // Construction du DOM
        let dom = document.createElement("div");
        dom.id = "component-" + this.id;
        dom.className = this.constructor.name;
        if (this.classes != undefined)
            dom.className += " " + this.classes;
        dom.innerHTML = this.body;
        dom.addEventListener("click", (event) => { this.Click(event); });
        target.appendChild(dom);
    }
    AddClass(clas) {
        this.GetDOM().className = this.GetDOM().className + " " + clas;
    }
    /**
     * Gère l'action lors du click sur le composant
     */
    Click(ev) {
    }
}
Component.IDS = 0;
class ArticleComponent extends Component {
    constructor(article) {
        super({
            body: "\<img class='thumbnail' src='{{picture}}'>\
                <div class='content'>\
                    <p>{{description}}</p>\
                </div>\
                <a href='Index.html?article-{{id}}'>\
                    <button class='more'>\
                        Lire la suite...\
                    </button>\
                </a>\
                ",
            classes: "item Article"
        });
        this.article = article;
    }
    Mount(parent) {
        let opts = {
            id: this.article.Id(),
            picture: this.article.Picture(),
            description: this.article.Description()
        };
        super.Mount(parent, opts);
        this.GetDOM().setAttribute("data-title", this.article.Title());
    }
}
class ArticleFocusComponent extends Component {
    constructor(article) {
        super({
            body: "\<img class='thumbnail' src='{{picture}}'>\
                <div class='content'>\
                    <p>{{content}}</p>\
                </div>\
                ",
            classes: "item Article"
        });
        this.article = article;
    }
    Mount(parent) {
        let opts = {
            picture: this.article.Picture(),
            content: this.article.Content()
        };
        super.Mount(parent, opts);
        this.GetDOM().setAttribute("data-title", this.article.Title());
    }
}
class DisqusComponent extends Component {
    constructor(article) {
        super({
            body: "<div id='disqus_thread'></div>\
                    <script>"
        });
        this.article = article;
    }
    Mount(parent) {
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
class ReplayComponent extends Component {
    constructor(replay) {
        super({
            body: "<h2>{{title}}</h2>\
                <div class='thumbnail' style='background-image: url({{picture}});'></div>\
                <a href='{{url}}'>\
                    <button>\
                        Télécharger\
                    </button>\
                </a>",
            classes: 'Replay item'
        });
        this.replay = replay;
    }
    Mount(parent) {
        let opts = {
            title: this.replay.Title(),
            picture: this.replay.Picture(),
            url: this.replay.Url(),
        };
        super.Mount(parent, opts);
    }
}
/**
 * Une vue est un element consituté d'un ensemble de composants permettant de présenter des informations à l'utilisateur
 */
class View {
    constructor() {
        this.components = new Array();
    }
    /**
     * Affiche la vue
     */
    Show() {
        if (View.RootID == null)
            document.body.innerHTML = "";
        else
            document.getElementById(View.RootID).innerHTML = "";
    }
    /**
     * Appelé lorsque l'on rentre dans la vue
     */
    Enter() {
    }
    /**
     * Appelé lorsque l'on quitte la vue
     */
    Leave() {
    }
}
/**
 * ID (#) de l'élement DOM sur lequel fixer la vue. Si RootID est null, la vue se fixe sur <body>.
 */
View.RootID = null;
class ArticlesView extends View {
    Show() {
        let base = new Component({
            body: "",
            classes: "Articles"
        });
        base.Mount(null, null);
        Model.GetArticles().forEach((data) => {
            new ArticleComponent(data).Mount(base);
        });
    }
}
class ArticleFocusView extends View {
    constructor(article) {
        super();
        if (article == null) {
            console.log("404"); //TODO: implémenter erreur 404
            return;
        }
        this.article = article;
        console.log("Focus article " + this.article.Id());
    }
    Show() {
        super.Show();
        let base = new Component({
            body: "",
            classes: "Articles"
        });
        base.Mount(null, null);
        let articleFocus = new ArticleFocusComponent(this.article);
        articleFocus.Mount(base);
        new DisqusComponent(this.article).Mount(articleFocus);
    }
}
class ReplaysView extends View {
    Show() {
        super.Show();
        let base = new Component({
            body: '',
            classes: 'Replays'
        });
        base.Mount(null, null);
        Model.GetReplays().forEach((e) => {
            new ReplayComponent(e).Mount(base);
        });
    }
}
/**
 * Permet d'associer un lien et une méthode, permet de simuler un comportement d'affichage par page
 */
class Link {
    constructor(url, method) {
        this.url = url;
        this.method = method;
    }
}
/**
 * Permet de simuler un système d'affichage par page qui soit totalement transparent pour l'utilisateur
 * On lit un mot à une méthode.
 * Un url compatible doit être de la forme
 * http://blah.com/Index.html?page-par1-par2-par3-...-parn
 */
class Linker {
    constructor() {
        this.registry = new Array();
    }
    static GetInstance() {
        if (Linker.Instance == null)
            Linker.Instance = new Linker();
        return Linker.Instance;
    }
    /**
     * Ajoute un nouveau lien au système (et par la une page)
     */
    AddLink(url, method) {
        let link = new Link(url, method);
        this.registry.push(link);
    }
    /**
     * Annalise l'url de la page courante pour déterminer d'éventuelles actions à réaliser
     */
    Analyze() {
        let url = window.location.toString().split("?")[1];
        let params = url.split("-");
        url = params.shift();
        for (let i; i != this.registry.length; i++) {
            let e = this.registry[i];
            if (e.url == url) {
                e.method(params);
                return;
            }
        }
    }
}
class App {
    static Main() {
        View.RootID = "Content";
        /**
         * Affiche l'ensemble des articles présents dans le site
         */
        let showArticles = function () {
            Model.RetrieveArticles(() => {
                new ArticlesView().Show();
            });
        };
        /**
         * Affiche l'ensemble des replays disponibles
         */
        let showReplays = function () {
            Model.RetrieveReplays(() => {
                new ReplaysView().Show();
            });
        };
        /**
         * Affiche un article en particulier (premier élément du tableau params)
         */
        let showArticle = function (params) {
            Model.RetrieveArticles(() => {
                new ArticleFocusView(Model.GetArticle(params[0])).Show();
            });
        };
        Linker.GetInstance().AddLink("articles", showArticles);
        Linker.GetInstance().AddLink("replays", showReplays);
        Linker.GetInstance().AddLink("article", showArticle);
        Linker.GetInstance().Analyze();
    }
    /**
     * Envoie des requetes Ajax GET
     */
    static Get(url, callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            callback(xhttp.responseText.trim());
        };
        xhttp.open("GET", url + "?token=" + App.Token, true);
        xhttp.send("token=" + App.Token);
        console.log("Processing " + url);
    }
}
App.EndPoint = "http://172.17.0.2/rest/api";
App.Token = "5e33c6d1ec779b9210e9cdad";
window.onload = App.Main;
//# sourceMappingURL=main.js.map
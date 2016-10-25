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
        dom.className = this.constructor.name + " " + this.classes;
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
    constructor(title, picture, description) {
        super({
            body: "\<img class='thumbnail' src='{{picture}}'>\
                <div class='content'>\
                    <p>{{description}}</p>\
                </div>\
                <button class='more'>\
                    Lire la suite...\
                </button>\
                ",
            classes: "item Article"
        });
        this.title = title;
        this.picture = picture;
        this.description = description;
    }
    Mount(parent) {
        let opts = {
            picture: this.picture,
            description: this.description
        };
        super.Mount(parent, opts);
        this.GetDOM().setAttribute("data-title", this.title);
    }
}
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
View.RootID = null;
class ArticlesView extends View {
    Show() {
        let base = new Component({
            body: "",
            classes: "Articles"
        });
        base.Mount(null, null);
    }
}
class App {
    static Main() {
        View.RootID = "Content";
        new ArticlesView().Show();
        console.log("Started");
    }
}
window.onload = App.Main;
//# sourceMappingURL=main.js.map
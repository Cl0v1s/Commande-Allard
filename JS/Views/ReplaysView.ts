/**
 * Affiche la gallery des replays
 */
class ReplaysView extends View
{

    /**
     * Actions à réaliser lors de l'affichage de la vue 
     */
    public Show() : void
    {
        super.Show();
        let base : Component = new Component({
            body : '<div></div>', 
            classes : 'Replays'
        });
        base.Mount(null, null);
        
        // Afichage du titre 
        new TitleComponent(Locale.GetInstance().Word("Replays")).Mount(base);
        // Pour chacun des replays on créer un composant chargé de l'afficher 
        Model.GetReplays().forEach((e) => {
            new ReplayComponent(e).Mount(base);
        });
    }
}
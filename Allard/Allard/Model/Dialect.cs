using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using Newtonsoft.Json;

namespace Allard.Model
{
    public class Dialect
    {

        public enum Lang
        {
            Fr,
            En, 
        }

        /// <summary>
        /// Instance de langue chargée actuellement
        /// </summary>
        private static Dialect Instance;

        /// <summary>
        /// Mot pour Erreur dans la langue sélectionnée
        /// </summary>
        public string Error { get; set; }

        /// <summary>
        /// Charge le fichier de lang demandé
        /// </summary>
        /// <param name="lang">Langue à charger</param>
        public static void Load(Dialect.Lang lang)
        {
            string file = HttpContext.Current.Request.ApplicationPath + "/Ressources/Lang/" + lang.ToString();
            
            using (var stream = new StreamReader(new FileStream(file, FileMode.Open, FileAccess.Read)))
            {
                Dialect.Instance = JsonConvert.DeserializeObject<Dialect>(stream.ReadToEnd());
            }
        }

        /// <summary>
        /// Récupère l'instance courante de langue, si les données ne sont pas chargées alors on récupère les paramètres
        /// </summary>
        /// <param name="context">Contexte de requete passé par la page</param>
        /// <returns>Les données de langue courantes</returns>
        public static Dialect GetInstance(HttpRequest context)
        {
            if (Dialect.Instance == null)
                Dialect.Load(Controllers.SettingsController.GetInstance(context).Lang);
            return Dialect.Instance;
        }
    }
}
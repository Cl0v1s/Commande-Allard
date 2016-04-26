using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using Newtonsoft.Json;

using Allard.Model;

namespace Allard.Controllers
{
    public class DialectController : Controller
    {
        /// <summary>
        /// Instance de langue chargée actuellement
        /// </summary>
        private static Dialect Instance;

        /// <summary>
        /// Charge le fichier de lang demandé
        /// </summary>
        /// <param name="lang">Langue à charger</param>
        public static void Load(Dialect.Lang lang)
        {
            string file = HttpContext.Current.Request.PhysicalApplicationPath + "Ressources/Lang/" + lang.ToString() + ".json";

            using (var stream = new StreamReader(new FileStream(file, FileMode.Open, FileAccess.Read)))
            {
                DialectController.Instance = JsonConvert.DeserializeObject<Dialect>(stream.ReadToEnd());
            }
        }

        /// <summary>
        /// Récupère l'instance courante de langue, si les données ne sont pas chargées alors on récupère les paramètres
        /// </summary>
        /// <param name="context">Contexte de requete passé par la page</param>
        /// <returns>Les données de langue courantes</returns>
        public static Dialect GetInstance(HttpRequest context)
        {
            if (DialectController.Instance == null)
                DialectController.Load(Controllers.SettingsController.GetInstance(context).Lang);
            return DialectController.Instance;
        }
    }
}
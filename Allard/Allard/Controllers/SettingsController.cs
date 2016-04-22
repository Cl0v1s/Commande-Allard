using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace Allard.Controllers
{
    public class SettingsController : Controller
    {

        private static Model.Settings Settings = null;

        /// <summary>
        /// Charge les paramètres de l'utilisateur courant
        /// </summary>
        /// <param name="context">Element requete transmis par la page</param>
        public static void Load(HttpRequest context)
        {
            if (context.Cookies["Settings"] == null)
            {
                SettingsController.Settings = new Model.Settings();
                return;
            }
            try
            {
                SettingsController.Settings = JsonConvert.DeserializeObject<Model.Settings>(context.Cookies["Settings"].Value);
            }
            catch(Exception)
            {
                SettingsController.Settings = new Model.Settings();
                return;
            }
        }

        /// <summary>
        /// Sauvegarde les paramètres de l'utilisateur courant
        /// </summary>
        /// <param name="context">Element réponse transmis par la page</param>
        public static void Save(HttpResponse context)
        {
            if (SettingsController.Settings == null)
                return;
            string data = JsonConvert.SerializeObject(SettingsController.Settings);
            HttpCookie cookie = new HttpCookie("Settings");
            cookie.Value = data;
            cookie.Expires = DateTime.Now.AddMonths(1);
            context.SetCookie(cookie);
        }


        /// <summary>
        /// Retourne l'instance courante des paramètres de l'utilisateur courant
        /// </summary>
        /// <returns></returns>
        public static Model.Settings GetInstance(HttpRequest context)
        {
            if (SettingsController.Settings == null)
                SettingsController.Load(context);
            return SettingsController.Settings;
        }
      
    }
}
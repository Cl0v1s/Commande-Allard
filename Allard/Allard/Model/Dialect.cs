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

        private static Dialect Instance;

        /// <summary>
        /// Mot pour Erreur dans la langue sélectionnée
        /// </summary>
        public string Error { get; set; }


        public static void Load(string file)
        {
            using (var stream = new StreamReader(new FileStream(file, FileMode.Open, FileAccess.Read)))
            {
                Dialect.Instance = JsonConvert.DeserializeObject<Dialect>(stream.ReadToEnd());
            }
        }

        public static Dialect GetInstance()
        {
            if (Dialect.Instance == null)
                Dialect.Load(UserSettings.GetInstance().Language);
            return Dialect.Instance;
        }
    }
}
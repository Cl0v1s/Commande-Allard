using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Allard.Model
{
    public class UserSettings
    {

        private UserSettings Instance { get; set; }

        public string Language { get; set; }

        //TODO: ajouter un système de sauvegarde et de chargement depuis la base
        public static void Load()
        {
            Instance = new UserSettings();
        }

        public static UserSettings GetInstance()
        {
            if (Instance == null)
                UserSettings.Load();
            return Instance;
        }




    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

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
        /// Mot pour Erreur dans la langue sélectionnée
        /// </summary>
        public string Error { get; set; }

        /// <summary>
        /// Mot pour expliquer l'erreur 404
        /// </summary>
        public string Error404 { get; set; }

    }
}
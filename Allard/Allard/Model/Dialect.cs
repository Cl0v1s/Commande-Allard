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

        /// <summary>
        /// Mot pour expliquer l'erreur 500
        /// </summary>
        public string Error500 { get; set; }

        /// <summary>
        /// Mot pour introduire le nom de l'auteur d'une article ou d'une entrée de gallerie
        /// </summary>
        public string By { get; set; }

        /// <summary>
        /// Mot pour introduire la date de parution d'un article ou d'une entrée de gallerie
        /// </summary>
        public string The { get; set; }

        /// <summary>
        /// Mot pour introduire une heure
        /// </summary>
        public string At { get; set; }

        /// <summary>
        /// Mot pour introduire le créateur du site 
        /// </summary>
        public string SiteBy { get; set; }

        /// <summary>
        /// Mot pour introduire les illustrations 
        /// </summary>
        public string IllustrationsBy { get; set; }

        /// <summary>
        /// Mot pour désigner un article
        /// </summary>
        public string Article { get; set; }

        /// <summary>
        /// Mot pour indiquez cliquer pour lire
        /// </summary>
        public string ClickToContinue { get; set; }

        /// <summary>
        /// Retourne le pluriel du mot passé en paramètre
        /// </summary>
        /// <param name="word">Mot à mettre au pluriel</param>
        /// <returns>Mot au pluriel</returns>
        public string GetPlural(string word)
        {
            return word + "s";
        }


    }
}
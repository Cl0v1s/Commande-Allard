using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Allard.Model
{
    public class Settings
    {
        public Dialect.Lang Lang { get; set; }

        /// <summary>
        /// Règles les paramètres par defaut pour une nouvelle instance de paramètres
        /// </summary>
        public Settings()
        {
            this.Lang = Dialect.Lang.Fr;
        }
    }
}
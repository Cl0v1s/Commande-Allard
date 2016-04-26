using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Allard.Model
{
    public class DataContext
    {
        public static Allard.EntitiesContext Context = new EntitiesContext();
    }
}
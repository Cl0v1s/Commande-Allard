using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Allard.Views.Errors
{
    public partial class _404 : System.Web.UI.Page
    {
        protected Model.Dialect Dialect;

        protected void Page_Load(object sender, EventArgs e)
        {
            Dialect = Controllers.DialectController.GetInstance(Request);
        }
    }
}
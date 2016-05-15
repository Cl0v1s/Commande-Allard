using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Allard.Views.Errors
{
    public partial class _500 : System.Web.UI.Page
    {

        protected Model.Dialect Dialect;

        protected void Page_Load(object sender, EventArgs e)
        {
            Dialect = Controllers.DialectController.GetInstance(Request);

#if DEBUG
            if (Request.Params["message"] != null && Request.Params["stacktrace"] != null)
            {
                Description.InnerHtml += "Message: <br>" + Request.Params["message"] + "<br><br>";
                Description.InnerHtml += "StackTrace: <br>" + Request.Params["stacktrace"] + "<br><br>";
            }
#endif
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Allard.Views.Articles
{
    public partial class Article : System.Web.UI.Page
    {

        protected article _Article;
        protected Model.Dialect Dialect;

        protected void Page_Load(object sender, EventArgs e)
        {
            this.Dialect = Controllers.DialectController.GetInstance(Request);
            int id = -1;
            try
            {
                id = int.Parse(Request.Params["id"]);
            }
            catch(FormatException)
            {
                Response.Redirect("/views/Errors/404.aspx");
            }
            try
            {
                _Article = (from ar in Model.DataContext.Context.articles where ar.id == id select ar).First();
            }
            catch(Exception)
            {
                Response.Redirect("/views/Errors/404.aspx");
            }
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using Allard.Controllers;

namespace Allard.Views.Articles
{
    public partial class Article : System.Web.UI.Page
    {

        protected article _Article;
        protected Model.Dialect Dialect;
        protected Allard.EntitiesContext DataContext;

        protected void Page_Load(object sender, EventArgs e)
        {
            this.Dialect = Controllers.DialectController.GetInstance(Request);

            if(Request.Params["id"] == null)
            {
                ErrorController.Show404(Response);
                return;
            }
            int id = -1;
            try
            {
                id = int.Parse(Request.Params["id"]);
                this.DataContext = new EntitiesContext();
                _Article = this.DataContext.articles.FirstOrDefault(x => x.id == id);
                if(_Article == null)
                {
                    ErrorController.Show404(Response);
                    return;
                }
            }
            catch(Exception ex)
            {
                ErrorController.Show500(Response, ex);
                return;
            }
            
        }
    }
}
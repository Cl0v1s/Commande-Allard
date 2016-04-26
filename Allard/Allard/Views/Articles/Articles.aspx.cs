using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Allard.Views.Articles
{
    public partial class Articles : System.Web.UI.Page
    {
        protected Model.Dialect Dialect;

        protected void Page_Load(object sender, EventArgs e)
        {
            Dialect = Controllers.DialectController.GetInstance(Request);
            List<article> list = Model.DataContext.Context.articles.ToList();
            this.ArticlesList.DataSource = list;
            this.ArticlesList.DataBind();
            
        }
    }
}
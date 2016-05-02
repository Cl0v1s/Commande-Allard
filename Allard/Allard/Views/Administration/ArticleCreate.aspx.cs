using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Allard.Views.Administration
{
    public partial class ArticleCreate : System.Web.UI.Page
    {

        private int? article_id = null;

        protected void Page_Load(object sender, EventArgs e)
        {
            if(Request.Params["id"] != null)
            {
                int id = -1;
                try
                {
                    id = int.Parse(Request.Params["id"]);
                }
                catch(FormatException)
                {
                    Response.Redirect("/Views/Error/404.aspx");
                }
                article article = Model.DataContext.Context.articles.FirstOrDefault(x => x.id == id);
                if(article == null)
                {
                    Response.Redirect("/Views/Error/404.aspx");
                    return;
                }
                article_id = article.id;
                Title.Text = article.title;
                Resume.Text = article.resume;
                Content.Text = article.content;
            }
        }

        protected void Submit_Click(object sender, EventArgs e)
        {

        }
    }
}
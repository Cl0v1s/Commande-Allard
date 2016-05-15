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

        protected void Page_Load(object sender, EventArgs e)
        {
            if(Request.Params["id"] != null && !IsPostBack)
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
                using (var context = new Allard.EntitiesContext())
                {
                    article article = context.articles.FirstOrDefault(x => x.id == id);
                    if (article == null)
                    {
                        Response.Redirect("/Views/Error/404.aspx");
                        return;
                    }
                    Name.Text = article.title;
                    Resume.Text = article.resume;
                    Content.Text = article.content;
                }
            }
        }

        /// <summary>
        /// Clic sur le bouton d'envoi du formulaire, gère la création et l'édition
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Submit_Click(object sender, EventArgs e)
        {
            //TODO: faire le controle des champs
            try
            {
                if (Request.Params["id"] != null)
                {
                    int id = -1;
                    try
                    {
                        id = int.Parse(Request.Params["id"]);
                    }
                    catch (FormatException)
                    {
                        Response.Redirect("/Views/Error/404.aspx");
                    }
                    using (var context = new Allard.EntitiesContext())
                    {
                        article article = context.articles.FirstOrDefault(x => x.id == id);
                        if (article == null)
                        {
                            Response.Redirect("/Views/Error/404.aspx");
                            return;
                        }
                        article.title = Name.Text;
                        article.resume = Resume.Text;
                        article.content = Content.Text;
                        context.SaveChanges();
                    }
                }
                else
                {
                    using (var context = new Allard.EntitiesContext())
                    {
                        article article = new article();
                        article.title = Name.Text;
                        article.resume = Resume.Text;
                        article.content = Content.Text;
                        //TODO: gérer la bonne affectation de l'auteur
                        //article.author = Controllers.UserController.GetCurrentUser();
                        article.date = Utils.DateTimeToTimestamp(DateTime.Now);
                        context.articles.Add(article);
                        context.SaveChanges();
                    }
                }
                Response.Redirect("/Views/Administration/Index.aspx", false);
            }
            catch (Exception ex)
            {
                Response.Redirect("/Views/Errors/500.aspx?message="+HttpUtility.UrlEncode(ex.Message)+"&stacktrace="+HttpUtility.UrlEncode(ex.StackTrace));
            }
        
        }
    }
}
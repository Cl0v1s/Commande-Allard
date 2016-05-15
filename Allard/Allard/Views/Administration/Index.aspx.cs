using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;

using Allard.Controllers;

namespace Allard.Views.Administration
{
    public partial class Index : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //Récupération de la liste des articles 
            using (var context = new Allard.EntitiesContext())
            {
                List<article> articles = context.articles.ToList();
                foreach (article ar in articles)
                {
                    HtmlTableRow row = new HtmlTableRow();
                    HtmlTableCell title = new HtmlTableCell();
                    title.InnerText = ar.title;
                    HtmlTableCell date = new HtmlTableCell();
                    date.InnerText = Utils.TimeStampToDateTime(ar.date).ToString("dd/MM/yy");
                    HtmlTableCell author = new HtmlTableCell();
                    if (ar.author1 != null)//TODO: à virer après test, ça ne peut pas etre nul
                        author.InnerText = ar.author1.firstName + " " + ar.author1.lastName;
                    HtmlTableCell action = new HtmlTableCell();
                    Button edit = new Button(); edit.Attributes["data-id"] = ar.id.ToString(); edit.Text = "Editer"; edit.Click += edit_article_Click;
                    Button delete = new Button(); delete.Attributes["data-id"] = ar.id.ToString(); delete.Text = "Supprimer"; delete.Click += delete_article_Click;
                    action.Controls.Add(edit);
                    action.Controls.Add(delete);
                    row.Controls.Add(title);
                    row.Controls.Add(date);
                    row.Controls.Add(author);
                    row.Controls.Add(action);
                    Articles.Controls.Add(row);
                }
            }
        }

        void delete_article_Click(object sender, EventArgs e)
        {
            Button button = (Button)sender;
            int id = -1;
            try
            {
                id = int.Parse(button.Attributes["data-id"]);
            }
            catch(Exception)
            {
                ErrorController.Show404(Response);
                return;
            }
            try
            {
                using (var context = new Allard.EntitiesContext())
                {
                    article article = context.articles.FirstOrDefault(x => x.id == id);
                    if (article == null)
                    {
                        ErrorController.Show404(Response);
                        return;
                    }
                    context.articles.Remove(article);
                    context.SaveChanges();
                }
                Response.Redirect("/views/Administration/index.aspx", false);
            }
            catch(Exception ex)
            {
                ErrorController.Show500(Response, ex);
                return;
            }
        }

        /// <summary>
        /// Gestion du clic sur le bouton d'édition d'un article
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        void edit_article_Click(object sender, EventArgs e)
        {
            Button button = (Button)sender;
            string id = button.Attributes["data-id"];
            Response.Redirect("/Views/Administration/ArticleCreate.aspx?id=" + id);
        }
    }
}
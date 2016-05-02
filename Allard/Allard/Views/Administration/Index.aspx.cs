﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;

namespace Allard.Views.Administration
{
    public partial class Index : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //Récupération de la liste des articles 
            List<article> articles = Model.DataContext.Context.articles.ToList();
            foreach(article ar in articles)
            {
                HtmlTableRow row = new HtmlTableRow();
                HtmlTableCell title = new HtmlTableCell();
                title.InnerText = ar.title;
                HtmlTableCell date = new HtmlTableCell();
                date.InnerText = Utils.TimeStampToDateTime(ar.date).ToString("dd/MM/yy");
                HtmlTableCell author = new HtmlTableCell();
                author.InnerText = ar.author1.firstName + " "+ar.author1.lastName;
                HtmlTableCell action = new HtmlTableCell();
                Button edit = new Button(); edit.Text = "Editer"; edit.Click += edit_article_Click;
                Button delete = new Button(); delete.Text = "Supprimer"; delete.Click += delete_article_Click;
                action.Controls.Add(edit);
                action.Controls.Add(delete);
                row.Controls.Add(title);
                row.Controls.Add(date);
                row.Controls.Add(author);
                row.Controls.Add(action);
                Articles.Controls.Add(row);
            }
        }

        void delete_article_Click(object sender, EventArgs e)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Gestion du clic sur le bouton d'édition d'un article
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        void edit_article_Click(object sender, EventArgs e)
        {
            throw new NotImplementedException();
        }
    }
}
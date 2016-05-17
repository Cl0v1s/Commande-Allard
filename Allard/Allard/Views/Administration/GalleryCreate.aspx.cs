using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;

namespace Allard.Views.Administration
{
    public partial class GalleryCreate : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //Si on est pas en mode édition, on cache le menu d'édition des entrées
            if(Request.Params["id"] == null)
            {
                this.EditEntries.Visible = false;
            }

            if(Request.Params["id"] != null && !IsPostBack)
            {
                try
                {
                    int id = int.Parse(Request.Params["id"]);
                    gallery gallery = null;
                    using(var context = new Allard.EntitiesContext())
                    {
                        gallery = context.galleries.FirstOrDefault(x => x.id == id);
                        if(gallery == null)
                        {
                            Controllers.ErrorController.Show404(Response);
                            Response.End();
                            return;
                        }
                        this.NameField.Text = gallery.name;
                        this.DescriptionField.Text = gallery.description;
                        foreach(galleryentry entry in gallery.galleryentries)
                        {
                            HtmlTableRow row = new HtmlTableRow();
                            //Ajout du champs pour le nom de l'entrée
                            TextBox title = new TextBox();
                            title.Text = entry.title;
                            HtmlTableCell titlecell = new HtmlTableCell();
                            titlecell.Controls.Add(title);
                            row.Controls.Add(titlecell);
                            //Ajout du champs pour la descrition
                            TextBox description = new TextBox();
                            description.Text = entry.description;
                            HtmlTableCell descriptioncell = new HtmlTableCell();
                            descriptioncell.Controls.Add(description);
                            row.Controls.Add(descriptioncell);
                            //Ajout du champs pour le lien
                            TextBox picture = new TextBox();
                            picture.Text = entry.picture;
                            HtmlTableCell picturecell = new HtmlTableCell();
                            picturecell.Controls.Add(picture);
                            row.Controls.Add(picturecell);
                            //Ajout des boutons d'action
                            Button edit = new Button();
                            edit.Text = "Sauvegarder les modifications";
                            edit.Attributes["data-id"] = entry.id.ToString();
                            edit.Click += edit_Click;
                            Button delete = new Button();
                            delete.Text = "Supprimer l'entrée";
                            delete.Attributes["data-id"] = entry.id.ToString();
                            delete.Click += delete_Click;
                            HtmlTableCell actioncell = new HtmlTableCell();
                            actioncell.Controls.Add(edit);
                            actioncell.Controls.Add(delete);
                            row.Controls.Add(actioncell);
                            this.Entries.Controls.AddAt(0, row);
                        }
                        //Ajout des meta informations sur le bouton d'ajout d'une nouvelle entrée
                        this.AddEntry.Attributes["data-id"] = this.Request.Params["id"];
                    }

                }
                catch(Exception ex)
                {
                    Controllers.ErrorController.Show500(Response, ex);
                    Response.End();
                    return;
                }
            }
        }

        void delete_Click(object sender, EventArgs e)
        {
            throw new NotImplementedException();
        }

        void edit_Click(object sender, EventArgs e)
        {
            throw new NotImplementedException();
        }

        protected void SendButton_Click(object sender, EventArgs e)
        {
            //TODO: ajouter le controle des champs
            if (Request.Params["id"] != null)
            {
                try
                {
                    int id = int.Parse(Request.Params["id"]);
                    gallery gallery = null;
                    using (var context = new Allard.EntitiesContext())
                    {
                        gallery = context.galleries.FirstOrDefault(x => x.id == id);
                        if (gallery == null)
                        {
                            Controllers.ErrorController.Show404(Response);
                            Response.End();
                            return;
                        }
                        gallery.name = this.NameField.Text;
                        gallery.description = this.DescriptionField.Text;
                        context.SaveChanges();
                    }
                    Response.Redirect("/Views/Administration/Index.aspx", false);
                    Response.End();
                    return;
                }
                catch (Exception ex)
                {
                    Controllers.ErrorController.Show500(Response, ex);
                    Response.End();
                    return;
                }
            }
            else
            {
                gallery gallery = new gallery();
                gallery.name = this.NameField.Text;
                gallery.description = this.DescriptionField.Text;
                try
                {
                    using (var context = new Allard.EntitiesContext())
                    {
                        context.galleries.Add(gallery);
                        context.SaveChanges();
                    }
                    Response.Redirect("/Views/Administration/Index.aspx", false);
                    Response.End();
                    return;
                }
                catch (Exception ex)
                {
                    Controllers.ErrorController.Show500(Response, ex);
                    Response.End();
                    return;
                }
            }
        }

        /// <summary>
        /// Permet d'ajouter de nouvelles entrées à la gallerie
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void AddEntry_Click(object sender, EventArgs e)
        {
            Button button = (Button)sender;
            //TODO: ajouter le controle des champs
            if (this.Request.Params["id"] != null)
            {
                try
                {
                    System.Diagnostics.Debug.WriteLine("BaseID: " + button.Attributes["data-id"]);

                    int id = int.Parse(button.Attributes["data-id"]);
                    galleryentry entry = new galleryentry();
                    entry.title = this.AddEntryTitle.Text;
                    entry.description = this.AddEntryDescription.Text;
                    entry.picture = this.AddEntryPicture.Text;
                    entry.gallery = id;
                    System.Diagnostics.Debug.WriteLine("ID: "+entry.id);
                    using(var context = new Allard.EntitiesContext())
                    {
                        context.galleryentries.Add(entry);
                        context.SaveChanges();
                    }
                    Response.Redirect("/Views/Administration/GalleryCreate.aspx?id=" + Request.Params["id"], false);
                    Response.End();
                    return;
                }
                catch(Exception ex)
                {
                    Controllers.ErrorController.Show500(Response, ex);
                    Response.End();
                    return;
                }
            }
            else
            {
                Controllers.ErrorController.Show500(Response, new Exception("Operation can only be done in edit mode."));
                Response.End();
                return;
            }
        }
    }
}
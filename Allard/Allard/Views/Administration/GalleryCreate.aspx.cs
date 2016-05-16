using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Allard.Views.Administration
{
    public partial class GalleryCreate : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
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
                }
                catch (Exception ex)
                {
                    Controllers.ErrorController.Show500(Response, ex);
                    Response.End();
                    return;
                }
            }
        }
    }
}
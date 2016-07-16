using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using System.Web.Security;

namespace Allard.Views.Administration
{
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Submit_Click(object sender, EventArgs e)
        {
            //TODO: vérifier les champs
            string password = Utils.CalculateMD5Hash(Password.Text);
            System.Diagnostics.Debug.WriteLine("Password: " + password);
            using(var context = new Allard.EntitiesContext())
            {
                author author = context.authors.FirstOrDefault(x => x.login == LoginField.Text && x.password == password);
                System.Diagnostics.Debug.WriteLine("LOG: " + author);
                if(author != null)
                {
                    FormsAuthentication.RedirectFromLoginPage
                        (author.id.ToString(), true);
                }
                else
                {
                    //TODO: afficher un message d'erreur lors de l'échec
                }
            }
        }
    }
}
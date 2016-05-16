using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;

namespace Allard.Controllers
{
    public class UserController : Controller
    {

        public static author GetLoggedUser(HttpRequest Request)
        {
            if(String.IsNullOrEmpty(HttpContext.Current.User.Identity.Name))
            {
                throw new Exception("No user logged");
            }
            author res = new author();
            int id = int.Parse(HttpContext.Current.User.Identity.Name);
            using(var context = new Allard.EntitiesContext())
            {
                author author = context.authors.FirstOrDefault(x => x.id == id);
                if (author == null)
                    return null;
                res.firstName = author.firstName;
                res.lastName = author.lastName;
                res.login = author.login;
                res.id = author.id;
                res.picture = author.picture;
            }
            return res;
        }
    }
}
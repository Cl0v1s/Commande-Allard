using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Allard.Controllers
{
    public class ErrorController :  Controller
    {

        public static void Show404(HttpResponse response)
        {
            response.Redirect("/Views/Errors/404.aspx", false);
        }

        public static void Show500(HttpResponse response, Exception ex)
        {
            response.Redirect("/Views/Errors/500.aspx?message=" + HttpUtility.UrlEncode(ex.Message) + "&stacktrace=" + HttpUtility.UrlEncode(ex.StackTrace), false);
        }

        public static void ShowError(string error)
        {

        }
    }
}
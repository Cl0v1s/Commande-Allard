using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Allard.Views.Articles
{
    public partial class ArticleItem : System.Web.UI.UserControl
    {

        public article Article { get; set; }

        protected Model.Dialect Dialect;

        protected void Page_Load(object sender, EventArgs e)
        {
            this.Dialect = Controllers.DialectController.GetInstance();
        }
    }
}
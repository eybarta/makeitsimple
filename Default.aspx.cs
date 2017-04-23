using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml;

public partial class _Default : System.Web.UI.Page
{
    public String cc;
    protected void Page_Load(object sender, EventArgs e)
    {
        
        if(!IsPostBack)
        {
            cc = "";
            try
            {
                cc = appGeoIP.GetCountryCodeByAkamaiHeader().ToUpper();
            }
            catch { }

            if (cc == "US")
            {
                Response.Redirect("http://www.mis-implants.com");
            }
        }
    }

}


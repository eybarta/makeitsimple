using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _test_Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        String err = "";
        String cc = "DE";
        try
        {
            //Read distributer email
            //DataClassesDataContext dc = new DataClassesDataContext();
            //tMember memberTemp = (from m in dc.tMembers where m.admin_level_param.ToUpper() == cc.Trim().ToUpper() && m.admin_level == 2 orderby m.member_id descending select m).First();
            //String distributerEmail = memberTemp.email;

            EmailUtils.SendContactForm("eyalb@mis-implants.com", "Dubi Sharon", "test msg", "eybarta@gmail.com");
        }
        catch (Exception ex)
        {
            err = ex.Message;
        }
    }
}
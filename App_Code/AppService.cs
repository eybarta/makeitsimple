using System;
using System.Configuration;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

/// <summary>
/// Summary description for AppService
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
[System.Web.Script.Services.ScriptService]


public class AppService : System.Web.Services.WebService {

    public AppService () {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    [WebMethod(EnableSession = true)]
    public string SendToDistributor(String token, String name, String email, String message,String cc) 
    {
        String err = "";
        try
        {
            bool IsCaptchaValid = (ReCaptchaClass.Validate(token) == "True" ? true : false);
            if (IsCaptchaValid)
            {
                sendValidatedForm(name, email, message, cc);
            }
            else
            {
                err = "Bad Captcha";
            }
        }
        catch(Exception ex)
        {
            err = ex.Message;
        }
        return err;
    }
    protected void sendValidatedForm(String name, String email, String message, String cc)
    {
        //Read distributer email
        String distributerEmail = "";
        DataClassesDataContext dc = new DataClassesDataContext();
        if (!String.IsNullOrWhiteSpace(cc))
        {
            tMember memberTemp = (from m in dc.tMembers where m.admin_level_param.ToUpper() == cc.Trim().ToUpper() && m.admin_level == 2 orderby m.member_id descending select m).First();
            distributerEmail = memberTemp.email;
        }
        else
        {
            distributerEmail = ConfigurationManager.AppSettings["MailSender"].ToString();
        }


        EmailUtils.SendContactForm(email, name, message, distributerEmail);
    }
    
}

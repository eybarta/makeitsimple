using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using System.Text.RegularExpressions;
using System.Net;
using System.Net.Mail;
using System.IO;
using System.Xml;
using System.Text;
using System.Net.Mime;
using System.Collections.Generic;
using System.Collections.Specialized;

/// <summary>
/// Summary description for EmailUtils
/// </summary>
public class EmailUtils
{
	public EmailUtils()
	{
	}

    /// <summary>
    /// Validate email address
    /// <param name="email">Email address</param>
    /// <returns>bool</returns>
    /// </summary>
    public static bool IsValidEmail(string email)
    {
        Regex re = new Regex(@"^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$", RegexOptions.IgnoreCase);
        return re.IsMatch(email);
    }



    public static void SendContactForm(String email, String name, String Msg,String distributerEmail)
    {
        String[] arrEmails = new String[2];
        arrEmails[0] = email;
        arrEmails[1] = distributerEmail;

        String MailSubject = "Contact Request from MIS Simple minisite";// String.Format("{0} suggested you like {1}", SenderName, PageName);

        String EmailTemplateFile = HttpContext.Current.Server.MapPath("~/webservice/email/contactForm.html");
        StreamReader reader = new StreamReader(EmailTemplateFile);
        String MailHtml = reader.ReadToEnd();
        reader.Close();
        reader.Dispose();

        String UserMsg = Msg;
        if (UserMsg.Length > 0)
        {
            UserMsg = "<span style=\"color:#66c6fd;\">Message:</span><br />" + UserMsg;
        }

        MailHtml = replaceHtmlAttribute(MailHtml, "email", email, "");
        MailHtml = replaceHtmlAttribute(MailHtml, "date", DateTime.Now.ToShortDateString(), "");
        MailHtml = replaceHtmlAttribute(MailHtml, "Msg", UserMsg, "");
        MailHtml = replaceHtmlAttribute(MailHtml, "serviceMailAddress", ConfigurationManager.AppSettings["MailSender"].ToString(), "");        
        sendContentViaExternalService(ConfigurationManager.AppSettings["MailSender"].ToString(), arrEmails, MailHtml, "", MailSubject);
    }

    /// <summary>
    /// Replace html aatribute in html body
    /// <param name="HtmlContent">String</param>
    /// <param name="AttName">String</param>
    /// <param name="AttValue">String</param>
    /// <param name="emptyAlt">String</param>
    /// <returns>String</returns>
    /// </summary>
    public static String replaceHtmlAttribute(String HtmlContent, String AttName, String AttValue,String emptyAlt)
    {
        String newContent = "";
        if (AttValue.Length == 0)
        {
            newContent = HtmlContent.Replace("@@@" + AttName + "@@@", emptyAlt);
        }
        else
        {
            newContent = HtmlContent.Replace("@@@" + AttName + "@@@", AttValue);
        }
        return newContent;
    }


    /// <summary>
    /// Send Content Via External Service
    /// <param name="fromAddress">String</param>
    /// <param name="allToAddresses">string[]</param>
    /// <param name="HtmlContent">String</param>
    /// <param name="PlainHtmlContent">String</param>
    /// <param name="Subject">String</param>
    /// <returns>void</returns>
    /// </summary>
    public static void sendContentViaExternalService(string fromAddress, string[] allToAddresses, String HtmlContent, String PlainHtmlContent, String Subject)
    {
        for (Int32 i = 0; i < allToAddresses.Length; i++)
        {
            sendContentViaExternalService_ToRecep(fromAddress, allToAddresses[i], HtmlContent, PlainHtmlContent, Subject);
        }
    }

    /// <summary>
    /// Send Content Via External Service using "Send Grid" service
    /// <param name="fromAddress">String</param>
    /// <param name="toAddresses">string</param>
    /// <param name="HtmlContent">String</param>
    /// <param name="PlainHtmlContent">String</param>
    /// <param name="Subject">String</param>
    /// <returns>void</returns>
    /// </summary>
    public static void sendContentViaExternalService_ToRecep(String _FromEmail, String _ToEmailAddress, String HtmlContent, String PlainHtmlContent, String Subject)
    {
        try
        {
            MailMessage mailMsg = new MailMessage();
            mailMsg.To.Add(new MailAddress(_ToEmailAddress, _ToEmailAddress));
            mailMsg.From = new MailAddress(_FromEmail, "Mis Implants");

            // Subject and multipart/alternative Body
            mailMsg.Subject = Subject;
            string text = PlainHtmlContent;
            string html = HtmlContent;
            mailMsg.AlternateViews.Add(AlternateView.CreateAlternateViewFromString(text, null, MediaTypeNames.Text.Plain));
            mailMsg.AlternateViews.Add(AlternateView.CreateAlternateViewFromString(html, null, MediaTypeNames.Text.Html));

            // Init SmtpClient and send
            SmtpClient smtpClient = new SmtpClient("smtp.sendgrid.net", Convert.ToInt32(587));
            System.Net.NetworkCredential credentials = new System.Net.NetworkCredential(
                "azure_4a6a436c488c9560ecd28a4f8fa4b191@azure.com",
                "MsxHGa62$26azx51azz%#EdssnbdGHcxaFFS27F4#57d%%33");
            smtpClient.Credentials = credentials;
            smtpClient.Send(mailMsg);
        }
        catch (Exception ex)
        {
            sendErr(ConfigurationManager.AppSettings["DevEmail"].ToString(), ex.Message + "<br/>Email subject:<br/>" + Subject, ex.Message, "Website Error");
        }
    }


    public static void _JangoVersion_sendContentViaExternalService_ToRecep(String _FromEmail, String _ToEmailAddress, String HtmlContent, String PlainHtmlContent, String Subject)
    {
        try
        {
            String BaseURL =        ConfigurationManager.AppSettings["MailExternalServiceApiURL"].ToString();
            String Username =       ConfigurationManager.AppSettings["MailExternalServiceApi_User"].ToString();
            String Password =       ConfigurationManager.AppSettings["MailExternalServiceApi_Pass"].ToString();
            String FromEmail =      _FromEmail;//ConfigurationManager.AppSettings["MailSender"].ToString();
            String FromName =       "MIS Implants";
            String ToEmailAddress = _ToEmailAddress;
            String MessagePlain =   PlainHtmlContent;
            String MessageHTML =    HtmlContent;
            String SoapAction =     "SendTransactionalEmail";

            String url = BaseURL + SoapAction;
            String CommandParams =          "Username=" +           HttpUtility.UrlEncode(Username);
            CommandParams = CommandParams + "&Password=" +          HttpUtility.UrlEncode(Password);
            CommandParams = CommandParams + "&FromEmail=" +         HttpUtility.UrlEncode(FromEmail);
            CommandParams = CommandParams + "&FromName=" +          HttpUtility.UrlEncode(FromName);
            CommandParams = CommandParams + "&ToEmailAddress=" +    HttpUtility.UrlEncode(ToEmailAddress);
            CommandParams = CommandParams + "&Subject=" +           HttpUtility.UrlEncode(Subject);
            CommandParams = CommandParams + "&MessagePlain=" +      HttpUtility.UrlEncode(MessagePlain);
            CommandParams = CommandParams + "&MessageHTML=" +       HttpUtility.UrlEncode(MessageHTML);
            CommandParams = CommandParams + "&Options=" +           HttpUtility.UrlEncode("");

            byte[] byteArray = Encoding.UTF8.GetBytes(CommandParams);
            WebRequest request = WebRequest.Create(url);
            request.Method = "POST";
            request.ContentType = "application/x-www-form-urlencoded";
            request.ContentLength = byteArray.Length;
            Stream dataStream = request.GetRequestStream();
            dataStream.Write(byteArray, 0, byteArray.Length);
            dataStream.Close();
            WebResponse response = request.GetResponse();
            //Response.Write("<br/>" + ToEmailAddress + " Status:" + ((HttpWebResponse)response).StatusDescription);
            dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);
            string responseFromServer = reader.ReadToEnd();
            reader.Close();
            dataStream.Close();
            response.Close();
        }
        catch (Exception ex)
        {
            sendErr(ConfigurationManager.AppSettings["DevEmail"].ToString(), ex.Message + "<br/>Email subject:<br/>" + Subject, ex.Message, "Website Error");
        }
    }




    /// <summary>
    /// Send Err to devloper
    /// <param name="toAddresses">string</param>
    /// <param name="HtmlContent">String</param>
    /// <param name="PlainHtmlContent">String</param>
    /// <param name="Subject">String</param>
    /// <returns>void</returns>
    /// </summary>
    private static void sendErr(String _ToEmailAddress, String HtmlContent, String PlainHtmlContent, String Subject)
    {
        try
        {
            String BaseURL = ConfigurationManager.AppSettings["MailExternalServiceApiURL"].ToString();
            String Username = ConfigurationManager.AppSettings["MailExternalServiceApi_User"].ToString();
            String Password = ConfigurationManager.AppSettings["MailExternalServiceApi_Pass"].ToString();
            String FromEmail = ConfigurationManager.AppSettings["MailSender"].ToString();
            String FromName = "MIS Implants";
            String ToEmailAddress = _ToEmailAddress;
            String MessagePlain = PlainHtmlContent;
            String MessageHTML = HtmlContent;
            String SoapAction = "SendTransactionalEmail";

            String url = BaseURL + SoapAction;
            String CommandParams = "Username=" + HttpUtility.UrlEncode(Username);
            CommandParams = CommandParams + "&Password=" + HttpUtility.UrlEncode(Password);
            CommandParams = CommandParams + "&FromEmail=" + HttpUtility.UrlEncode(FromEmail);
            CommandParams = CommandParams + "&FromName=" + HttpUtility.UrlEncode(FromName);
            CommandParams = CommandParams + "&ToEmailAddress=" + HttpUtility.UrlEncode(ToEmailAddress);
            CommandParams = CommandParams + "&Subject=" + HttpUtility.UrlEncode(Subject);
            CommandParams = CommandParams + "&MessagePlain=" + HttpUtility.UrlEncode(MessagePlain);
            CommandParams = CommandParams + "&MessageHTML=" + HttpUtility.UrlEncode(MessageHTML);
            CommandParams = CommandParams + "&Options=" + HttpUtility.UrlEncode("");

            byte[] byteArray = Encoding.UTF8.GetBytes(CommandParams);
            WebRequest request = WebRequest.Create(url);
            request.Method = "POST";
            request.ContentType = "application/x-www-form-urlencoded";
            request.ContentLength = byteArray.Length;
            Stream dataStream = request.GetRequestStream();
            dataStream.Write(byteArray, 0, byteArray.Length);
            dataStream.Close();
            WebResponse response = request.GetResponse();
            dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);
            string responseFromServer = reader.ReadToEnd();
            reader.Close();
            dataStream.Close();
            response.Close();
        }
        catch (Exception ex)
        {

        }
    }






}

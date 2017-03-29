using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml;
using System.Net;
using System.IO;
using System.Web.UI;
using System.Threading;
using System.Security.Cryptography;
using System.Text;
using System.Collections.Specialized;

/// <summary>
/// Summary description for appGeoIP
/// </summary>
public class appGeoIP
{
	public appGeoIP()
	{
		//
		// TODO: Add constructor logic here
		//
	}


    public static void Test()
    {
        //HttpContext.Current.Request.Headers["X-Akamai-Edgescape"].Count();


    }

    /// <summary>
    /// GetCountryCodeByAkamaiHeader
    /// </summary>
    /// <returns></returns>
    public static String GetCountryCodeByAkamaiHeader()
    {
        String CountryCode = "";
        int loop1, loop2;
        NameValueCollection coll = HttpContext.Current.Request.Headers;
        String[] arr1 = coll.AllKeys;
        for (loop1 = 0; loop1 < arr1.Length; loop1++)
        {
            try
            {
                if (arr1[loop1].Trim().ToLower() == "x-akamai-edgescape")
                {
                    String[] arr2 = coll.GetValues(arr1[loop1]);
                    String vals = HttpContext.Current.Server.HtmlEncode(arr2[0]);
                    String[] valsArr = vals.Split(',');
                    for (Int32 i = 0; i < valsArr.Length; i++)
                    {
                        try
                        {
                            string AkamaiVal = valsArr[i].ToLower();
                            if (AkamaiVal.IndexOf("country_code") == 0)
                            {
                                CountryCode = AkamaiVal.Substring(AkamaiVal.Length - 2);
                                CountryCode = CountryCode.ToUpper();
                            }
                        }
                        catch { }
                    }
                    //georegion=109,country_code=IL,city=HAIFA,lat=32.82,long=34.99,timezone=GMT+2,continent=AS,throughput=vhigh,bw=5000,asnum=1680,location_id=0
                }
            }
            catch { }
        }
        return CountryCode;
    }



    /// <summary>
    /// GetCountryCodeByIP
    /// </summary>
    /// <param name="ipAddress"></param>
    /// <returns></returns>
    public static String GetCountryCodeByIP(String ipAddress)
    {
        String Res = "";

        try
        {
            XmlDocument xmldoc = new XmlDocument();


            string service = "http://api.neustar.biz/ipi/gpp/";
            string version = "v1/";
            string method = "ipinfo/";
            //string ipAddress = "212.143.168.254";
            string apikey = "220.1.57bc41aae4b081cb7492c0f5.NgqvU5Ec1";
            string secret = "hdq8yWNU";
            string sig = MD5GenerateHash(apikey + secret + (Int32)(DateTime.UtcNow - new DateTime(1970, 1, 1)).TotalSeconds);
            string fullURL = service + version + method + ipAddress + "?apikey=" + apikey + "&sig=" + sig + "&format=xml";

            // Create the web request
            HttpWebRequest request = WebRequest.Create(fullURL) as HttpWebRequest;

            // Get response
            using (HttpWebResponse response = request.GetResponse() as HttpWebResponse)
            {
                // Get the response stream
                StreamReader reader = new StreamReader(response.GetResponseStream());
                // Write response to the console
                String xmlstr = reader.ReadToEnd();
                xmldoc.LoadXml(xmlstr);

                XmlNamespaceManager nsmgr = new XmlNamespaceManager(xmldoc.NameTable);
                nsmgr.AddNamespace("ab", "http://data.quova.com/1");
                String cc = xmldoc.SelectSingleNode("ab:ipinfo/ab:Location/ab:CountryData/ab:country_code", nsmgr).InnerText;

                Res = cc;
            }

        }
        catch { }
        return Res;
    }

    public static string MD5GenerateHash(string strInput)
    {
        // Create a new instance of the MD5CryptoServiceProvider object.
        MD5 md5Hasher = MD5.Create();

        // Convert the input string to a byte array and compute the hash.
        byte[] data = md5Hasher.ComputeHash(Encoding.Default.GetBytes(strInput));

        // Create a new Stringbuilder to collect the bytes and create a string.
        StringBuilder sBuilder = new StringBuilder();

        // Loop through each byte of the hashed data and format each one as a hexadecimal string.
        for (int nIndex = 0; nIndex < data.Length; ++nIndex)
        {
            sBuilder.Append(data[nIndex].ToString("x2"));
        }

        // Return the hexadecimal string.
        return sBuilder.ToString();
    }
}

/*
<?xml version="1.0" encoding="UTF-8"?>    <ipinfo xmlns="http://data.quova.com/1" xmlns:xs="http://www.w3.org/2001/XMLSchema-instance">        <ip_address>212.143.168.254</ip_address>        <ip_type>Mapped</ip_type>        <Location><continent>asia</continent><latitude>32.83036</latitude><longitude>34.97434</longitude>        <CountryData> *          <country>israel</country>            <country_code>il</country_code *      ></CountryData><region></region><StateData><state>hefa</state><state_code></state_code></StateData><dma xs:nil="true"></dma><msa xs:nil="true"></msa><CityData><city>haifa</city><postal_code>31000</postal_code><time_zone>2</time_zone><area_code></area_code></CityData></Location></ipinfo>*/

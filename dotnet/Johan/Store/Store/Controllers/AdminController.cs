using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Store.Models;
using Newtonsoft.Json;

namespace Store.Controllers
{
    public class AdminController : BaseController
    {
        // GET: Admin
        public ActionResult Index()
        {
            return View();
        }

        public object Create(Album album)
        {
            try
            {
                if (db.Albums.Any(a => a.Artist == album.Artist && a.Title==album.Title ))
                {
                    return JsonConvert.SerializeObject(new
                    {
                        Result = "Double",
                        Message = "Already Exists"
                    });
                }
                else
                { 
                    db.Albums.Add(album);
                    db.SaveChanges();

                    return JsonConvert.SerializeObject(new
                    {
                        Result = "OK",
                        Record = album
                    });
                }
            }
            catch(Exception e)
            {
                return JsonConvert.SerializeObject (new
                {
                    Result = "Failed",
                    Message=e.Message
                });
            }
        }

    }
}
using Store.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
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
                album.ReleaseDate = DateTime.Now;
                db.Albums.Add(album);
                db.SaveChanges();

                return JsonConvert.SerializeObject( new
                {
                    Result = "Ok",
                    Record = album
                });

            }

            catch (Exception e)
            {
                return  JsonConvert.SerializeObject( new
                {
                    Result = "False",
                    Message = e.Message

                });
            }
        }
    }
}

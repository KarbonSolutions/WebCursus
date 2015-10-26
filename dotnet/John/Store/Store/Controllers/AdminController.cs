using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

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
                db.Albums.Add(album);
                db.SaveChanges();

                return new
                {
                    Result ="OK",
                    Record = album
                };
            }
            catch(Exception e)
            {
                return new
                {
                    Result = "Failed",
                    Message = e.Message
                };
            }
        }
    }
}
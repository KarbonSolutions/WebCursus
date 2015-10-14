using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using Music_Store.Models;

namespace Music_Store.Controllers
{
    public class HomeController : BaseController
    {
        // GET: Home
        public ActionResult Index()
        {
            var albums = db.Albums.Where(a => a.ID >= 0).ToList();
            ViewBag.albums = albums;
            return View();
        }
    }
}
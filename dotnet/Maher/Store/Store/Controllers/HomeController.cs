using Store.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Store.Controllers
{
    public class HomeController : BaseController
    {
        // GET: Home
        public ActionResult Index()
        {
           /* 1. var albums = db.Albums.Where(a => a.ID == 1).ToList();
            */
            var albums = db.Albums.Take(10).ToList();
            ViewBag.albums = albums;
            return View();
        }
        [HttpGet]
        public ActionResult CreateAlbum(Album album)
        {
            db.Albums.Add(album);
            db.SaveChanges();
            return Redirect("Index");
           
           // return View();
            
        }
    }
}
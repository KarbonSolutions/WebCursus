using Store.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;

namespace Store.Controllers
{
    public class HomeController : BaseController
    {
        public ActionResult Index()
        {
            //db.Albums.Where(a => a.ID == 1).ToList();
            var albums = db.Albums.Take(10).ToList();
            ViewBag.albums = albums;

            return View();
        }

        public object ListAlbums()
        {
            var albums = db.Albums.ToList();
            return JsonConvert.SerializeObject(albums);
        }

        [HttpGet]
        public ActionResult CreateAlbum(Album album)
        {
            db.Albums.Add(album);
            db.SaveChanges();
            return Redirect ("Index");
        }
    }
}
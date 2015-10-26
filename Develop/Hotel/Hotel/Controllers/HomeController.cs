using Hotel.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Hotel.Controllers
{
    public class HomeController : BaseController
    {
        // GET: Home
        public ActionResult Index()
        {
            /* 1. var albums = db.Albums.Where(a => a.ID == 1).ToList();
            */
            var rooms = db.Rooms.Take(10).ToList();
            ViewBag.rooms = rooms;
            return View();
        }

        public ActionResult CreateRoom(Room room)
        {           
            if (TryValidateModel(room)) {
                db.Rooms.Add(room);
                db.SaveChanges();
                return Redirect("Index");
            }

            return View();
        }

        public ActionResult UpdateRoom(Room room)
        {
            db.Rooms.Attach(room);
            var entry = db.Entry(room);
            entry.State = System.Data.Entity.EntityState.Modified;

            TryUpdateModel<Room>(room);
         
                db.SaveChanges();

            return View();
        }
    }
}
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
        public ActionResult Index()
        {
            var rooms = db.Rooms.Take(10).ToList();
            ViewBag.rooms = rooms;

            var reservations = db.Reservations.Take(10).ToList();
            ViewBag.reservations = reservations;

            return View();
        }

        [HttpGet]
        public ActionResult CreateRoom(Rooms room)
        {
            db.Rooms.Add(room);
            db.SaveChanges();
            return Redirect("Index");
        }

        [HttpGet]
        public List<Rooms> GetRooms()
        {
            var rooms = db.Rooms.Take(10).ToList();
            return rooms;
        }


        public List<Reservations> GetReservations() {
            var reservations = db.Reservations.Take(10).ToList(); 
            return reservations;
        }


        [HttpGet]
        public ActionResult CreateReservation(Reservations reservation)
        {
            db.Reservations.Add(reservation);
            db.SaveChanges();
            return Redirect("Index");
        }
    }
}
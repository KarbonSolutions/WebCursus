using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using Hotel.Models;

namespace Hotel.Controllers
{
    public class HotelContext : DbContext
    {
        public HotelContext() : base("Hotel") { }

        public DbSet<Room> Rooms { get; set; }
        public DbSet<Reservation> Reservations { get; set; }
      }
}

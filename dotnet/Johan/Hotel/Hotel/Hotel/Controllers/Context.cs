using Hotel.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Hotel.Controllers
{
    public class Context : DbContext
    {
        public Context() : base("Hotel") { }
        public DbSet <Rooms> Rooms { get; set; }
        public DbSet <Reservations> Reservations { get; set; }

    }
}
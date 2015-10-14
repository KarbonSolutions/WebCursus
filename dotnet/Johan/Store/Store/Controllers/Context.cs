using Store.Models; // toevoegen via suggestions fix
using System;
using System.Collections.Generic;
using System.Data.Entity; // toevoegen
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Store.Controllers
{
    public class Context : DbContext 
    {
        public Context() : base("Store") { }
        public DbSet <Album> Albums { get; set; }
    }
}
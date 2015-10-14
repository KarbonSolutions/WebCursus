using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using Store.Models;

namespace Store.Controllers
{
    public class Context : DbContext
    {
        public Context() : base("Store") { 
        
        }

        public DbSet<Album> Albums { get; set; }
    }
}
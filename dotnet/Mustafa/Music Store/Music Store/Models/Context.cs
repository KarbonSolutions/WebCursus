using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Music_Store.Models
{
    public class Context : DbContext
    {
        public Context() : base("MusicStore")
        {
        }

        public DbSet<Album> Albums { get; set; }
    }
}
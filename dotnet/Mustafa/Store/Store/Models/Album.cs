using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Store.Models
{
    [Table("Albums")]
    public class Album
    {
        public int ID { get; set; }

        [StringLength(50)]
        public string Title { get; set; }
        [StringLength(50)]
        public string Artist { get; set; }

        public double Price { get; set; }
        public DateTime ReleaseDate { get; set; }
    }
}
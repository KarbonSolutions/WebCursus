using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;


namespace Store.Models
{
    [Table("Albums")]
    public class Album
    {
        public int ID { get; set; }
        [StringLength(50)]
        public string Title { get; set; }
        public string Artist { get; set; }
        public double Price { get; set; }
        public DateTime ReleaseDate { get;  set; }
    }
}
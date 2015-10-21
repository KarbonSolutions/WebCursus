using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Hotel.Models
{
    [Table("Reservations")]
    public class Reservations
    {
        public int ID { get; set; }
        public int RoomNumber { get; set; }
        [StringLength(50)]
        public string GuestName { get; set; }
        public DateTime CheckInDate { get; set; }
        public DateTime CheckOutDate { get; set; }

    }
}

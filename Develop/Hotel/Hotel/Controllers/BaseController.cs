using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;

namespace Hotel.Controllers
{
    public abstract class BaseController : Controller
    {
        protected HotelContext db = new HotelContext();


    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Hotel.Controllers
{
    public abstract class BaseController : Controller
    {
        protected Context db = new Context();
    }
}
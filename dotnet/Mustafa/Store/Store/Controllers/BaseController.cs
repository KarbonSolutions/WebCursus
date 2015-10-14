using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Store.Controllers
{
    public abstract class BaseController : Controller
    {
        protected Context db = new Context();
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Music_Store.Models;

namespace Music_Store.Controllers
{
    public abstract class BaseController : Controller
    {
        protected Context db = new Context(); 
    }
}
using System;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Northwind.Models;

namespace Northwind.Controllers
{
    public class HomeController : Controller
    {

        private INorthwindRepository _repository;

        public HomeController(INorthwindRepository repository)
        {
            _repository = repository;
        }

        public ActionResult Index(int id) => View(_repository.Discounts
                                                 .Where(d => d.StartTime <= DateTime.Now && d.EndTime >                               DateTime.Now).Take(3));


    }
}

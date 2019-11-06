using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Northwind.Models;

namespace Northwind.Controllers
{
    public class ProductController : Controller
    {
        // this controller depends on the NorthwindRepository
        private INorthwindRepository _repository;
        public ProductController(INorthwindRepository repository)
        {
            _repository = repository;
        }

        public IActionResult Index (int id)
        {
            var results = _repository.Products;

            if (id != 0)
            {
                results = _repository.Products.Where(p => p.CategoryId == id && p.Discontinued == false); ;
            }
            return View(results);
        }

        //public IActionResult Category() => View(_repository.Categories);

        public IActionResult Category()
        {
            var results = _repository.Categories;

            results = _repository.Categories.OrderBy(c => c.CategoryName);
            
            return View(results);
        }

        public IActionResult Discounts()
        {
            var results = _repository.Discounts.Where(d => d.StartTime <= DateTime.Now && d.EndTime > DateTime.Now);
            return View(results);
        }
    }
}

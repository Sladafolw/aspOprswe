using asp1Opr_.Models;
using asp1Opr_.ViewModel;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace asp1Opr_.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Opr1()
        {
            return View();
        }
        public IActionResult mONTE()
        {
            return View();
        }
        public IActionResult primer()
        {
            return View();
        }
        public IActionResult Privacy()
        {
            return View();
        }
        public IActionResult Hyk()
        {
            return View();
        }   
        public IActionResult penalty()
        {
            return View();
        }
        public IActionResult Komplex() { return View(); }
        [HttpPost]
        public IActionResult Komplex([FromBody] Komplex _data2, [FromBody] Komplex _data)
        {
            if (_data.action == "-") 
            {  
            }
            return Json(_data);
        }
        public IActionResult Books() { return View(); }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
        public IActionResult Insert_data()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Insert_data([FromBody] TableData _data)
        {
            //var result = DB.Insert(_data);
            return Json(_data);
        }
    }
}
using Microsoft.AspNetCore.Mvc;

namespace MemoryMVC.Controllers
{
    public class MemoryController : Controller
    {
        public IActionResult Memory()
        {
            return View();
        }
    }
}

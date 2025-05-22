using Microsoft.AspNetCore.Mvc;

namespace MyApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AddController : ControllerBase
    {
        [HttpGet]
        public ActionResult<int> Add(int a, int b)
        {
            return Ok(a + b);
        }
    }
}

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using M14BE.Data;

namespace M14BE.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : ControllerBase
    {
        private MovieDbContext context;

        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }
        public IEnumerable<Movie> Get()
        {
            var x = context.Movies.Where(m => m.Edited == "Yes")
                .OrderBy(m => m.Title).ToArray();
            return (x);
        }
    }
}

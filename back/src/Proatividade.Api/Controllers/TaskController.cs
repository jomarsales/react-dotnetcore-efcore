using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Proatividade.Api.Data;


namespace Proatividade.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TaskController : ControllerBase
    {
        public readonly DataContext _context;

        public TaskController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Models.Task>> Get()
        {
            return await _context.Tasks.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<Models.Task> Get(int id)
        {
            return await _context.Tasks.FirstOrDefaultAsync(x => x.Id == id);
        }

        [HttpPost]
        public async Task<IEnumerable<Models.Task>> Post(Models.Task task)
        {
            await _context.Tasks.AddAsync(task);

            if(await _context.SaveChangesAsync() > 0)
            {
                return _context.Tasks;
            }
            else
            {
                throw new Exception("Task was not added");
            }
        }

        [HttpPut("{id}")]
        public async Task<Models.Task> Put(int id, Models.Task task)
        {
            if(task.Id != id)
                throw new Exception("Incorrect task");

            _context.Update(task);
            
            if(await _context.SaveChangesAsync() > 0)
            {
                return task;                
            } 
            else
            {
                return new Models.Task();
            }
        }

        [HttpDelete("{id}")]
        public async Task<bool> Delete(int id)  
        {
            var taskDb = await _context.Tasks.FirstOrDefaultAsync(x => x.Id == id);
                
            if(taskDb == null)
                throw new Exception("Invalid task");

            _context.Remove(taskDb);
            
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
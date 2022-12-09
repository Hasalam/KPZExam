using ExamNet6.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ExamNet6.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private readonly DataContext db;
        public TasksController(DataContext context)
        {
            db = context;
        }

        [HttpGet("GetAllTasks")]
        public async Task<ActionResult<TaskModel>> GetTasks()
        {
            return Ok(await db.Tasks.ToListAsync());
        }

        [HttpPost("AddTask")]
        public async Task<ActionResult<TaskModel>> AddTasks(TaskModel task)
        {
            db.Tasks.Add(task);
            await db.SaveChangesAsync();
            return Ok(await db.Tasks.ToListAsync());
        }
        [HttpGet("GetTask/{id}")]
        public async Task<ActionResult<TaskModel>> GetTask(int id)
        {
            var task = await db.Tasks.FindAsync(id);
            if (task == null)
                return BadRequest("Task not found.");
            return Ok(task);
        }

        [HttpPut("EditTask")]

        public async Task<ActionResult<TaskModel>> UpdateTask(TaskModel _task)
        {
            var task =await db.Tasks.FindAsync(_task.Id);
            if (task == null)
                return BadRequest("Task not found.");
            task.Title = _task.Title;
            task.Text = _task.Text;
            task.Status = _task.Status;
            task.Priority = _task.Priority;
            task.Time = _task.Time;
            await db.SaveChangesAsync();
            return Ok(await db.Tasks.ToListAsync());
        }

        [HttpDelete("DeleteTask/{id}")]
        public async Task<ActionResult<TaskModel>> DeleteTask(int id)
        {
            var task = await db.Tasks.FindAsync(id);
            if (task == null)
                return BadRequest("Task not found.");
            db.Tasks.Remove(task);
            await db.SaveChangesAsync();
            return Ok(await db.Tasks.ToListAsync());
        }
    }
}

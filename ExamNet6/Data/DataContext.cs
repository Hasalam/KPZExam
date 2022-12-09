using ExamNet6.Models;
using Microsoft.EntityFrameworkCore;

namespace ExamNet6.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        { }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<TaskModel>().HasData(
                new TaskModel
                {
                    Id = 1,
                    Title = "Exam",
                    Text = "Do web api with React front",
                    Status = Models.TaskStatus.Developing,
                    Priority = Models.TaskPriority.High,
                    Time = 1.1f
                },
                new TaskModel
                {
                    Id = 2,
                    Title = "Exam",
                    Text = "Seed db",
                    Status = Models.TaskStatus.Developing,
                    Priority = Models.TaskPriority.Medium,
                    Time = 0.2f
                },
                new TaskModel
                {
                    Id = 3,
                    Title = "Post exam",
                    Text = "Go to work",
                    Status = Models.TaskStatus.New,
                    Priority = Models.TaskPriority.High,
                    Time = 4.0f
                }) ;
        }
        public DbSet<TaskModel> Tasks { get; set; }
    }
}

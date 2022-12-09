namespace ExamNet6.Models
{
    public enum TaskStatus
    { 
        New,
        Developing,
        Testing,
        Finished
    }

    public enum TaskPriority
    {
        High,
        Medium,
        Low
    }
    public class TaskModel
    {
        public int Id { get; set; } 
        public string Text { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public TaskStatus Status { get; set; }
        public TaskPriority Priority { get; set; }
        public float Time { get; set; }
    }
}

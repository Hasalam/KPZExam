using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace ExamNet6.Migrations
{
    /// <inheritdoc />
    public partial class AddTimeToTasksAndSeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<float>(
                name: "Time",
                table: "Tasks",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.InsertData(
                table: "Tasks",
                columns: new[] { "Id", "Priority", "Status", "Text", "Time", "Title" },
                values: new object[,]
                {
                    { 1, 0, 1, "Do web api with React front", 1.1f, "Exam" },
                    { 2, 1, 1, "Seed db", 0.2f, "Exam" },
                    { 3, 0, 0, "Go to work", 4f, "Post exam" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Tasks",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Tasks",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Tasks",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DropColumn(
                name: "Time",
                table: "Tasks");
        }
    }
}

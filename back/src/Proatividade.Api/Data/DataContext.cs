using Microsoft.EntityFrameworkCore;
using Proatividade.Api.Data.Config;

namespace Proatividade.Api.Data
{
    public class DataContext : DbContext
    {
        public DbSet<Models.Task> Tasks { get; set; }

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new TaskConfig());
            base.OnModelCreating(modelBuilder);
        }
    }
}
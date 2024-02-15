using Foodea.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;
using System.Reflection;
using System.Text.RegularExpressions;

namespace Foodea.Data
{
    public partial class FoodeaDbContext: DbContext{
        public FoodeaDbContext() {

        }

        public FoodeaDbContext(DbContextOptions<FoodeaDbContext> options): base(options) {

        }
        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<Recipe> Recipe { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<User>(entity => {
                entity.HasKey(e => e.UserId);
            });

            //modelBuilder.Entity<Recipe>(entity => {
            //    entity.HasKey(e => e.id);
            //});

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

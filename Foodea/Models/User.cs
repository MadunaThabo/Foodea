using System.ComponentModel.DataAnnotations;

namespace Foodea.Models{
    public class User{
        [Key]
        public Guid UserId { get; set; }
        public String Name { get; set; }
        public String Surname { get; set; }
        public String Email { get; set; }
        public String Profile { get; set; }
        public String Password { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Foodea.Data;
using Foodea.Models;
using Foodea.Services;

namespace Foodea.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserServices userService;
        private readonly ISpoonacularServices spoonacularServices;

        public UsersController(IUserServices userService, ISpoonacularServices spoonacularServices)
        {
            this.userService = userService;
            this.spoonacularServices = spoonacularServices;
        }

        // GET: api/Users
        [HttpGet]
        public IActionResult GetUsers()
        {
            try {
                var users = this.userService.getAllUsers();
                return Ok(users);
            }
            catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] UserCredentials credentials) {
            try {
                var user = this.userService.login(credentials.Email, credentials.Password);
                if (user == null) {
                    return BadRequest("User does not exist");
                }
                if (user.Password != credentials.Password) {
                    return BadRequest("Incorrect password");
                }
                return Ok(user);
            }
            catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }

        // GET: api/Users/Id/3fa85f64-5717-4562-b3fc-2c963f66afa6
        [HttpGet("Id/{id}")]
        public IActionResult GetUserById(Guid id)
        {
            try {
                var user = this.userService.getUserById(id);
                return Ok(user);
            }
            catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }

        //GET: api/Users/youremail@email.com
        [HttpGet("{email}")]
        public IActionResult GetUserByEmail(string email) {
            try {
                var user = this.userService.getUserByEmail(email);
                return Ok(user);
            }
            catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("update")]
        public IActionResult UpdateUser(User user) {
            try {
                var response = this.userService.updateUser(user);
                if(response == null) {
                    return BadRequest("User does not exist");
                }
                return Ok(response);
            }
            catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult AddNewUser(User user) {
            try {
                var response = this.userService.createUser(user);
                return Ok(response);            
            }
            catch(Exception ex) {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUser(Guid id) {
            try {
                var response = this.userService.deleteUserById(id);
                if(response == "User does not exist") {
                    return BadRequest(response);
                }
                return Ok("User deleted successfully");
            }
            catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("random")]
        public async Task<IActionResult> RandomFunc(int number) {
            try {
                var content = await this.spoonacularServices.GetRandomRecipes(number);
                return Ok( content );
            }
            catch(Exception ex) {
                return BadRequest(ex.Message);
            }
        }
    }
}

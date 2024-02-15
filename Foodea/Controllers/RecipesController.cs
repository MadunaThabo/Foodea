using Foodea.Models;
using Foodea.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace Foodea.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class RecipesController : ControllerBase {

        private readonly IUserServices userService;
        private readonly ISpoonacularServices spoonacularServices;

        public RecipesController(IUserServices userService, ISpoonacularServices spoonacularServices) {
            this.userService = userService;
            this.spoonacularServices = spoonacularServices;
        }

        [HttpGet("random")]
        public async Task<IActionResult> RandomFunc(int number) {
            try {
                var content = await this.spoonacularServices.GetRandomRecipes(number);
                return Ok(content);
            }
            catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{recipeId}")]
        public async Task<IActionResult> GetRecipeById(int recipeId) {
            try {
                var content = await this.spoonacularServices.GetRecipeById(recipeId);
                return Ok(content);
            }
            catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("similar/{recipeId}")]
        public async Task<IActionResult> GetRecipeById(int recipeId, int numberOfSimilarRecipes) {
            try {
                var content = await this.spoonacularServices.GetSimilarRecipesToRecipe(recipeId, numberOfSimilarRecipes);
                return Ok(content);
            }
            catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("search/{query}")]
        public async Task<IActionResult> searchRecipe(string query) {
            try {
                var content = await this.spoonacularServices.searchRecipe(query);
                return Ok(content);
            }
            catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("search/")]
        public async Task<IActionResult> searchRecipe([FromBody] RecipeSearchModel recipeSearch ) {
            try {
                string fullQuery = "";
                bool first = true;
                if (recipeSearch.query != null) {
                    fullQuery += "query=" + recipeSearch.query + "&";
                }
                if (recipeSearch.ingredients != null) {
                    fullQuery += "includeIngredients=" + string.Join(",", recipeSearch.ingredients) + "&";
                }
                if (recipeSearch.cuisine != null) {
                    fullQuery += "cuisine=" + recipeSearch.cuisine + "&";
                }
                if (recipeSearch.diet != null) {
                    fullQuery += "diet=" + recipeSearch.diet + "&";
                }
                if (recipeSearch.type != null) {
                    fullQuery += "type=" + recipeSearch.type + "&";
                }
                if (recipeSearch.mealPreparationTime != null) {
                    fullQuery += "maxReadyTime=" + recipeSearch.mealPreparationTime.ToString();
                }   
                var content = await this.spoonacularServices.searchRecipe(fullQuery);
                return Ok(content);
            }
            catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("ingredients/{ingredients}")]
        public async Task<IActionResult> getRecipesByIngredients(string ingredients) {
            try {
                var content = await this.spoonacularServices.getRecipesByIngredients(ingredients);
                return Ok(content);
            }
            catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }
    }
}

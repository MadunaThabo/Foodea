using System.Net.Http.Headers;
using Foodea.Models;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System.IO.Pipelines;
using System.Collections.Concurrent;

namespace Foodea.Services {

    public interface ISpoonacularServices {
        public Task<string> GetRandomRecipes(int number);
        public Task<string> GetRecipeById(int number);
        public Task<string> GetSimilarRecipesToRecipe(int recipeId, int numberOfSimilarRecipes);
        public Task<string> searchRecipe(string query);
        public Task<string> getRecipesByIngredients(string query);
    }
    public class SpoonacularService : ISpoonacularServices {

        private readonly HttpClient httpClient = new HttpClient();
        private string apiKey;
        public SpoonacularService(IConfiguration config) {
            //var random = config.GetValue<string>("APIKeys:spoonacularApiKey");
            this.apiKey = config.GetValue<string>("APIKeys:spoonacularApiKey");
            this.httpClient.DefaultRequestHeaders.Add("apiKey", config.GetValue<string>("APIKeys:spoonacularApiKey"));
        }

        public async Task<string> GetRandomRecipes(int number) {
            //var apiKey = "apiKey=38262c2033cb423b9b84d05b835d1ee8&";
            var url = "https://api.spoonacular.com/recipes/random?" + "number=" + number.ToString() + "&apiKey=" + this.apiKey;
            var response = await this.httpClient.GetAsync(url);
            var content = await response.Content.ReadAsStringAsync();
            if (response.StatusCode == System.Net.HttpStatusCode.OK) {
                return content;
            }
            else {
                throw new KeyNotFoundException("An error occurred.");
            }
        }

        public async Task<string> GetRecipeById(int recipeId) {
            var url = "https://api.spoonacular.com/recipes/" + recipeId + "/information?includeNutrition=false&apiKey=" + apiKey;
            var response = await this.httpClient.GetAsync(url);
            var content = await response.Content.ReadAsStringAsync();
            if (response.StatusCode == System.Net.HttpStatusCode.OK) {
                return content;
            }
            else {
                throw new KeyNotFoundException("An error occurred.");
            }
        }

        public async Task<string> GetSimilarRecipesToRecipe(int recipeId, int numberOfSimilarRecipes) {
            var url = "https://api.spoonacular.com/recipes/" + recipeId + "/similar&apiKey=" + apiKey;
            var response = await this.httpClient.GetAsync(url);
            var content = await response.Content.ReadAsStringAsync();
            if (response.StatusCode == System.Net.HttpStatusCode.OK) {
                return content;
            }
            else {
                throw new KeyNotFoundException("An error occurred.");
            }
        }

        public async Task<string> searchRecipe(string query)
        {
            var url = "https://api.spoonacular.com/recipes/complexSearch?query=" + query + "&number=12" + "&apiKey=" + apiKey;
            var response = await this.httpClient.GetAsync(url);
            var content = await response.Content.ReadAsStringAsync();
            if (response.StatusCode == System.Net.HttpStatusCode.OK)
            {
                var recipes = new List<JObject>();
                var result1 = JObject.Parse(content);
                var results = result1["results"].ToArray();
                foreach (var result in results)
                {
                    var recipeId = (int)result["id"];
                    var recipeContent = await GetRecipeById(recipeId);
                    var recipe = JObject.Parse(recipeContent);
                    recipes.Add(recipe);
                }
                var responseJson = new JObject();
                responseJson["recipes"] = JArray.FromObject(recipes);
                return responseJson.ToString();
            }
            else
            {
                throw new KeyNotFoundException("An error occurred.");
            }
        }

        public async Task<string> getRecipesByIngredients(string query)
        {
            var url = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + query + "&number=24&limitLicense=true&ranking=1&ignorePantry=true&includeNutrition=true&apiKey=" + apiKey + "&sort=missedIngredients";
            var response = await this.httpClient.GetAsync(url);
            var content = await response.Content.ReadAsStringAsync();
            if (response.StatusCode == System.Net.HttpStatusCode.OK)
            {
                var recipes = new ConcurrentBag<JObject>();
                var results = JArray.Parse(content);
                await Task.WhenAll(results.Select(async (result) => {
                    var recipeId = (int)result["id"];
                    var recipeContent = await GetRecipeById(recipeId);
                    var recipe = JObject.Parse(recipeContent);
                    recipes.Add(recipe);
                }));
                var sortedRecipes = recipes.OrderBy(r => r["missedIngredientCount"]).ToList();
                return JsonConvert.SerializeObject(sortedRecipes);
            }
            else
            {
                throw new KeyNotFoundException("An error occurred.");
            }
        }

    }
}

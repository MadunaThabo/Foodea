namespace Foodea.Models {
    public class RecipeSearchModel {
        public string query { get; set; }
        public string[]? ingredients { get; set; }
        public string? cuisine { get; set; }
        public string? diet { get; set; }
        public string? type { get; set; }
        public int? mealPreparationTime { get; set; }
    }
}

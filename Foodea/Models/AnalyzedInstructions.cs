namespace Foodea.Models {
    public class AnalyzedInstruction {
        public int step { get; set; }
        public List<Ingredient> ingredients { get; set; }
        public List<Equipment> equipment { get; set; }
        public string stepDescription { get; set; }
    }
}

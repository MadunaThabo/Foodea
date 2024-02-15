using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Foodea.Migrations
{
    /// <inheritdoc />
    public partial class init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Recipe",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    aggregateLikes = table.Column<int>(type: "integer", nullable: false),
                    cheap = table.Column<bool>(type: "boolean", nullable: false),
                    cookingMinutes = table.Column<int>(type: "integer", nullable: false),
                    creditsText = table.Column<string>(type: "text", nullable: false),
                    cuisines = table.Column<List<string>>(type: "text[]", nullable: false),
                    dairyFree = table.Column<bool>(type: "boolean", nullable: false),
                    diets = table.Column<List<string>>(type: "text[]", nullable: false),
                    dishTypes = table.Column<List<string>>(type: "text[]", nullable: false),
                    gaps = table.Column<string>(type: "text", nullable: false),
                    glutenFree = table.Column<bool>(type: "boolean", nullable: false),
                    healthScore = table.Column<int>(type: "integer", nullable: false),
                    image = table.Column<string>(type: "text", nullable: false),
                    imageType = table.Column<string>(type: "text", nullable: false),
                    instructions = table.Column<string>(type: "text", nullable: false),
                    license = table.Column<string>(type: "text", nullable: false),
                    lowFodmap = table.Column<bool>(type: "boolean", nullable: false),
                    occasions = table.Column<List<string>>(type: "text[]", nullable: false),
                    preparationMinutes = table.Column<int>(type: "integer", nullable: false),
                    pricePerServing = table.Column<double>(type: "double precision", nullable: false),
                    servings = table.Column<int>(type: "integer", nullable: false),
                    sourceName = table.Column<string>(type: "text", nullable: false),
                    sourceUrl = table.Column<string>(type: "text", nullable: false),
                    spoonacularSourceUrl = table.Column<string>(type: "text", nullable: false),
                    summary = table.Column<string>(type: "text", nullable: false),
                    sustainable = table.Column<bool>(type: "boolean", nullable: false),
                    title = table.Column<string>(type: "text", nullable: false),
                    vegan = table.Column<bool>(type: "boolean", nullable: false),
                    vegetarian = table.Column<bool>(type: "boolean", nullable: false),
                    veryHealthy = table.Column<bool>(type: "boolean", nullable: false),
                    veryPopular = table.Column<bool>(type: "boolean", nullable: false),
                    weightWatcherSmartPoints = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Recipe", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Recipe");
        }
    }
}

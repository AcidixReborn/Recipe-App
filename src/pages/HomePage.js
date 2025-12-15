import { useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import RecipeList from '../components/RecipeList/RecipeList';
import recipes from '../data/recipes';
import './HomePage.css';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = recipes.filter((recipe) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      recipe.title.toLowerCase().includes(searchLower) ||
      recipe.description.toLowerCase().includes(searchLower) ||
      recipe.category.toLowerCase().includes(searchLower) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchLower)
      )
    );
  });

  return (
    <div className="home-page">
      <section className="hero">
        <h2>Discover Delicious Recipes</h2>
        <p>Find your next favorite meal from our collection of tasty recipes</p>
      </section>

      <section className="search-section">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </section>

      <section className="recipes-section">
        <div className="recipes-header">
          <h3>
            {searchTerm
              ? `Search Results (${filteredRecipes.length})`
              : `All Recipes (${recipes.length})`}
          </h3>
        </div>
        <RecipeList recipes={filteredRecipes} />
      </section>
    </div>
  );
}

export default HomePage;

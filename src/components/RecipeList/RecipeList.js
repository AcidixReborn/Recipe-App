import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipeList.css';

function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return (
      <div className="recipe-list-empty">
        <span className="empty-icon">🔍</span>
        <h3>No recipes found</h3>
        <p>Try adjusting your search terms</p>
      </div>
    );
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;

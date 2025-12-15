import { Link } from 'react-router-dom';
import './RecipeCard.css';

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <div className="recipe-card-image-container">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="recipe-card-image"
        />
        <span className="recipe-card-category">{recipe.category}</span>
      </div>
      <div className="recipe-card-content">
        <h3 className="recipe-card-title">{recipe.title}</h3>
        <p className="recipe-card-description">{recipe.description}</p>
        <div className="recipe-card-meta">
          <span className="meta-item">
            <span className="meta-icon">⏱️</span>
            {recipe.prepTime}
          </span>
          <span className="meta-item">
            <span className="meta-icon">👨‍🍳</span>
            {recipe.difficulty}
          </span>
          <span className="meta-item">
            <span className="meta-icon">🍽️</span>
            {recipe.servings} servings
          </span>
        </div>
        <Link to={`/recipe/${recipe.id}`} className="recipe-card-link">
          View Recipe
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;

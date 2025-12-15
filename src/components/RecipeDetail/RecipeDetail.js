import { useNavigate } from 'react-router-dom';
import './RecipeDetail.css';

function RecipeDetail({ recipe }) {
  const navigate = useNavigate();

  if (!recipe) {
    return (
      <div className="recipe-not-found">
        <span className="not-found-icon">🍽️</span>
        <h2>Recipe Not Found</h2>
        <p>The recipe you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/')} className="back-button">
          Back to Recipes
        </button>
      </div>
    );
  }

  return (
    <div className="recipe-detail">
      <button onClick={() => navigate('/')} className="back-button">
        ← Back to Recipes
      </button>

      <div className="recipe-detail-header">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="recipe-detail-image"
        />
        <div className="recipe-detail-info">
          <span className="recipe-category-badge">{recipe.category}</span>
          <h1 className="recipe-title">{recipe.title}</h1>
          <p className="recipe-description">{recipe.description}</p>

          <div className="recipe-meta-grid">
            <div className="meta-box">
              <span className="meta-box-icon">⏱️</span>
              <span className="meta-box-label">Prep Time</span>
              <span className="meta-box-value">{recipe.prepTime}</span>
            </div>
            <div className="meta-box">
              <span className="meta-box-icon">🍳</span>
              <span className="meta-box-label">Cook Time</span>
              <span className="meta-box-value">{recipe.cookTime}</span>
            </div>
            <div className="meta-box">
              <span className="meta-box-icon">🍽️</span>
              <span className="meta-box-label">Servings</span>
              <span className="meta-box-value">{recipe.servings}</span>
            </div>
            <div className="meta-box">
              <span className="meta-box-icon">📊</span>
              <span className="meta-box-label">Difficulty</span>
              <span className="meta-box-value">{recipe.difficulty}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="recipe-detail-body">
        <div className="ingredients-section">
          <h2>
            <span className="section-icon">🥗</span>
            Ingredients
          </h2>
          <ul className="ingredients-list">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="ingredient-item">
                <span className="ingredient-bullet">•</span>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div className="instructions-section">
          <h2>
            <span className="section-icon">📝</span>
            Instructions
          </h2>
          <ol className="instructions-list">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="instruction-item">
                <span className="step-number">{index + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;

import { useParams } from 'react-router-dom';
import RecipeDetail from '../components/RecipeDetail/RecipeDetail';
import recipes from '../data/recipes';

function RecipeDetailPage() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  return (
    <div className="recipe-detail-page">
      <RecipeDetail recipe={recipe} />
    </div>
  );
}

export default RecipeDetailPage;

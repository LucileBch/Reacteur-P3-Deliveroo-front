// ---------- CATEGORY component ----------
// Import
import Meal from "./Meal";

const Category = ({ category }) => {
  return (
    <div className="container">
      <h2>{category.name}</h2>
      {category.meals.map((meal) => {
        return <Meal key={meal.id} meal={meal} />;
      })}
    </div>
  );
};

export default Category;

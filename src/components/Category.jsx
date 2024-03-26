// ---------- CATEGORY component ----------
// Import component
import Meal from "./Meal";

const Category = ({ category, items }) => {
  return (
    <div className="container">
      <h2>{category.name}</h2>

      {items.map((item) => {
        return (
          category.id === item.categoryId && <Meal key={item.id} meals={item} />
        );
      })}
    </div>
  );
};

export default Category;

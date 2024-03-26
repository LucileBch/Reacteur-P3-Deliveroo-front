// ---------- CATEGORY component ----------
// Import component
import Meal from "./Meal";

const Category = ({
  category,
  items,
  itemInCart,
  setItemInCart,
  subtotal,
  setSubtotal,
}) => {
  const handleClick = (item) => {
    const newCart = [...itemInCart];
    newCart.push(item);
    setItemInCart(newCart);
    console.log(newCart);
    setSubtotal(subtotal + item.price.fractional / 100);
  };

  return (
    <div className="container">
      <h2>{category.name}</h2>

      {items.map((item) => {
        return (
          category.id === item.categoryId && (
            <Meal
              key={item.id}
              meals={item}
              onClick={() => {
                handleClick(item);
              }}
            />
          )
        );
      })}
    </div>
  );
};

export default Category;

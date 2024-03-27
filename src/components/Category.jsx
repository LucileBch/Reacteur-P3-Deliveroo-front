// ---------- CATEGORY component ----------
// Import component
import Meal from "./Meal";

const Category = ({ category, items, cart, setCart }) => {
  const handleClick = (item) => {
    const newCart = [...cart];

    const search = newCart.find((element) => element.id === item.id);

    if (search) {
      search.quantity++;
      search.price = search.quantity * search.price;
    } else {
      newCart.push({
        id: item.id,
        name: item.name,
        price: item.price.fractional,
        quantity: 1,
      });
    }
    setCart(newCart);
    console.log(newCart);
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

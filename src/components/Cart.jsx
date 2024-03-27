const Cart = ({ cart, setCart, subTotal }) => {
  const deliveryPrice = 250;
  const fixedDeliveryPrice = (deliveryPrice / 100)
    .toFixed(2)
    .split(".")
    .join(",");

  const handleDecrement = (item, index) => {
    const newCart = [...cart];

    const search = newCart.find((element) => element.id === item.id);

    if (search && search.quantity === 1) {
      newCart.splice(index, 1);
    } else if (search) {
      search.quantity--;
    }
    setCart(newCart);
    console.log(newCart);
  };

  const handleIncrement = (item) => {
    const newCart = [...cart];
    const search = newCart.find((element) => element.id === item.id);
    if (search) {
      search.quantity++;
    }
    setCart(newCart);
    console.log(newCart);
  };

  return (
    <aside>
      <h2>Valider mon panier</h2>

      <div>
        {cart.map((item, index) => {
          return (
            <div key={item.id}>
              <button
                onClick={() => {
                  handleDecrement(item, index);
                }}
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button
                onClick={() => {
                  handleIncrement(item);
                }}
              >
                +
              </button>
              <p>{item.name}</p>

              <p>
                {((item.price * item.quantity) / 100)
                  .toFixed(2)
                  .split(".")
                  .join(",")}{" "}
                €
              </p>
            </div>
          );
        })}
      </div>

      <div>
        <div>
          <p>Sous-total</p>
          <p>{(subTotal / 100).toFixed(2).split(".").join(",")} €</p>
        </div>

        <div>
          <p>Frais de livraison</p>
          <p>{fixedDeliveryPrice} €</p>
        </div>
      </div>

      <div>
        <p>Total</p>
        <p>
          {((subTotal + deliveryPrice) / 100).toFixed(2).split(".").join(",")} €
        </p>
      </div>
    </aside>
  );
};

export default Cart;

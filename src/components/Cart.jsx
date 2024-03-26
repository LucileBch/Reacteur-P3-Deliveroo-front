const Cart = ({ cart, setCart }) => {
  const deliveryPrice = 2.5;

  const handleDecrement = (item, index) => {
    const newCart = [...cart];

    const search = newCart.find((element) => element.id === item.id);

    if (search && search.quantity === 1) {
      newCart.splice(index, 1);
    } else if (search) {
      search.quantity--;
      search.price = search.quantity * search.originPrice;
    }
    setCart(newCart);
  };

  const handleIncrement = (item) => {
    const newCart = [...cart];
    const search = newCart.find((element) => element.id === item.id);
    if (search) {
      search.quantity++;
      search.price = search.quantity * search.originPrice;
    }
    setCart(newCart);
  };

  return (
    <aside>
      <h2>Valider mon panier</h2>

      <div>
        {cart.map((item, index) => {
          return (
            <div>
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

              {item.quantity === 1 ? (
                <p>{`${item.originPrice} €`}</p>
              ) : (
                <p>{`${item.price} €`}</p>
              )}
            </div>
          );
        })}
      </div>

      <div>
        <div>
          <p>Sous-total</p>
          <p>SOUS TOTAL A CALCULER</p>
        </div>

        <div>
          <p>Frais de livraison</p>
          <p>{`${deliveryPrice} €`}</p>
        </div>
      </div>

      <div>
        <p>Total</p>
        <p>TOTAL A CALCULER</p>
      </div>
    </aside>
  );
};

export default Cart;

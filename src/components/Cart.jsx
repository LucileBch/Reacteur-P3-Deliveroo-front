const Cart = ({ itemInCart, subtotal }) => {
  let quantity = 1;
  let deliveryPrice = 2.5;

  console.log("ICIIIII ====", itemInCart);

  return (
    <aside>
      <h2>Valider mon panier</h2>

      <div>
        {itemInCart.map((item) => {
          console.log(item);
          return (
            <div>
              <button>-</button>
              <p>{quantity}</p>
              <button>+</button>
              <p>{item.name}</p>
              <p>{`${item.price.fractional / 100} €`}</p>
            </div>
          );
        })}
      </div>

      <div>
        <div>
          <p>Sous-total</p>
          <p>{`${subtotal} €`}</p>
        </div>

        <div>
          <p>Frais de livraison</p>
          <p>{`${deliveryPrice} €`}</p>
        </div>
      </div>

      <div>
        <p>Total</p>
        <p>{`${subtotal + deliveryPrice} €`}</p>
      </div>
    </aside>
  );
};

export default Cart;

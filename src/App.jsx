// ---------- APP ----------
// Import packages
import axios from "axios";
import { useState, useEffect } from "react";

// Import components
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Category from "./components/Category";
import Cart from "./components/Cart";

// Import styles
import "./App.css";

const App = () => {
  // Get datas with useEffect
  // Check server response
  //    If waiting for data : display loading
  //    Else display components
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [itemInCart, setItemInCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:3200/`);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <main>
        {isLoading === true ? (
          "Loading"
        ) : (
          <>
            <Presentation datas={data} />
            <section className="meal-section">
              {data.meta.categories.map((category) => {
                return (
                  <Category
                    key={category.id}
                    category={category}
                    items={data.items}
                    itemInCart={itemInCart}
                    setItemInCart={setItemInCart}
                    subtotal={subtotal}
                    setSubtotal={setSubtotal}
                  />
                );
              })}
              <Cart itemInCart={itemInCart} subtotal={subtotal} />
            </section>
          </>
        )}
      </main>
    </>
  );
};

export default App;

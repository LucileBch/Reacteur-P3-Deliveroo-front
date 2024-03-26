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

  const [cart, setCart] = useState([]);

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
            <Cart cart={cart} setCart={setCart} />
            <section className="meal-section">
              {data.meta.categories.map((category) => {
                return (
                  <Category
                    key={category.id}
                    category={category}
                    items={data.items}
                    cart={cart}
                    setCart={setCart}
                  />
                );
              })}
            </section>
          </>
        )}
      </main>
    </>
  );
};

export default App;

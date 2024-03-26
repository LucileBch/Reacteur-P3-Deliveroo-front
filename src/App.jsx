// ---------- APP ----------
// Import packages
import axios from "axios";
import { useState, useEffect } from "react";

// Import components
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Category from "./components/Category";

// Import style
import "./App.css";

const App = () => {
  // Get datas
  // Check server response
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:3200/`);
    setData(response.data);
    setIsLoading(false);
  };
  // rajouter try/catch
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div>
        {isLoading === true ? (
          "Loading"
        ) : (
          <main>
            <Presentation datas={data} />
            <section className="meal-section">
              {data.meta.categories.map((category) => {
                return (
                  <Category
                    key={category.id}
                    category={category}
                    items={data.items}
                  />
                );
              })}
            </section>
          </main>
        )}
      </div>
    </>
  );
};

export default App;

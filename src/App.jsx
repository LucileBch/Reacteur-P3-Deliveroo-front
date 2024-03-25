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

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3200/`);
      setData(response.data);
      // console.log(response.data);
      setIsLoading(false);
    };
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
            <Presentation datas={data.restaurant} />
            <section className="meal-section">
              {data.categories.map((category) => {
                return <Category key={category.name} category={category} />;
              })}
            </section>
          </main>
        )}
      </div>
    </>
  );
};

export default App;

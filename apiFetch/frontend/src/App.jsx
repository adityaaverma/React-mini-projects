import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [val, setVal] = useState("");
  useEffect(() => {
    const controller = new AbortController()
    ;(async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/products?search=" + val, {
          signal: controller.signal,
        });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if(axios.isCancel(error)){
          log('Request cancelled', error.message)
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();

    // return () => {
    //   second
    // }
  }, [val]);
  if (error) {
    return <h2>An error occurred</h2>; // error handling code goes here. For example, showing a message to the user.
  }
  if (loading) {
    return <h2>Loading...</h2>; // loading spinner or progress bar goes here.
  }
  return (
    <>
      <h1>API in React</h1>
      <input
        type="text"
        placeholder="product name"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <h2>The number of Proucts are :{products.length}</h2>
    </>
  );
}

export default App;

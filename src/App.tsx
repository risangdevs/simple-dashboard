import { useState } from "react";
import { Layout } from "./layout/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Layout>
        <p>lalala</p>
      </Layout>
    </div>
  );
}

export default App;

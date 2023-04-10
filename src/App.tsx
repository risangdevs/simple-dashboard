import { useState } from "react";
import { Layout } from "./layout/Layout";
import { Content } from "./layout/Content";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#151A2E]">
      <Layout>
        <Content title="Marketing Dashboard" breadcrumb="Home / Dashboard" />
      </Layout>
    </div>
  );
}

export default App;

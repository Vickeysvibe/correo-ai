import "./App.css";
import { Chat } from "./pages/Chat";
import { Layout } from "./pages/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

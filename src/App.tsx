import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./pages/posts";
import AuthPage from "./pages/auth";

function App() {
  return (
    <div className="h-full bg-base-800">
      <BrowserRouter>
        <Routes>
          <Route element={<AuthPage />} path="/auth" />
          <Route element={<Posts />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

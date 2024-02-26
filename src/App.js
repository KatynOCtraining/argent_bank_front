import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../src/pages/Index/Index";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />

          <Route path="*" element={<div>Error404</div>} />
        </Routes>
      </Router>
    </>
  );
}

import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Onboarding 🌅</h1>} />
      <Route path="/routine" element={<h1>Child View ⭐</h1>} />
      <Route path="/setup" element={<h1>Parent Setup ⚙️</h1>} />
    </Routes>
  );
};

import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizzas />
      <Pizzas />
      <Pizzas />
      <Pizzas />
    </main>
  );
}
function Footer() {
  return (
    <div className="footer">
      <footer>{new Date().toLocaleTimeString()} We are open Now</footer>
    </div>
  );
}

function Pizzas() {
  return (
    <div className="pizza">
      <img src="pizzas/spinaci.jpg" alt="pizza spinaci " />
      <h3>Pizza spinaci</h3>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

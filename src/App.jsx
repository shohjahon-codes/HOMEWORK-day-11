import "./App.css";
import Button from "./components/button";
import { Cards } from "./components/card";
import Navbar from "./layout/header";

function App() {
  return (
    <div>
      <Navbar />
      <section className="bg-[url('./assets/bg.png')] bg-cover bg-center bg-no-repeat h-screen">
        <div className="pt-[40px] bg-opacity-50  flex items-center gap-[20px] justify-center">
          <Button text="Discover" />
          <Button text="Animation" />
          <Button text="Branding" />
          <Button text="Typography" />
          <Button text="Product" />
          <Button text="Design" />
          <Button text="Print" />
          <Button text="Animation" />
        </div>
        <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
          <h1 className="text-4xl w-[470px] font-bold text-white">
            Explore the world's leading design portfolios
          </h1>
          <p className="text-lg w-[670px] text-white mt-4">
            Millions of designers and agencies around the world showcase their
            portfolio work on Dribbble - the home to the world’s best design and
            creative professionals.
          </p>
          <div className="flex items-center mt-[40px] bg-gray-100 rounded-full px-4 py-2 shadow-md w-80">
            <box-icon name="search" color="gray" size="24px"></box-icon>
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none ml-2 w-full text-gray-700"
            />
          </div>
        </div>
      </section>
      <section>
        <Cards />
      </section>
    </div>
  );
}

export default App;

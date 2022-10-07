import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Page/Container/Components/Footer";
import ProductDetails from "./Page/Container/Components/ProductDetails";
import Header from "./Page/Container/Header/Header";
import CreatePage from "./Page/CreatePage/CreatePage";
import Edit from "./Page/EditPage/Edit";
import Explores from "./Page/Explors/Explores";
import Home from "./Page/Home/Home";
import Products from "./Page/Home/Products/Products";
import NotFound from "./Page/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/product" element={<Products />}></Route>
        <Route path="/create" element={<CreatePage />}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
        <Route path="/explore" element={<Explores />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

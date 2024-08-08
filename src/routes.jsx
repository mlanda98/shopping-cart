import App from "./App";
import ShoppingItems from "./components/ShoppingItems"
import Checkout from "./components/Checkout"

const routes = [
  {
    path: "/",
    element: <App />
  },
  {
    path: "/shopping",
    element: <ShoppingItems/>
  },
  {
    path: "/checkout",
    element: <Checkout/>
  }
];

export default routes;

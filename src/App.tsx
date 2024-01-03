import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import "./App.css";

import { FaCalendar } from "react-icons/fa";
import Like from "./components/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Expandabletext from "./components/Expandabletext";
import Form from "./components/Form";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
  const items = ["New York", "Los Angeles", "San Francisco"];
  const [alertVisible, setAlertVisibility] = useState(true);

  return (
    <div>
      <Form />
      <Expandabletext maxChars={10}>hello world</Expandabletext>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      <Like onClick={() => console.log("clicked")} />
      <FaCalendar color="red" size={40} />
      <ListGroup
        items={items}
        heading="Miami"
        onSelectItem={() => items}
      ></ListGroup>

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;

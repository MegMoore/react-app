import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import "./App.css";

import { FaCalendar } from "react-icons/fa";
import Like from "./components/Like";

function App() {
  const items = ["New York", "Los Angeles", "San Francisco"];
  const [alertVisible, setAlertVisibility] = useState(true);

  return (
    <div>
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

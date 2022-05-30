import "./App.css";
import NavBar from './components/NavBar/NavBar';
import Modal from "./components/Modal/Modal";
import { useState } from 'react';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  const [open, setOpen] = useState(false)

  const handClose = () => {
    setOpen(false)
  }

  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer/> */}
      {/* <button onClick={() =>setOpen(true)}>Abrir Modal</button>
      <Modal handClose={handClose} open={open}>
        <h1>hola</h1>
      </Modal> */}
      <ItemDetailContainer/>
    </div>
    
  );
}

export default App;

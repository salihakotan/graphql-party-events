import { Route, Routes } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import styles from "./styles.module.css"
import Home from "../../pages/Home";
import Event from "../../pages/Event";

function App() {
  return (
    <div className={styles.container}>
        <HeaderMenu/>

        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/event/:id' element={<Event/>}/>
        </Routes>

    </div>
  );
}

export default App;

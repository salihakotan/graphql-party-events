import { Route, Routes } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import styles from "./styles.module.css";
import Home from "../../pages/Home";
import Event from "../../pages/Event";
import { Col, Row } from "antd";

function App() {
  return (
    <Row className={styles.container}>
      <Col span={16}>
        <HeaderMenu />

      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/:id" element={<Event />} />
        </Routes>
        </div>
      </Col>
    </Row>
  );
}

export default App;

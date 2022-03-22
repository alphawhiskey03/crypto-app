import "./App.less";
import { Layout, Typography, Space } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./component";
import {
  Exchange,
  News,
  Cryptocurrencies,
  CryptoDetails,
  HomePage,
} from "./pages";
import { Link } from "react-router-dom";
import NewChart from "./pages/newChart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navbar">
          <NavBar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />
                <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                <Route path="/exchange" element={<Exchange />} />
                <Route path="/news" element={<News />} />
                <Route path="/charts" element={<NewChart />} />
              </Routes>
            </div>
          </Layout>
          <div className="footer">
            <Typography.Title
              level={5}
              style={{ color: "#888", textAlign: "center" }}
            >
              Crypton
              <br />
              All rights reserved
              <br />
              <Space>
                <Link to="/">Home</Link>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                <Link to="/news">News</Link>
              </Space>
            </Typography.Title>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar, Select } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
  BuildOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";
import { useDispatch, useSelector } from "react-redux";
import { useGetExchangeRatesQuery } from "../services/exchangeRateApi";
import { setBaseCurrency as setMainBaseCurrency } from "../features/currencySlice";
const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);
  const { data: echangeRatesList, isFetching: isFetchExchanges } =
    useGetExchangeRatesQuery();
  const [echangeRates, setExchanges] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState({ sym: "USD", val: 1 });
  const dispatch = useDispatch();
  const { baseCurrencySym } = useSelector((state) => state.baseCurrency);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (screenSize < 768) setActiveMenu(false);
    else setActiveMenu(true);
  }, [screenSize]);
  useEffect(() => {
    if (echangeRatesList && echangeRatesList.hasOwnProperty("results")) {
      Object.entries(echangeRatesList?.results).forEach((key) => {
        setExchanges((exchange) => [...exchange, { sym: key[0], val: key[1] }]);
      });
    }
  }, [echangeRatesList]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cyrpton</Link>
        </Typography.Title>

        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu>
          <Menu.Item icon={<HomeOutlined />} key={1}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />} key={2}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MenuOutlined />} key={3}>
            <Link to="/exchange">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BuildOutlined />} key={4}>
            <Link to="/news">News</Link>
          </Menu.Item>
          {!isFetchExchanges && echangeRates && (
            <Menu.Item
              icon={<MoneyCollectOutlined />}
              key={5}
              style={{ backgroundColor: "inherit" }}
            >
              <select
                style={{ width: "100px", color: "black" }}
                onChange={(e) => {
                  dispatch(
                    setMainBaseCurrency(
                      echangeRates.find(
                        (echangeRate) => echangeRate.sym == e.target.value
                      )
                    )
                  );
                }}
                value={baseCurrencySym}
              >
                <option selected disabled value="">
                  Base currency
                </option>
                {echangeRates.map((rate) => (
                  <option
                    selected={rate.sym === baseCurrency.sym}
                    t
                    value={rate.sym}
                  >
                    {rate.sym}
                  </option>
                ))}
              </select>
              {/* <select>
                <option value="hi">Hi</option>
                <option value="hello">hello</option>
              </select> */}
            </Menu.Item>
          )}
        </Menu>
      )}
    </div>
  );
};

export default NavBar;

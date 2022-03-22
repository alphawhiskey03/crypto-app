import React, { useEffect, useState } from "react";
import { Collapse, Divider } from "antd";
import axios from "axios";
import Loader from "../component/loader";
import millify from "millify";

const Exchange = () => {
  const { Panel } = Collapse;
  const [exchanges, setExchanges] = useState([]);

  const options = {
    method: "GET",
    url: "https://coingecko.p.rapidapi.com/exchanges",
    headers: {
      "x-rapidapi-host": "coingecko.p.rapidapi.com",
      "x-rapidapi-key": "1b4e857629msh1efa9de18a16e42p15dd0ajsn97dd06722ee8",
    },
  };
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      const data = await axios.request(options);
      setExchanges(data.data);
      setLoader(false);
    };
    fetchData();
  }, []);

  if (loader) return <Loader />;

  return (
    <>
      <Collapse defaultActiveKey={1}>
        {exchanges && (
          <>
            {exchanges.map((exchange, i) => (
              <Panel header={`${i + 1}. ${exchange.name}`} key={i + 1}>
                <img src={exchange.image} alt={exchange.name} />
                <p style={{ marginTop: 10 }}>
                  Home page : <a href={exchange.url}>{exchange.url}</a>
                </p>
                <Divider />
                <p>Country : {exchange.country}</p>
                <p>Year of establishment : {exchange.year_established}</p>
                <p>Trust score : {exchange.trust_score}</p>
                <p>Trust score rank : {exchange.trust_score_rank}</p>
                <p>
                  Trade volume 24h BTC :{" "}
                  {millify(exchange.trade_volume_24h_btc)}
                </p>
              </Panel>
            ))}
          </>
        )}
      </Collapse>
    </>
  );
};

export default Exchange;

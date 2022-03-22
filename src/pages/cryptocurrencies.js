import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Select, Option } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useSelector } from "react-redux";
import Loader from "../component/loader";
const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { baseCurrencySym, baseCurrencyVal } = useSelector(
    (state) => state.baseCurrency
  );
  const { data: cryptosList, isFetching: isFetchingCryptos } =
    useGetCryptosQuery(count);

  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const filteredCryptos = cryptosList?.data?.coins.filter((crypto) =>
      crypto.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setCryptos(filteredCryptos);
  }, [cryptosList, searchText]);
  if (isFetchingCryptos) return <Loader />;

  return (
    <>
      <div className="search-crypto">
        {!simplified && (
          <Input
            type="text"
            placeholder="Search here..."
            onChange={(e) => setSearchText(e.target.value)}
            // style={{ width: "300px" }}
          />
        )}
        {/* </Input.Group> */}
      </div>

      <Row gutter={[18, 18]} className="crypto-card-container">
        {!isFetchingCryptos ? (
          cryptos?.map((crypto) => (
            <Col
              xs={24}
              sm={12}
              lg={6}
              className="crypto-card"
              key={crypto.uuid}
            >
              <Link to={`/crypto/${crypto.uuid}`}>
                <Card
                  title={`${crypto.rank} . ${crypto.name}`}
                  extra={<img className="crypto-image" src={crypto.iconUrl} />}
                  hoverable
                  style={{ borderRadius: 15 }}
                >
                  <p>
                    Price:
                    {` ${baseCurrencySym} ${millify(
                      baseCurrencyVal * crypto.price
                    )}`}
                  </p>
                  <p>Market Cap: {millify(crypto?.marketCap)}</p>
                  <p>
                    Daily change: {millify(crypto.change ? crypto.change : 0)}
                  </p>
                </Card>
              </Link>
            </Col>
          ))
        ) : (
          <Loader />
        )}
      </Row>
    </>
  );
};

export default Cryptocurrencies;

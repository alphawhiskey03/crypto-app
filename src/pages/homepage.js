import millify from "millify";
import { Typography, Row, Col, Statistic, Divider } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, News } from "./";
import Loader from "../component/loader";
const { Title } = Typography;
const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  if (isFetching) return <Loader />;
  return (
    <>
      <Title level={2} className={"heading"}>
        Global crypto stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="total 24th volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <Divider />
      <div className="home-heading-contianer">
        <Title level={2} className="home-title">
          Top Cryptocurrencies
        </Title>
        <Title level={5} className="show-more">
          <Link to="/cryptocurrencies"> Show All</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <Divider />
      <div className="home-heading-contianer">
        <Title level={2} className="home-title">
          Latest news
        </Title>
        <Title level={5} className="show-more">
          <Link to="/cryptocurrencies"> Show All</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default HomePage;

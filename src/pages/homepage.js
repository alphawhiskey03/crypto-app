import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;
const HomePage = () => {
  return (
    <>
      <Title level={2} className={"heading"}>
        Global crypto stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="total Market Cap" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="total 24th volume" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="total Markets" value="5" />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;

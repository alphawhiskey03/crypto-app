import React from "react";
import { Col, Row, Typography } from "antd";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";

const { Title } = Typography;

const LineChart = ({
  coinHistory,
  currentPrice,
  coinName,
  currencySym,
  currencyVal,
}) => {
  const data = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    data.push({
      date: new Date(
        coinHistory?.data?.history[i]?.timestamp
      ).toLocaleDateString(),
      value: Number(currencyVal * coinHistory?.data?.history[i]?.price),
    });
  }

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart{" "}
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            Change: {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: {currencySym + " " + currentPrice}
          </Title>
        </Col>
        {data.length > 10 && (
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff2d2d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                dataKey="value"
                stroke="#ff2d2d"
                fillOpacity={1}
                fill="url(#colorUv)"
              ></Area>
              <XAxis dataKey="date" />
              <YAxis dataKey="value" />
              <Tooltip />

              <CartesianGrid />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </Row>
    </>
  );
};

export default LineChart;

import {useState} from "react";
import {useGetCryptoNewsQuery} from "../services/newsApi";
import {Typography, Row, Col, Avatar, Card, Select} from "antd";
import moment from "moment";
import {useGetCryptosQuery} from "../services/cryptoApi";
import Loader from "../component/loader";

const News = ({simplified}) => {
  const {data} = useGetCryptosQuery(100);
  const [newsCategory, setNewsCategory] = useState("cryptocurrency");

  const {data: cryptoNews} = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count: simplified ? 6 : 12,
  });

  const image =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

  if (!cryptoNews?.value) return <Loader />;
  const {Title, Text} = Typography;
  const {Option} = Select;
  return (
    <>
      <Row gutter={[18, 18]} align="middle">
        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Select a category"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              style={{width: "40vw"}}
            >
              {data?.data?.coins.map((coin) => (
                <Option key={coin.name} value={coin.name}>
                  {coin.name}
                </Option>
              ))}
            </Select>
          </Col>
        )}
        {cryptoNews.value.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card" style={{borderRadius: 15}}>
              <a href={news.url} target="_blank">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {news.name}
                  </Title>
                  <img
                    src={news?.image?.thumbnail?.contentUrl || image}
                    alt="news"
                    style={{maxWidth: "200px", maxHeight: "100px"}}
                  />
                </div>
                <p>
                  {news.descript > 100
                    ? `${news.description.substring(0, 100)}...`
                    : news.description}
                </p>
              </a>

              <div className="provider-cointainer">
                <div style={{paddingBottom: 5}}>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl || image
                    }
                    alt=""
                  />

                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                </div>
                <Text style={{fontSize: 12, color: "white"}}>
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;

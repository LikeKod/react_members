import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Layout, List, Statistic, Tag, Typography } from "antd";
import { useContext } from "react";
import CryptoContext from "../../context/crypto-context";
import { capitalize } from "../../utils";
import CheckboxElem from "../Checkbox";

const siderStyle = {
  padding: "1rem",
};

export default function AppSider() {
  const { assets } = useContext(CryptoContext);
  const { filters } = useContext(CryptoContext);

  let test = [];

  // console.log(filters.indexOf(assets[0].id))

  return (
    <Layout.Sider width="25%" style={siderStyle}>
      <CheckboxElem />
      {assets.map((asset) => (
        <Card key={asset.id} style={{ marginBottom: "1rem" }}>
          <Statistic
            title={capitalize(asset.id)}
            value={asset.totalAmount}
            precision={2}
            valueStyle={{ color: asset.grow ? "#3f8600" : "#cf1322" }}
            prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
            suffix="$"
          />
          <List
            size="small"
            dataSource={[
              {
                title: "Total profit",
                value: asset.totalProfit,
                withTag: true,
              },
              { title: "Asset Amount", value: asset.amount, isPlain: true },
              //   { title: "Differenc", value: asset.growPercent },
            ]}
            renderItem={(item) => {
              // test.indexOf(item.id) !== -1 ? (
                <List.Item key={item.id}>
                  <span>{item.title}</span>
                  <span>
                    {item.withTag && (
                      <Tag color={asset.grow ? "green" : "red"}>
                        {asset.growPercent}%
                      </Tag>
                    )}
                    {item.isPlain && item.value}
                    {!item.isPlain && (
                      <Typography.Text type={asset.grow ? "success" : "danger"}>
                        {item.value.toFixed(2)}$
                      </Typography.Text>
                    )}
                  </span>
                </List.Item>
              // ) : null;
            }}
          />
        </Card>
      ))}
    </Layout.Sider>
  );
}

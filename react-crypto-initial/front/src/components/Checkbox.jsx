import { Checkbox, Col, Row } from "antd";
import { useContext } from "react";
import CryptoContext from "../context/crypto-context";

export default function CheckboxElem() {
  const { assets, setAssets } = useContext(CryptoContext);

  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);

   
  };

  return (
    <Checkbox.Group
      style={{
        width: "100%",
      }}
      onChange={onChange}
    >
      <Row>
        {assets.map((asset) => (
          <Col span={8}>
            <Checkbox style={{ color: "#fff" }} value={asset.id}>
              {asset.id}
            </Checkbox>
          </Col>
        ))}
      </Row>
    </Checkbox.Group>
  );
}

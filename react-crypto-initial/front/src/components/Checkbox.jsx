import { useContext, useEffect, useState } from "react";
import CryptoContext, { useCrypto } from "../context/crypto-context";

export default function CheckboxElem() {
  // const { assets, setAssets } = useContext(CryptoContext);
  const { assets, setAssets, addAsset } = useCrypto();
  const [selectedAssets, setSelectedAssets] = useState([]);
  const { filters, setFilters } = useContext(CryptoContext);

  // useEffect(() => {
  //   if(selectedAssets.length===0){
  //     setAssets(assets)
  //   } else {
  //     updateAssets(selectedAssets)
  //   }
  // },[selectedAssets])

  // const onChange = (checkedValues) => {
  //   console.log("checked = ", checkedValues);

  //   setFilters(checkedValues)
  //   console.log("Filters = ", checkedValues);
  // };
  useEffect(() => {
    if (selectedAssets.length === 0) {
      setAssets(assets);
    } else {
      const filteredAssets = assets.filter((asset) =>
        selectedAssets.includes(asset.id)
      );
      setAssets(filteredAssets);
    }
  }, [selectedAssets]);

  const handleCheckboxChange = (e) => {
    const assetName = e.target.value;
    const isChecked = e.target.checked;

    setSelectedAssets((prev) => {
      if (isChecked) {
        return [...prev, assetName];
      } else {
        return prev.filter((id) => id !== assetName);
      }
    });
  };

  // const updateAssets = (selected) => {
  //   if (selected.length === 0) {
  //     setAssets([]);
  //   } else {
  //     const filteredAssets = assets.filter((asset) =>
  //       selected.includes(asset.id)
  //     );
  //     setAssets(filteredAssets);
  //   }
  // };

  return (
    // <Checkbox.Group
    //   style={{
    //     width: "100%",
    //   }}
    //   onChange={handleCheckboxChange}

    // >
    //   <Row>
    //     {assets.map((asset) => (
    //       <Col span={8}>
    //         <Checkbox checked={assets.some((a) => a.name === asset.id)} style={{ color: "#fff" }} value={asset.id}>
    //           {asset.id}
    //         </Checkbox>
    //       </Col>
    //     ))}
    //   </Row>
    // </Checkbox.Group>
    <div>
      {assets.map((asset) => (
        <label key={asset.id}>
          <input
            type="checkbox"
            value={asset.id}
            onChange={handleCheckboxChange}
            checked={selectedAssets.includes(asset.id)}
          />
          {asset.id}
        </label>
      ))}
    </div>
  );
}

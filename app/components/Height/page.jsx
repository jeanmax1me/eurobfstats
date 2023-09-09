import React from "react";
import {RadioGroup, Radio} from "@nextui-org/react";
import useSharedState from "../useSharedState";

export default function App() {
    const {minHeight, setMinHeight}  = useSharedState();

    const handleMinHeightChange = (value) => {
        setMinHeight(value);
      };

  return (
    <RadioGroup
      label="Select his minimum height"
      orientation="horizontal"
      className="custom-radio-group bg-[#E7F1FE] rounded-2xl p-3"
      onChange={handleMinHeightChange}
    >
      <Radio value="160">160cm</Radio>
      <Radio value="165">165cm</Radio>
      <Radio value="170">170cm</Radio>
      <Radio value="175">175cm</Radio>
      <Radio value="180">180cm</Radio>
      <Radio value="185">185cm</Radio>
      <Radio value="190">190cm</Radio>
    </RadioGroup>
  );
}

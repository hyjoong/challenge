import React from "react";
import Select from "components/atoms/Select";
import Option from "components/atoms/Option";

interface Props {
  optionList: string[];
}

const SelectBox = ({ optionList }: Props) => {
  return (
    <Select>
      {optionList.map((item, index) => (
        <Option key={index}>{item}</Option>
      ))}
    </Select>
  );
};

export default SelectBox;

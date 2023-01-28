import React from "react";

type Props = {
  number: number;
};

const FomatNumber = ({ number }: Props) => {
  return <div>{ number.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>;
};

export default FomatNumber;

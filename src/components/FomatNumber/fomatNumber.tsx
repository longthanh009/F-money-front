import React from "react";

type Props = {
  number: number;
};

const FomatNumber = ({ number }: Props) => {
  return <div>{new Intl.NumberFormat("de-DE").format(number)} VND</div>;
};

export default FomatNumber;

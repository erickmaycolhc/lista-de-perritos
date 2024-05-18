import React from "react";
type Prop = {
  name: string;
  value: string;
  classColor: string;
};
export const LineDescription = ({ name, value, classColor }: Prop) => {
  return (
    <div className={classColor}>
      <div className="peso">
        <div className="color-peso-2">{name}</div>
        <div className="estatura-promedio-2">{value}</div>
      </div>
    </div>
  );
};

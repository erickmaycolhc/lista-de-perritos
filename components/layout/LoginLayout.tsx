import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
};
const LoginLayout = ({ children }: Props) => {
  return (
    <div className="bg-gris">
      
        {children}
      
    </div>
  );
};

export default LoginLayout;

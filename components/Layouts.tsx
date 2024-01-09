import React from "react";

type Props = {
  title: string;
  children:
  | React.ReactNode
  | React.ReactNode[]
  | string
  | string[];
};

const Layouts: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <div className="flex min-h-svh justify-center items-center">
        {children}
      </div>
    </>
  )
}

export default Layouts
import React from "react";

const Container = (props: any) => {
  return (
    <div className={`max-w-[1500px] mx-auto px-10 w-full ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Container;

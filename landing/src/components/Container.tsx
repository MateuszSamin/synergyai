import React from "react";

type Props = React.PropsWithChildren<{
  className?: string;
}>;

const Container = (props: Props) => {
  return (
    <div className={`max-w-[1500px] mx-auto px-10 w-full ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Container;

import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full flex justify-center dark:bg-slate-900">
      <div className="max-w-[1200px] w-[100%]">{children}</div>
    </div>
  );
};

export default Container;

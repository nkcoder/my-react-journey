import { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("useEffect is called.");
  });

  return <div>Basic Effect</div>;
};

export default BasicEffect;

import PropDrillingB from "./PropDrillingB";

// prop drilling is the process of passing data from one component to another component through other components in between
const PropDrillingA = () => {
  const name = "Daniel";

  return (
    <div>
      <PropDrillingB name={name} />
    </div>
  );
};

export default PropDrillingA;

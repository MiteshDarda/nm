import IteamCard from "../itemCard/IteamCard";
import Box from "../utility/Box";
import data from "../../API/data";

const Body = (props) => {
  // console.log(props);
  return (
    <Box
      className="flex-row"
      style={{ justifyContent: "space-around", flexWrap: "wrap" }}
    >
      {data.map((d) => {
        return (
          <IteamCard
            quantities={props.quantities}
            setQuantities={props.setQuantities}
            {...d}
            key={d.unique_id}
          />
        );
      })}
    </Box>
  );
};

export default Body;

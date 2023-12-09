import { useState } from "react";
import { Slider } from "@nextui-org/react";

const Panel = () => {
  const [height, setHeight] = useState(100);
  return (
    <div className="w-[90vw] min-h-[300px] p-3 m-3 rounded-md shadow-lg dark:shadow-none md:w-[600px] bg-white dark:bg-fg">
      Panel
      <input type="hidden" value={height} id="height-slider" />
      <Slider
        label="Change Volume"
        color="foreground"
        size="sm"
        minValue={10}
        id="height-slider"
        marks={[
          {
            value: 20,
            label: "20%",
          },
          {
            value: 50,
            label: "50%",
          },
          {
            value: 80,
            label: "80%",
          },
        ]}
        value={height}
        onChange={setHeight}
        className="max-w-md"
      />
      <input type="text" name="" id="count" value={100} />
    </div>
  );
};

export default Panel;

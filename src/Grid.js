import React from "react";
import HexagonGrid from "./hexagongrid.js";
import times from "lodash/times";

const HexGridDemo = () => {
  const getHexProps = (hexagon) => {
    return {
      style: {
        fill: "#00E998",
        stroke: "white",
      },
      onClick: () => alert(`Hexagon n.${hexagon} has been clicked`),
    };
  };

  const renderHexagonContent = (hexagon) => {
    return (
      <text
        x="50%"
        y="50%"
        fontSize={100}
        fontWeight="lighter"
        style={{ fill: "white" }}
        textAnchor="middle"
      >
        {hexagon}
      </text>
    );
  };

  let hexagons = times(120, (id) => id);

  return (
    <HexagonGrid
      gridWidth={750}
      gridHeight={750}
      hexagons={hexagons}
      hexProps={getHexProps}
      renderHexagonContent={renderHexagonContent}
    />
  );
};

export default HexGridDemo;

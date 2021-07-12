import React from "react";
import { Box, styled } from "@material-ui/core";
import UseMousePosition from "../hook/useMousePosition";
import useCounterBounce from "../hook/useCounterBounce";

const Cursor = styled(Box)(({ theme }) => ({
  width: "400px",
  height: "400px",
  position: "fixed",
  zIndex: 50,
  backdropFilter: "blur(0px)",
  transform: "translate(-50%,-50%)",
}));


export default function CustomeCursor() {
  const mousePosition = UseMousePosition(0);

  return (
    <>
 
      <Cursor style={{ top: mousePosition.y, left: mousePosition.x }}>
        <svg width="100%" height="100%">
          <circle cx="200" cy="200" r="200" fill="url('#myGradient')" />
        </svg>
      </Cursor>
    </>
  );
}

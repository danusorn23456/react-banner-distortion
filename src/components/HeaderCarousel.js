import React from "react";
import {
  Box,
  Grid,
  Container,
  Typography,
  Button,
  CardMedia,
  IconButton,
} from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { styled } from "@material-ui/core/styles";
import WaterEffect from "./WaterEffect";
import weedSource from "../assets/weed.png";

const WeedWrapper = styled(Box)(({ theme }) => ({
  zIndex:'10',
  position:'absolute',
  bottom:'-10%',
  right:0,
  width:'600px',
  height:'600px',
}));

const RoundedButton = styled(Button)(({ theme }) => ({
  borderRadius: "100px",
}));

export default function HeaderCarousel() {
  return (
    <>
      <Box>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={6} py={28}>
              <Typography
                color="secondary.contrastText"
                variant="h2"
                fontWeight="bold"
                textAlign="left"
              >
                What is Lorem Ipsum?
              </Typography>
              <br />
              <Typography
                color="black"
                component="p"
                fontSize={20}
                textAlign="left"
              >
                orem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                velit tortor, consequat nec ultrices sit amet, porttitor vitae
                velit. Nam efficitur ante viverra dictum lobortis. Cras placerat
                nisl in rhoncus gravida.{" "}
              </Typography>
              <Box display="flex" py={6} justifyContent="flex-start">
                <RoundedButton size="large" variant="outlined" shape="round">
                  Shop now
                </RoundedButton>
              </Box>
            </Grid>
            <Grid item xs={23} sm={6} lg={4} ml="auto" position="relative">
              <WeedWrapper>
                <WaterEffect image={weedSource} />
              </WeedWrapper>
              <Box
                position="absolute"
                right="3%"
                top="3%"
                width="460px"
                height="460px"
                bgcolor="primary.lighter"
                borderRadius="100%"
              ></Box>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <IconButton>
            <FiberManualRecordIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <FiberManualRecordIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <FiberManualRecordIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <FiberManualRecordIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <FiberManualRecordIcon fontSize="small" />
          </IconButton>
        </Container>
      </Box>
    </>
  );
}

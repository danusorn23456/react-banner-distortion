import React from "react";
import { Box, Container, List, ListItem ,IconButton } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const CategoryContainer= styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems:'center'
}));
  

const CategoryList = styled(List)(({ theme }) => ({
  flexGrow:1,
  display: "flex",
  flexDirection: "row",
  padding: `${theme.spacing(16)} 0`,
}));

const CategoryBox = styled(Box)(({ theme }) => ({
  width: "8rem",
  height: "8rem",
  backgroundColor: theme.palette.primary.light,
  border: `1px solid ${theme.palette.primary.light}`,
  boxShadow: theme.shadows[2],
  borderRadius: theme.spacing(2),
}));

export default function Category() {
  return (
    <Box>
      <CategoryContainer>
         <IconButton aria-label="previous">
          <ArrowBackIosIcon fontSize="small"/>
        </IconButton>
        <CategoryList>
          <ListItem>
            <CategoryBox></CategoryBox>
          </ListItem>
          <ListItem>
            <CategoryBox></CategoryBox>
          </ListItem>
          <ListItem>
            <CategoryBox></CategoryBox>
          </ListItem>
          <ListItem>
            <CategoryBox></CategoryBox>
          </ListItem>
          <ListItem>
            <CategoryBox></CategoryBox>
          </ListItem>
          <ListItem>
            <CategoryBox></CategoryBox>
          </ListItem>
        </CategoryList>
        <IconButton aria-label="previous">
          <ArrowForwardIosIcon fontSize="small"/>
        </IconButton>
      </CategoryContainer>
    </Box>
  );
}

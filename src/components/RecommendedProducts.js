import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Chip,
  styled,
} from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/Bookmark";

// #region styled
const ProductCard = styled(Card)(({ theme }) => ({
  "& .MuiCardMedia-img": {
    height: 300,
  },
}));

const HeaderContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const ProductName = styled(Typography)(({theme})=>({
  textAlign:"left",
  variant:"h6",
  component:"h4",
}))

const Badge = styled(Typography)(({theme})=>({
  padding:theme.spacing(0.5,1),
  border:`1px solid ${theme.palette.info.light}`,
  color:theme.palette.info.main,
  borderRadius:'4px'
}))

const ButtonForViewAll = styled(Button)(({ theme }) => {});
// #endregion styled

export default function RecommendedProducts() {
  const [recommendList, setRecommendList] = useState([]);

  useEffect(() => {
    setRecommendList([
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
    ]);
  }, []);

  return (
    <Box>
      <HeaderContainer>
        <Box display="inline-flex" alignItems="flex-end">
          <BookmarkIcon />
          <Typography textAlign="left" variant="h5" component="h3">
            สินค้าแนะนำ
          </Typography>
          <Typography textAlign="left" component="p" lineHeight="1.6rem">
            ทั้งหมด 63 รายการ
          </Typography>
        </Box>
        <ButtonForViewAll>ดูทั้งหมด</ButtonForViewAll>
      </HeaderContainer>
      <br />
      <Container>
        <Grid container justifyContent="center" spacing={7}>
          {recommendList &&
            recommendList.map((item) => (
              <Grid key={item.id} item xs={12} sm={6} md={4}>
                <ProductCard>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image="https://images.unsplash.com/photo-1625982973596-931937e35668?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Box display="flex" justifyContent="space-between">
                        <ProductName component="h3">Northen Lights</ProductName>
                        <Badge>ส่วนลด 5 %</Badge>
                      </Box>
                      <Box display="flex" flexDirection="column" textAlign="left" justifyContent="flex-start">
                        <Typography>
                          Type:Sativa
                        </Typography>
                        <Box display="flex">
                        <Typography>
                          CBD: 8%
                        </Typography>
                        <Typography>
                          THC: 22%
                        </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </ProductCard>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
}

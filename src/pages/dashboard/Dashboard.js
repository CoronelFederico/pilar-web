import React, { useEffect } from "react";

import {
  Grid,
  Paper,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Divider
} from "@mui/material";

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Box>Dashboard</Box>
          <Divider variant="middle" />
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image="https://th.bing.com/th/id/OIP.DYIfbw7m8C38penwrh6j9gHaEc?pid=ImgDet&rs=1"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Iguana
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The word "iguana" is derived from the original Taino name for
                  the species, iwana. In addition to the two species in the
                  genus Iguana, several other related genera in the same family
                  have common names of the species including the word "iguana".
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;

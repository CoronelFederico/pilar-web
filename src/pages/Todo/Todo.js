import React, { useEffect } from "react";

import {
  Grid,
  Paper,
  Box,
  Divider,
  Card,
  CardHeader,
  CardContent,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { appSelector, appAction } from "../../redux/appRedux";

const Todo = () => {
  const title = useSelector(appSelector.pageTitle);

  const addTask = () => {};
  const handleChange = () => {};
  const text = () => {};

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Box>{title}</Box>
          <Divider></Divider>
        </Paper>
      </Grid>

      <Grid item md={12} xs={6}>
        <Card>
          <CardHeader title="Agrega una tarea" />
          <CardContent>
            <Stack sx={{ justifyContent: "space-around" }} direction="row">
              <Grid item md={6}>
                <TextField
                  value={text}
                  label="tarea"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={6}>
                <Button variant="contained" onClick={() => addTask()}>
                  Agregar
                </Button>
              </Grid>
            </Stack>
          </CardContent>
        </Card>
      </Grid>

      <Grid item md={12} xs={6}></Grid>
    </Grid>
  );
};

export default Todo;

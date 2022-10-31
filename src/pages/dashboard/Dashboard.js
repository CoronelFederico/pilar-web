import React, { useEffect } from "react";

import {
  Grid,
  Paper,
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Stack,
  Checkbox,
} from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { appSelector, appActions } from "../../redux/appRedux";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appActions.setPageTitle("DASHBOARD"));
  }, []);

  const todo = useSelector(appSelector.todo);
  const filter = async (id) => {
    dispatch(appActions.filterComplete(id));
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Box>Tareas completadas</Box>
          <Divider variant="middle" />

          <Card>
            {/* <Box> {JSON.stringify(todo)} </Box> */}
            <CardContent>
              {todo.map((t, index) => (
                <Stack
                  key={t.id}
                  sx={{ justifyContent: "space-between" }}
                  direction="row"
                >
                  <Grid item md={9} sx={{ pt: 1 }}>
                    <Typography sx={{ fontSize: 18, fontWeight: 700 }}>
                      <Checkbox disabled checked />
                      {t.text}
                    </Typography>
                  </Grid>
                  <Grid item md={2}></Grid>
                </Stack>
              ))}
            </CardContent>
          </Card>

          <Box>Tareas por completar</Box>
          <Divider variant="middle" />

          <Card>
            {/* <Box> {JSON.stringify(todo)} </Box> */}
            <CardContent>
              {todo.map((t, index) => (
                <Stack
                  key={t.id}
                  sx={{ justifyContent: "space-between" }}
                  direction="row"
                >
                  <Grid item md={9} sx={{ pt: 1 }}>
                    <Typography sx={{ fontSize: 18, fontWeight: 700 }}>
                      {t.text}
                    </Typography>
                  </Grid>
                  <Grid item md={2}></Grid>
                </Stack>
              ))}
            </CardContent>
          </Card>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;

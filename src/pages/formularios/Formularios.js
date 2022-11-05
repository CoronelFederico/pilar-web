import React, { useEffect, useState } from "react";

import {
  Grid,
  Card,
  CardHeader,
  Stack,
  CardContent,
  TextField,
  Button,
  Typography,
} from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { appSelector, appActions } from "../../redux/appRedux";

const Formularios = () => {
  const initialData = {
    name: "",
    lastname: "",
    age: "",
    year: "",
  };

  const dispatch = useDispatch();
  const [data, setData] = useState(initialData);

  useEffect(() => {
    dispatch(appActions.setPageTitle("Formulario"));
    
  }, []);

  const handleChange = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = () => {};

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Formulario" />
          <CardContent>
            <Typography>{data.name}</Typography>
            <Typography>{data.lastname}</Typography>
            <Typography>{data.age}</Typography>
            <Typography>{data.year}</Typography>
            <Stack spacing={2}>
              <Stack sx={{ justifyContent: "space-around" }} direction="row">
                <Grid item md={6}>
                  <TextField
                    value={data.name}
                    name="name"
                    label="Nombre"
                    variant="outlined"
                    onChange={handleChange}
                  />
                </Grid>
              </Stack>
              <Stack sx={{ justifyContent: "space-around" }} direction="row">
                <Grid item md={6}>
                  <TextField
                    value={data.lastname}
                    name="lastname"
                    label="Apellido"
                    variant="outlined"
                    onChange={handleChange}
                  />
                </Grid>
              </Stack>
              <Stack sx={{ justifyContent: "space-around" }} direction="row">
                <Grid item md={6}>
                  <TextField
                    value={data.age}
                    name="age"
                    label="Edad"
                    variant="outlined"
                    onChange={handleChange}
                  />
                </Grid>
              </Stack>
              <Stack sx={{ justifyContent: "space-around" }} direction="row">
                <Grid item md={6}>
                  <TextField
                    value={data.year}
                    name="year"
                    label="Año"
                    variant="outlined"
                    onChange={handleChange}
                  />
                </Grid>
              </Stack>
              <Stack>
                <Grid item md={6}>
                  <Button
                    disabled={!data.name }
                    variant="contained"
                    onClick={() => handleSubmit()}
                  >
                    {" "}
                    Enviar{" "}
                  </Button>
                </Grid>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Formularios;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import StaticDateRangePicker from "@mui/lab/StaticDateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import { Button, Grid, Typography } from "@material-ui/core";
import { GoBackIcon, GridSingleCol } from "../../components/DesignElements";
import Stack from "@mui/material/Stack";
import MobileDateRangePicker from "@mui/lab/MobileDateRangePicker";

const Request = () => {
  const history = useHistory();
  const [value, setValue] = React.useState([null, null]);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <br></br>
        <Link variant="button" onClick={() => history.goBack()}>
          <GoBackIcon />
        </Link>
        <GridSingleCol>
          <br></br>
          <Grid item xs={12} sm={9} lg={8} margin="auto">
            <p>Välj tidsperiod</p>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <MobileDateRangePicker
                  startText="Hyr"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <TextField {...startProps} />
                      <Box sx={{ mx: 2 }}> to </Box>
                      <TextField {...endProps} />
                    </React.Fragment>
                  )}
                />
              </Stack>
            </LocalizationProvider>
          </Grid>
          <br></br>
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              target="_top"
              rel="noopener noreferrer"
            >
              Skicka din förfrågan
            </Button>
          </Box>
          <br></br>
        </GridSingleCol>
      </LocalizationProvider>
    </>
  );
};
export default Request;

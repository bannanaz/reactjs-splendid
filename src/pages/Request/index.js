import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import AdapterMoment from "@mui/lab/AdapterMoment";
import moment from "moment";
import "moment/locale/sv";

import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import { Button, Grid, Link, Typography } from "@material-ui/core";
import { GoBackIcon, GridSingleCol } from "../../components/DesignElements";
import Stack from "@mui/material/Stack";
import MobileDateRangePicker from "@mui/lab/MobileDateRangePicker";

const Request = () => {
  const history = useHistory();
  const [value, setValue] = useState([null, null]);
  const [startValue, setStartValue] = useState("");
  const [endValue, setEndValue] = useState("");
  const [duration, setDuration] = useState("");
  const didMount = React.useRef(false);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (didMount.current) {
      const startVal = value[0];
      setStartValue(startVal);

      const endVal = value[1];
      setEndValue(endVal);

      if (startVal !== null) {
        const startValueFormatted = moment(startVal).format("LL");
        setStartValue(startValueFormatted);
      }

      if (endVal !== null) {
        const endValueFormatted = moment(endVal).format("LL");
        setEndValue(endValueFormatted);
      }

      if (startVal && endVal !== null) {
        var duration = moment.duration(endVal.diff(startVal));
        setDuration(duration.as("days"));
      }
    } else {
      didMount.current = true;
    }
  }, [value]);

  console.log(startValue);
  console.log(endValue);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <br></br>
        <Link variant="button" onClick={() => history.goBack()}>
          <GoBackIcon />
        </Link>
        <GridSingleCol>
          <br></br>
          <Grid item xs={12} sm={9} lg={8} margin="auto">
            <p>Välj tidsperiod att hyra</p>
            <br></br>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <Stack spacing={3}>
                <MobileDateRangePicker
                  startText="Hyrstart"
                  endText="Återlämning"
                  value={value}
                  onChange={handleChange}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <TextField {...startProps} />
                      <Box sx={{ mx: 2 }}> </Box>
                      <TextField {...endProps} />
                    </React.Fragment>
                  )}
                />
              </Stack>
            </LocalizationProvider>
            <br></br>
            {startValue !== "" ? <p>Hyrstart: {startValue}</p> : ""}
            {endValue !== "" ? <p>Återlämning: {endValue}</p> : ""}
            {duration !== "" ? <p>Antal dagar: {duration}</p> : ""}
            {endValue && startValue !== "" ? (
              <p>Pris (inklusive 50 kr i bokningsavgift):</p>
            ) : (
              ""
            )}
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

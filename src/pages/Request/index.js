import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/sv";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Button, Typography } from "@material-ui/core";
import MobileDateRangePicker from "@mui/lab/MobileDateRangePicker";
import "../../styles/styles.css";
import {
  GoBack,
  MainContainerCenter,
  PaperAdUpload,
} from "../../components/DesignElements";
import Bottomnav from "../../components/Bottomnav";

const StyledDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 420px;
  min-width: 300px;
  margin: auto;
`;

const StyledDivContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 420px;
  min-width: 300px;
  margin: auto;
`;

const Request = (props) => {
  const [ad, setAd] = useState("");
  const [value, setValue] = useState([null, null]);
  const [startValue, setStartValue] = useState("");
  const [endValue, setEndValue] = useState("");
  const [duration, setDuration] = useState("");
  const didMount = React.useRef(false);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetch(`http://localhost:8000/ads/${props.match.params.id}`)
      .then((res) => res.json())
      .then((data) => setAd(data));
  }, [props.match.params.id]);

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

  return (
    <div>
      <br></br>
      <GoBack />
      <br></br>
      <MainContainerCenter>
        <PaperAdUpload>
          <StyledDivContainer>
            <Typography variant="h2">Välj tidsperiod att hyra:</Typography>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <Stack spacing={3}>
                <MobileDateRangePicker
                  startText="Från"
                  endText="Till"
                  mask=""
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
          </StyledDivContainer>
          <StyledDivContainer2>
            <br></br>
            {startValue && endValue !== "" ? (
              <Typography variant="body2">
                {startValue} - {endValue}
              </Typography>
            ) : (
              ""
            )}
            {duration !== "" ? (
              <Typography variant="body2">{duration} dagar</Typography>
            ) : (
              ""
            )}
            {duration !== "" ? (
              <Typography variant="body2">
                Pris: {duration * ad.price + 25} kr (inklusive 25 kr i
                bokningsavgift)
              </Typography>
            ) : (
              ""
            )}
            <br></br>
          </StyledDivContainer2>
        </PaperAdUpload>
        <br></br>
        <br></br>
        <Button variant="contained" color="primary">
          Skicka förfrågan
        </Button>
      </MainContainerCenter>
      <br></br>
      <br></br>
      <br></br>
      <Bottomnav />
    </div>
  );
};
export default Request;

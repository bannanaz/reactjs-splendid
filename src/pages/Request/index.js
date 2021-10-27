import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/sv";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Button } from "@material-ui/core";
import { Paper } from "@mui/material";
import MobileDateRangePicker from "@mui/lab/MobileDateRangePicker";
import { GoBack, MainContainerCenter } from "../../components/DesignElements";

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
  align-items: flex-start;
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
    <>
      <br></br>
      <GoBack />
      <br></br>
      <MainContainerCenter>
        <Paper sx={{ width: "100%" }}>
          <StyledDivContainer>
            <p>{ad.title}</p>
            <p>Välj tidsperiod att hyra:</p>
            <br></br>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <Stack spacing={3}>
                <MobileDateRangePicker
                  startText="Hyrstart"
                  endText="Återlämna"
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
            <p>
              Hyrstart: {startValue !== "" ? <span>{startValue}</span> : ""}
            </p>
            <p>Återlämna: {endValue !== "" ? <span>{endValue}</span> : ""}</p>
            {duration !== "" ? <p>Antal dagar: {duration}</p> : ""}
            {duration !== "" ? (
              <p>
                Pris (inklusive 50 kr i bokningsavgift):{" "}
                {duration * ad.price + 50} kr
              </p>
            ) : (
              ""
            )}
            <br></br>
          </StyledDivContainer2>
        </Paper>
        <br></br>
        <br></br>
        <Button
          variant="contained"
          color="primary"
          target="_top"
          rel="noopener noreferrer"
        >
          Skicka din förfrågan
        </Button>
        <br></br>
        <br></br>
        <br></br>
      </MainContainerCenter>
    </>
  );
};
export default Request;

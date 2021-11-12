import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/sv";
import "../../styles/styles.css";
import { GoBack, PaperAdUpload } from "../../components/DesignElements";

import Stack from "@mui/material/Stack";
import AdapterMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Button, Typography } from "@material-ui/core";
import MobileDateRangePicker from "@mui/lab/MobileDateRangePicker";
import { TextField } from "@material-ui/core";
import { Container, Modal } from "@mui/material";
import { Box } from "@mui/system";

const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  background-color: white;
  box-shadow: 24px;
  padding: 40px;
`;

const StyledDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

const StyledDivContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  min-width: 270px;
  margin: auto;
`;

const StyledDivContainer3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  min-width: 270px;
  margin: auto;
`;

const Request = (props) => {
  const history = useHistory();
  const [ad, setAd] = useState("");
  const [date, setDate] = useState([null, null]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [startValue, setStartValue] = useState("");
  const [endValue, setEndValue] = useState("");
  const [duration, setDuration] = useState("");

  const [open, setOpen] = React.useState(false);

  const [startError, setStartError] = useState(false);
  const [endError, setEndError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const didMount = React.useRef(false);

  const handleChange = (newValue) => {
    setDate(newValue);
  };

  const checkEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleClose = () => {
    history.push({
      pathname: "/find",
    });
  };

  useEffect(() => {
    fetch(`http://localhost:8000/ads/${props.match.params.id}`)
      .then((res) => res.json())
      .then((data) => setAd(data));
  }, [props.match.params.id]);

  useEffect(() => {
    if (didMount.current) {
      const startVal = date[0];
      setStartValue(startVal);

      const endVal = date[1];
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
  }, [date]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStartError(false);
    setEndError(false);
    setNameError(false);
    setEmailError(false);
    setMessageError(false);

    if (name === "") {
      setNameError(true);
    }

    if (checkEmail(email) === false) {
      setEmailError(true);
    }

    if (message === "") {
      setMessageError(true);
    }

    if (name && email && message && startValue && endValue) {
      setOpen(true);
    }
  };

  return (
    <div>
      <br></br>
      <GoBack />
      <br></br>
      <Container
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "3px",
          margin: "auto",
          width: { xs: "100%", md: "75%", lg: "65%", xl: "60%" },
        }}
      >
        <PaperAdUpload>
          <StyledDivContainer>
            <br></br>
            <Typography variant="h2">Välj tidsperiod att hyra:</Typography>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <Stack sx={{ width: 500 }} spacing={3}>
                <MobileDateRangePicker
                  startText="Från"
                  endText="Till"
                  mask=""
                  value={date}
                  onChange={handleChange}
                  IconProps={{
                    color: "black",
                  }}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <StyledDivContainer3>
                        <TextField {...startProps} error={startError} />
                        <TextField {...endProps} error={endError} />
                      </StyledDivContainer3>
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
                Pris: {duration * ad.price} kr
              </Typography>
            ) : (
              ""
            )}
            <br></br>
            <Typography variant="h2">Dina kontaktuppgifter:</Typography>
            <TextField
              id="name"
              name="name"
              label="Ditt namn"
              multiline
              maxRows={4}
              onChange={(e) => setName(e.target.value)}
              error={nameError}
            />
            <TextField
              id="email"
              name="email"
              label="Din email"
              multiline
              maxRows={4}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
            />
            <TextField
              id="message"
              name="message"
              label="Skriv ett meddelande till uthyraren"
              multiline
              rows={4}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
            />
          </StyledDivContainer2>
          <br></br>
        </PaperAdUpload>
        <br></br>
        <br></br>
        <Button type="submit" variant="contained" color="primary">
          Skicka förfrågan
        </Button>
      </Container>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <StyledBox>
            <Typography
              variant="h3"
              component="h2"
              align="center"
              id="modal-modal-description"
              sx={{ mt: 2 }}
            >
              Din förfrågan har skickats till uthyraren!
            </Typography>
          </StyledBox>
        </Modal>
      </div>
    </div>
  );
};
export default Request;

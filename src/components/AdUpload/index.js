import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import {
  Button,
  FormControl,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  Typography,
} from "@material-ui/core";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { PaperAdUpload } from "../DesignElements";

const AdUpload = () => {
  const history = useHistory();
  const [city, setCity] = useState("");
  const didMount = React.useRef(false);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");

  const [categoryError, setCategoryError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [zipError, setZipError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const checkEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChangePhone = (event) => {
    let value = event.target.value;
    if (/^([+]46)(7[0236])(\d{4})(\d{3})$/.test(value) === true) {
      setPhone(value);
    }
  };

  const handleChangeZip = (event) => {
    let value = event.target.value;
    if (value.length === 5 && !isNaN(value)) {
      setZip(value);
    }
  };

  useEffect(() => {
    if (didMount.current) {
      fetch(
        `https://api.papapi.se/lite/?query=${zip}&format=json&apikey=0de19fcae3d87fe22a055879126efb9a10fadc15`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(zip);
          console.log(data.results[0].city);
          setCity(data.results[0].city);
        });
    } else {
      didMount.current = true;
    }
  }, [zip]);

  const fetchHandling = () => {
    fetch("http://localhost:8000/ads", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        category,
        title,
        details,
        image,
        price,
        name,
        phone,
        zip,
        city,
        email,
      }),
    }).then(() => history.push("./find"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategoryError(false);
    setTitleError(false);
    setDetailsError(false);
    setPriceError(false);
    setZipError(false);
    setNameError(false);
    setPhoneError(false);
    setEmailError(false);

    if (category === "") {
      setCategoryError(true);
    }

    if (title === "") {
      setTitleError(true);
    }

    if (details === "") {
      setDetailsError(true);
    }

    if (image === "") {
      setImageError(true);
    }

    if (price === "" || isNaN(price)) {
      setPriceError(true);
    }

    if (name === "") {
      setNameError(true);
    }

    if (phone === "") {
      setPhoneError(true);
    }

    if (zip === isNaN(zip) || zip.length !== 5) {
      setZipError(true);
    }

    if (checkEmail(email) === false) {
      setEmailError(true);
    }

    if (
      category &&
      title &&
      details &&
      image &&
      name &&
      phone &&
      checkEmail(email) === true &&
      price &&
      !isNaN(price) &&
      zip
    ) {
      fetchHandling();
    }
  };

  return (
    <>
      <PaperAdUpload>
        <Typography variant="h2">Skapa annons</Typography>
        <form onSubmit={handleSubmit} autoComplete="off" noValidate>
          <FormControl
            error={categoryError}
            required
            variant="filled"
            margin="normal"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel id="select-filled-label">Välj kategori:</InputLabel>
            <Select
              labelId="select-filled-label"
              id="select-filled"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value={"Sport & fritid"}>Sport &amp; fritid</MenuItem>
              <MenuItem value={"Verktyg"}>Verktyg</MenuItem>
            </Select>
          </FormControl>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            label="Rubrik"
            id="rubrik"
            error={titleError}
          />
          <TextField
            onChange={(e) => setDetails(e.target.value)}
            label="Beskrivning"
            id="beskrivning"
            error={detailsError}
            multiline
            rows={3}
          />
          <TextField
            onChange={(e) => setImage(e.target.value)}
            label="Bildlänk, https://exempelbild.com"
            id="bildlänk"
            error={imageError}
          />
          <TextField
            onChange={(e) => setPrice(e.target.value)}
            label="Pris per dag i SEK, ex. 100 "
            id="pris"
            inputProps={{ inputMode: "numeric" }}
            error={priceError}
          />
          <TextField
            onChange={handleChangeZip}
            label="Postnummer, 14171"
            id="postnummer"
            error={zipError}
          />
          <br></br>
          <br></br>
          <Typography variant="body2">Dina kontaktuppgifter:</Typography>
          <TextField
            onChange={(e) => setName(e.target.value)}
            label="Förnamn"
            id="namn"
            error={nameError}
          />
          <TextField
            onChange={handleChangePhone}
            label="Telefon, +46709301245"
            id="phone"
            error={phoneError}
          />
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            label="Email, exempel@gmail.com"
            id="email"
            name="email"
            error={emailError}
          />
          <br></br>
          <br></br>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ width: 170 }}
            endIcon={<KeyboardArrowRightIcon />}
          >
            publicera
          </Button>
        </form>
        <br></br>
        <br></br>
        <br></br>
      </PaperAdUpload>
    </>
  );
};

export default AdUpload;

import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  Button,
  FormControl,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  Typography,
  Grid,
} from "@material-ui/core";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { GridSingleCol, PaperAdUpload } from "../DesignElements";

const AdUpload = () => {
  const history = useHistory();
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");
  const [categoryError, setCategoryError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [zipError, setZipError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategoryError(false);
    setTitleError(false);
    setDetailsError(false);
    setPriceError(false);
    setZipError(false);

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

    if (price === "") {
      setPriceError(true);
    }

    if (zip === "") {
      setZipError(true);
    }

    if (email === "") {
      setEmailError(true);
    }

    if (category && title && details && image && price && zip && email) {
      console.log(category, title, details, price, zip, email);
      fetch("http://localhost:8000/ads", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          category,
          title,
          details,
          image,
          price,
          zip,
          email,
        }),
      }).then(() => history.push("./"));
    }
  };

  return (
    <GridSingleCol>
      <Grid item xs={12} sm={9} lg={8} margin="auto">
        <PaperAdUpload>
          <Typography variant="h2">skapa annons</Typography>
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
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
              error={titleError}
            />
            <TextField
              onChange={(e) => setDetails(e.target.value)}
              label="Beskrivning"
              error={detailsError}
              multiline
              rows={3}
            />
            <TextField
              onChange={(e) => setImage(e.target.value)}
              label="Bild, kopiera in länk ex. https://exempelbild.com"
              error={imageError}
            />
            <TextField
              onChange={(e) => setPrice(e.target.value)}
              label="Pris per dag"
              error={priceError}
            />
            <TextField
              onChange={(e) => setZip(e.target.value)}
              label="Postnummer"
              error={zipError}
            />
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              error={emailError}
            />
            <br></br>
            <br></br>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              type="submit"
              endIcon={<KeyboardArrowRightIcon />}
            >
              publicera
            </Button>
          </form>
          <br></br>
        </PaperAdUpload>
      </Grid>
    </GridSingleCol>
  );
};

export default AdUpload;

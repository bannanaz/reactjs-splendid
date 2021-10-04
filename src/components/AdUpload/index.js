import React, { useState } from "react";
import { useHistory } from "react-router";
import "../../styles/styles.css";
import { makeStyles } from "@material-ui/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.contrastText,
  },
}));

const AdUpload = () => {
  const classes = useStyles();
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
    <div>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <FormControl
          required
          className={classes.root}
          fullWidth
          error={categoryError}
        >
          <InputLabel id="select-category-label" color="grey">
            Välj kategori
          </InputLabel>
          <Select
            labelId="select-category-label"
            id="select-category"
            value={category}
            label="Välj kategori"
            onChange={(e) => setCategory(e.target.value)}
            color="grey"
          >
            <MenuItem value={"sport"}>Sport &amp; Fritid</MenuItem>
            <MenuItem value={"tools"}>Verktyg</MenuItem>
          </Select>
        </FormControl>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.root}
          label="Rubrik"
          variant="outlined"
          color="grey"
          fullWidth
          required
          margin="normal"
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.root}
          label="Beskrivning"
          variant="outlined"
          color="grey"
          fullWidth
          required
          multiline
          rows={3}
          margin="normal"
          error={detailsError}
        />
        <TextField
          onChange={(e) => setImage(e.target.value)}
          className={classes.root}
          label="Bild, kopiera in länk ex. https://exempelbild.com"
          variant="outlined"
          color="grey"
          fullWidth
          required
          multiline
          margin="normal"
          error={imageError}
        />
        <TextField
          onChange={(e) => setPrice(e.target.value)}
          className={classes.root}
          label="Pris per dag"
          variant="outlined"
          color="grey"
          fullWidth
          required
          margin="normal"
          error={priceError}
        />
        <TextField
          onChange={(e) => setZip(e.target.value)}
          className={classes.root}
          label="Postnummer"
          variant="outlined"
          color="grey"
          fullWidth
          required
          margin="normal"
          error={zipError}
        />
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          className={classes.root}
          label="Email"
          variant="outlined"
          color="grey"
          fullWidth
          required
          margin="normal"
          error={emailError}
        />
        <br></br>
        <br></br>
        <Button
          onClick={handleSubmit}
          type="submit"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
          sx={{
            fontFamily: "Poppins",
            fontWeight: "600",
            textTransform: "lowercase",
            backgroundColor: "#0a8f7a",
            mb: 10,
            "&:hover": {
              backgroundColor: "#0B9882",
            },
          }}
        >
          publicera
        </Button>
      </form>
    </div>
  );
};

export default AdUpload;

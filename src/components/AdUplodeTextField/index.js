import React, { useState } from "react";
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
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  const [zip, setZip] = useState("");
  const [categoryError, setCategoryError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [zipError, setZipError] = useState(false);

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

    if (price === "") {
      setPriceError(true);
    }

    if (zip === "") {
      setZipError(true);
    }

    if (category && title && details && price && zip) {
      console.log(category, title, details, price, zip);
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
            <MenuItem value={1}>Sport &amp; Fritid</MenuItem>
            <MenuItem value={2}>Verktyg</MenuItem>
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
            backgroundColor: "#0B9882",
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

import React, { useState } from "react";
import { useHistory } from "react-router";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import {
  IconBtn,
  FormControlAdUpload,
  TextFieldAdUpload,
} from "../DesignElements";

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
    <div>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <FormControlAdUpload error={categoryError}>
          <InputLabel id="select-category-label">Välj kategori</InputLabel>
          <Select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            id="select-category"
            labelId="select-category-label"
            label="Välj kategori"
          >
            <MenuItem value={"sport"}>Sport &amp; Fritid</MenuItem>
            <MenuItem value={"tools"}>Verktyg</MenuItem>
          </Select>
        </FormControlAdUpload>
        <TextFieldAdUpload
          onChange={(e) => setTitle(e.target.value)}
          label="Rubrik"
          error={titleError}
        />
        <TextFieldAdUpload
          onChange={(e) => setDetails(e.target.value)}
          label="Beskrivning"
          error={detailsError}
          multiline
          rows={3}
        />
        <TextFieldAdUpload
          onChange={(e) => setImage(e.target.value)}
          label="Bild, kopiera in länk ex. https://exempelbild.com"
          error={imageError}
        />
        <TextFieldAdUpload
          onChange={(e) => setPrice(e.target.value)}
          label="Pris per dag"
          error={priceError}
        />
        <TextFieldAdUpload
          onChange={(e) => setZip(e.target.value)}
          label="Postnummer"
          error={zipError}
        />
        <TextFieldAdUpload
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          error={emailError}
        />
        <br></br>
        <br></br>
        <IconBtn
          onClick={handleSubmit}
          type="submit"
          endIcon={<KeyboardArrowRightIcon />}
        >
          publicera
        </IconBtn>
      </form>
    </div>
  );
};

export default AdUpload;

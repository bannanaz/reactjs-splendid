import React from "react";
import { makeStyles } from "@material-ui/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.contrastText,
  },
}));
const AdUpload = () => {
  const classes = useStyles();
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <form novalidate autoComplete="off">
        <FormControl required className={classes.root} fullWidth>
          <InputLabel id="select-category-label" color="grey">
            Välj kategori
          </InputLabel>
          <Select
            labelId="select-category-label"
            id="select-category"
            value={category}
            label="Välj kategori"
            onChange={handleChange}
            color="grey"
          >
            <MenuItem value={1}>Sport &amp; Fritid</MenuItem>
            <MenuItem value={2}>Verktyg</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className={classes.root}
          label="Rubrik"
          variant="outlined"
          color="grey"
          fullWidth
          required
          margin="normal"
        />
        <TextField
          className={classes.root}
          label="Beskrivning"
          variant="outlined"
          color="grey"
          fullWidth
          required
          multiline
          rows={3}
          margin="normal"
        />
        <TextField
          className={classes.root}
          label="Pris per dag"
          variant="outlined"
          color="grey"
          fullWidth
          required
          margin="normal"
        />
        <TextField
          className={classes.root}
          label="Postnummer"
          variant="outlined"
          color="grey"
          fullWidth
          required
          margin="normal"
        />
      </form>
    </div>
  );
};

export default AdUpload;

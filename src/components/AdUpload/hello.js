import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useForm, Controller } from "react-hook-form";
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

const Index2 = () => {
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <GridSingleCol>
      <Grid item xs={12} sm={9} lg={8} margin="auto">
        <PaperAdUpload>
          <Typography variant="h2">Skapa annons</Typography>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
            <FormControl
              required
              variant="filled"
              margin="normal"
              sx={{ m: 1, minWidth: 120 }}
            >
              <InputLabel id="select-filled-label">Välj kategori:</InputLabel>
              <Select labelId="select-filled-label" id="select-filled">
                <MenuItem value={"Sport & fritid"}>Sport &amp; fritid</MenuItem>
                <MenuItem value={"Verktyg"}>Verktyg</MenuItem>
              </Select>
            </FormControl>
            <Controller
              name="rubrik"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  label="Rubrik"
                  id="rubrik"
                  {...register("rubrik", { required: true, maxLength: 20 })}
                  {...field}
                />
              )}
            />
            {errors.rubrik?.type === "required" && "First name is required"}
            <TextField
              label="Beskrivning"
              id="beskrivning"
              multiline
              rows={3}
            />
            <TextField
              label="Bildlänk, ex. https://exempelbild.com"
              id="bildlänk"
            />
            <TextField
              label="Pris per dag"
              id="pris"
              inputProps={{ inputMode: "numeric" }}
            />
            <TextField label="Postnummer, 5 siffror" id="postnummer" />
            <TextField label="Email" id="email" name="email" type="email" />
            <br></br>
            <br></br>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              endIcon={<KeyboardArrowRightIcon />}
            >
              publicera
            </Button>
          </form>
          <br></br>
          <br></br>
          <br></br>
        </PaperAdUpload>
      </Grid>
    </GridSingleCol>
  );
};

export default Index2;

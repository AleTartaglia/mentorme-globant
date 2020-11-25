import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { formUserDataStyles } from "./materialStyles";

function FormUserData(props) {
  const [open, setOpen] = React.useState(false);
  const classes = formUserDataStyles();
  const theme = useTheme();

  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const prev = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="content-register">
      <h3>Ingresa tus datos personales</h3>
      <form>
        <TextField
          className={classes.formLogininput}
          id="outlined-search"
          label=" Nombre *"
          name="firstName"
          type="text"
          variant="outlined"
          onChange={props.handleChange}
        />
        <TextField
          className={classes.formLogininput}
          id="outlined-search"
          label=" Apellido *"
          name="lastname"
          type="text"
          variant="outlined"
          onChange={props.handleChange}
        />
        <TextField
          className={classes.formLogininput}
          id="outlined-search"
          label=" Email *"
          name="email"
          type="email"
          variant="outlined"
          onChange={props.handleChange}
        />
        <TextField
          className={classes.formLogininput}
          id="outlined-search"
          label=" Contraseña *"
          name="password"
          type="password"
          variant="outlined"
          onChange={props.handleChange}
        />
        <TextField
          className={classes.formLogininput}
          id="outlined-search"
          label=" Confirma tu contraseña *"
          name="confirmPassword"
          type="password"
          variant="outlined"
          onChange={props.handleChange}
        />
        <TextField
          className={classes.formLogininput}
          id="outlined-search"
          label="Telefono *"
          name="phoneNumber"
          type="tel"
          variant="outlined"
          onChange={props.handleChange}
        />

        <InputLabel
          id="demo-simple-select-outlined-label"
          style={{ marginTop: "18px" }}
        >
          Pais
        </InputLabel>

        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          className={classes.formLogininput}
          open={open}
          onClose={handleClose}
          name="country"
          onOpen={handleOpen} //para hacerlo controlled deberiamos hacer un hook here
          /*   value={age} */ onChange={props.handleChange}
          autoWidth={true}
        >
          <MenuItem value="">
            <em>Selecciona tu pais</em>
          </MenuItem>
          <MenuItem value={"Argentina"}>Argentina</MenuItem>
          <MenuItem value={"Bolivia"}>Bolivia</MenuItem>
          <MenuItem value={"Brasil"}>Brasil</MenuItem>
          <MenuItem value={"Chile"}>Chile</MenuItem>
          <MenuItem value={"Colombia"}>Colombia</MenuItem>
          <MenuItem value={"Ecuador"}>Ecuador</MenuItem>
          <MenuItem value={"Paraguay"}>Paraguay</MenuItem>
          <MenuItem value={"Peru"}>Peru</MenuItem>
          <MenuItem value={"Venezuela"}>Venezuela</MenuItem>
          <MenuItem value={"Uruguay"}>Uruguay</MenuItem>
        </Select>
      </form>
      <div className="container-stepper">
        <MobileStepper
          variant="dots"
          steps={4}
          position="static"
          activeStep={props.selectedStep - 2}
          className={classes.root}
          nextButton={
            <Button
              size="small"
              onClick={next}
              disabled={props.selectedStep === 5}
            >
              <p className="btn-steppers">Next</p>
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={prev}
              disabled={props.selectedStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              <p className="btn-steppers">Back</p>
            </Button>
          }
        />
      </div>
    </div>
  );
}

export default FormUserData;

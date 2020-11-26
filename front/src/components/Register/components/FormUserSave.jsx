import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import MobileStepper from "@material-ui/core/MobileStepper"
import Button from "@material-ui/core/Button"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"
import { formUserSaveStyles } from "./materialStyles"

function FormUserNew({ selectedStep, nextStep, prevStep }) {
  const classes = formUserSaveStyles()
  const theme = useTheme()

  const next = (e) => {
    e.preventDefault()
    nextStep()
  }

  const prev = (e) => {
    e.preventDefault()
    prevStep()
  }

  return (
    <div className="content-register">
      <p>STEP 4...</p>
      <div className="container-stepper">
        <MobileStepper
          variant="dots"
          steps={7}
          position="static"
          activeStep={selectedStep - 2}
          className={classes.root}
          nextButton={
            <Button size="small" onClick={next} disabled={selectedStep === 7}>
              <p className="btn-steppers">Next</p>
              {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={prev} disabled={selectedStep === 0}>
              {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              <p className="btn-steppers">Back</p>
            </Button>
          }
        />
      </div>
    </div>
  )
}
export default FormUserNew

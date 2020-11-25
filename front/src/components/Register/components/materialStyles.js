import { makeStyles } from "@material-ui/core/styles";

export const formUserDataStyles = makeStyles({
  root: {
    width: "100%",
    borderRadius: 5,
    flexGrow: 1,
    marginTop: 20,
    backgroundColor: "rgba(22,40,60,1)",
    color: "white",
  },
});

export const formUserNewStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formLogininput: {
    "& .MuiInputLabel-formControl": {
      left: "11px",
    },
    "& .MuiOutlinedInput-input": {
      padding: "4%",
      textAlign: "center",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "20px",
    },
    "& .MuiInputBase-root": {
      margin: "10px",
    },
    "& .MuiInputBase-input": {
      width: "18rem",
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: "#006400",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#a6d431",
    },
  },
}));

export const formUserSaveStyles = makeStyles({
  root: {
    maxWidth: "100%",
    borderRadius: 5,
    flexGrow: 1,
    backgroundColor: "rgba(22,40,60,1)",
    color: "white",
  },
});

export const formUserSkillsStyles = makeStyles({
  root: {
    maxWidth: "100%",
    borderRadius: 5,
    flexGrow: 1,
    backgroundColor: "rgba(22,40,60,1)",
    color: "white",
  },
});

export const formUserSuccess = makeStyles({
  root: {
    maxWidth: "100%",
    borderRadius: 5,
    flexGrow: 1,
    backgroundColor: "rgba(22,40,60,1)",
    color: "white",
  },
});

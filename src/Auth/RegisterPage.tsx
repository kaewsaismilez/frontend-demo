import {
  Button,
  Container,
  CssBaseline,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-navi";
import { onRegister } from "./auth.api";
import { AuthForm } from "./Auth.components";

const useStyles = makeStyles((theme) => ({
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formControl: {
    width: 300,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const RegisterPage = () => {
  const classes = useStyles();
  const [{ email, password, username }, setRegisterData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  const currencies = [
    {
      value: "EDITOR",
      label: "EDITOR",
    },
    {
      value: "AUTHOR",
      label: "AUTHOR",
    },
    {
      value: "CONTRIBUTOR",
      label: "CONTRIBUTOR",
    },
    {
      value: "SUBSCRIBER",
      label: "SUBSCRIBER",
    },
  ];

  const [error, setError] = useState("");
  const register = async (event: React.FormEvent) => {
    event.preventDefault();
    /*if (password === username) {
      const response = await onRegister({
        email,
        password,
      });

      if (response && response.error) {
        setError(response.error);
      }
    } else {
      setError("password not match");
    }*/
  };

  //บันทึก register ใน database
  /* const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>,
  ) => {
    
    const name = event.target.name as keyof typeof ......;
    const { value } = event.target;
    set..........({ ...______, [name]: value });
    console.log(......);
  };
  
  //เลือก role
  const getUser = async () => {
    const res = await http.listUser({ limit: 4, offset: 0 });
    setUsers(res);
  };
  */

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Register
        </Typography>

        <TextField
          label="Email"
          margin="normal"
          id="email"
          variant="outlined"
          fullWidth
        />

        <TextField
          label="Username"
          margin="normal"
          id="username"
          variant="outlined"
          fullWidth
        />

        <TextField
          id="password"
          label="Password"
          margin="normal"
          type="password"
          variant="outlined"
          fullWidth
        />

        <TextField
          id="roles"
          select
          label="Roles"
          margin="normal"
          value={currency}
          onChange={handleChange}
          
          variant="outlined"
          fullWidth
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <Grid item xs={9}>
          <Button variant="contained" color="secondary">
            Submit
          </Button>
          &emsp;
          <Button variant="contained" color="primary" href="/login">
            Log In
          </Button>
        </Grid>
      </div>
    </Container>
  );
};

export default RegisterPage;

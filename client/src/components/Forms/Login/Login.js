import Reac from "react";
import { Button, Grid, TextField } from "@material-ui/core";

const Signup = () => {
  return (
    <form>
      <Grid  container justifyContent="center">

      <Grid row spacing={6} xs={10}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
      </Grid>
      <br></br>
      <Grid spacing={3} xs={4}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            xs={2}
          >
            Sign In
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Signup;

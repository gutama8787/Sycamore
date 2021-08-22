import Reac,{useState} from "react";
import { Button, Grid, TextField } from "@material-ui/core";


const Signup = () => {
  const initialState = {
    username: '',
    email: '',
    password: '',
    conf_password: ''
  }

  const [user, setUser] = useState(initialState)
  const handleSubmit = (e) => {
    if (user.conf_password !== user.password) {
      alert("re-enter password!")
    }
    e.preventDefault()
  }
  return (
    <form onSubmit={e=>
      handleSubmit(e)
    }>
      <Grid  container justifyContent="center">

      <Grid row spacing={6} xs={10}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="username"
          name="username"
          autoComplete="username"
          autoFocus
          onChange={(e)=>{
            setUser({...user, username: e.target.value})
          }}
        />
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
          onChange={(e)=>{
            setUser({...user, password: e.target.value})
          }}
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
          onChange={(e)=>{
            setUser({...user, password: e.target.value})
          }}
        />
         <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="confirm password"
          type="password"
          id="conf_password"
          onChange={(e)=>{
            setUser({...user, conf_password: e.target.value})
          }}
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

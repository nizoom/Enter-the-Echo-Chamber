import './App.css';
import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Instructions from "./components/instructions/instructions"
import Input from "./components/input/input"
import TwitterResults from "./components/twitterResults/twitterResults"
//import validateHandle from "./twitterAPI/validateHandle"


function App() {
  const [data, setData] = React.useState(null);


  const handleInput = (submittedName) => {
    console.log(submittedName);
    setData(submittedName);

    console.log("Making request")

    fetch("/api")
      .then((res) => res.json())
      .then((info) => console.log(info))
      .then((data) => setData(data))
      .then((data) => console.log(data))

  }

  //validateHandle(submittedName)
  //take name once submitted 
  //pass to twitter api function


  return (
    <div className="App">
      <Grid container spacing={10} direction="column">

        <Grid item>
          <header>
            <Typography variant="h1" style={{ fontSize: "3em", marginTop: "15px" }}>
              Welcome to The Echo Chamber </Typography>
          </header>
        </Grid>

        <Grid item>
          <Instructions />
        </Grid>

        <Grid item>
          <Input handleInput={handleInput} />
        </Grid>

        <Grid item>
          <section>
            <TwitterResults />
          </section>
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
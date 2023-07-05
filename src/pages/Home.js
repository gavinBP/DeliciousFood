import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

function Home() {

  const navigate = useNavigate(); 

  const navAbout = () => {
    navigate('/about');
  }

  const navFood = () => {
    navigate('/food');
  }

  const buttonsStyle = {
    display: 'flex',
    flexDirection: 'column',
  }

  const buttonStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
  }
    return (
        <div id="homePage" style={buttonsStyle}>
          <h1>Welcome to the Delicious Food 'Server'</h1>
          <div>
          <Button variant="contained" style={buttonStyle} onClick={() => {
            navAbout();
          }}>First Time User?</Button>
          <Button variant="contained" style={buttonStyle} onClick={() => {
            navFood();
          }}>Open Food App</Button>
          </div>
        </div>
      );
}


export default Home;


{/* <Button variant="contained">Contained</Button>
            <Button variant="contained" disabled>
                 Disabled
            </Button>
            <Button variant="contained" href="#contained-buttons">
                Link
            </Button> */}
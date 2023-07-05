import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export const About = () => {
    const navigate = useNavigate();

    const returnToHome = () => {
        navigate('/');
    }

    return <div>
        <h1>About</h1>
        <div>This is a simple app meant to offer you, the user, the ability 
            to sort through, organize, save, and delete favorite food items
            using Microsoft Azure cloud storage to manage this data
        </div>
        <div>When you're ready click back to home and begin using the app as you see fit.</div>
        <Button variant="contained" onClick={() => {
            returnToHome();
        }}>Return To Home</Button>
    </div>
}















// import Header from '../components/Header';



// export default function About() {
//     return (
//         <div>
//             {/* <Header /> */}
//             <h2>About Page</h2>
//         </div>
//     )
// }
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddFood from '../components/AddFood';
import CustomSearchBar from '../components/CustomSearchBar';
import FoodTable from '../components/FoodTable';
// import { setPriority } from 'os';

function FoodPage() {

    const [showAddItem, setShowAddItem] = useState(false);
    const [showSearchItem, setShowSearchItem] = useState(false);

    const [nameArray, setNameArray] = useState([]);
    const [spiceLevelArray, setSpiceLevelArray] = useState([]);
    const [countryOfOriginArray, setCountryOfOriginArray] = useState([]);
    const [portionSizeArray, setPortionSizeArray] = useState([]);
    const [caloriesArray, setCaloriesArray] = useState([]);
    const [favoriteArray, setFavoriteArray] = useState([]);

    const switchAddItem = () => {
        if(showAddItem) {
            setShowAddItem(false);
        }
        else {
            setShowAddItem(true);
        }
    }

    const switchSearchItem = () => {
        if(showSearchItem) {
            setShowSearchItem(false);
        }
        else {
            setShowSearchItem(true);
        }
    }

    const navigate = useNavigate(); 

    const navHome = () => {
        navigate('/');
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

      const homeButton = {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '25px',
        backgroundColor: 'green',
      }

      const clearButton = {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '25px',
        backgroundColor: 'red',
      }

      const foodPage = {
        display: 'flex',
        flexDirection: 'column',
        margin: '25px',
      }

    return (
        <div style={foodPage}>
            <div style={buttonsStyle}>
                <h1>Let's Talk About Food!</h1>
                <div>
                <Button variant='contained' style={homeButton} onClick={() => {
                    navHome();
                }}>Home</Button>
                <Button variant='contained' style={clearButton}>Clear</Button>
                <Button variant='contained' style={buttonStyle} onClick={() => {
                    switchAddItem();
                }}>Add Food</Button>
                <div>{showAddItem ? (<AddFood/>) : (null)}</div>
                <Button variant='contained' style={buttonStyle}>All Food</Button>
                <Button variant='contained' style={buttonStyle} onClick={() => {
                    switchSearchItem();
                }}>Custom Search</Button>
                <div>{showSearchItem ? (<CustomSearchBar/>) : (null)}</div>
                </div>
            </div>
            <div><FoodTable
            nameArray={nameArray}
            setNameArray={setNameArray}
            spiceLevelArray={spiceLevelArray}
            setSpiceLevelArray={setSpiceLevelArray}
            countryOfOriginArray={countryOfOriginArray}
            setCountryOfOriginArray={setCountryOfOriginArray}
            portionSizeArray={portionSizeArray}
            setPortionSizeArray={setPortionSizeArray}
            caloriesArray={caloriesArray}
            setCaloriesArray={setCaloriesArray}
            favoriteArray={favoriteArray}
            setFavoriteArray={setFavoriteArray}
            /></div>
        </div>
    )
}

export default FoodPage;
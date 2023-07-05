import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { CategoryRounded } from '@mui/icons-material';


function CustomSearchBar() {

    const searchBarStyle = {
        border: '2px solid black',
        display: 'flex',
        flexDirection: 'column',

    }

    const categoryStyle = {
        border: '2px solid black',
        marginRight: '3px',
    }

    function handleSubmit() {
        const spiceLevelInput = document.querySelector('.spice-level-input');
        const countryOfOriginInput = document.querySelector('.country-of-origin-input');
        const portionSizeInput = document.querySelector('.portion-size-input');
        const caloriesInput = document.querySelector('.calories-input');
        const favoriteInput = document.querySelector('.favorite-input');
      
        const spiceLevel = spiceLevelInput.value;
        const countryOfOrigin = countryOfOriginInput.value;
        const portionSize = portionSizeInput.value;
        const calories = caloriesInput.value;
        const favorite = favoriteInput.value;
      
        console.log('Spice Level:', spiceLevel);
        console.log('Country of Origin:', countryOfOrigin);
        console.log('Portion Size:', portionSize);
        console.log('Calories:', calories);
        console.log('Favorite:', favorite);

        console.log('Here we must send this data to the backend to search for relevent food items');
      
        // spiceLevelInput.value = '';
        // countryOfOriginInput.value = '';
        // portionSizeInput.value = '';
        // caloriesInput.value = '';
        // favoriteInput.value = '';
      }

    return (
        <div style={searchBarStyle}>
            <div style={categoryStyle}>
                <label>Spice Level: </label>
                <input
                type="spiceLevel"
                placeholder="Spice level"
                className="spice-level-input"
                />
            </div>
            <div style={categoryStyle}>
                <label>Country of Origin: </label>
                <input
                type="countryOfOrigin"
                placeholder="Country of Origin"
                className="country-of-origin-input"
                />
            </div>
            <div style={categoryStyle}>
                <label>Portion Size: </label>
                <input
                type="portionSize"
                placeholder="Portion Size"
                className="portion-size-input"
                />
            </div>
            <div style={categoryStyle}>
                <label>Calories: </label>
                <input
                type="calories"
                placeholder="Calories"
                className="calories-input"
                />
            </div>
            <div style={categoryStyle}>
                <label>Favorite: </label>
                <input
                type="favorite"
                placeholder="Favorite"
                className="favorite-input"
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}


export default CustomSearchBar;
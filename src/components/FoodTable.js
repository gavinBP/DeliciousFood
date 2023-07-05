import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name, spiceLevel, countryOfOrigin, portionSize, calories, favorite) {
    return { name, spiceLevel, countryOfOrigin, portionSize, calories, favorite };
  }

function FoodTable(props) {

    const { 
        nameArray, setNameArray, 
        spiceLevelArray, setSpiceLevelArray,
        countryOfOriginArray, setCountryOfOriginArray,
        portionSizeArray, setPortionSizeArray,
        caloriesArray, setCaloriesArray,
        favoriteArray, setFavoriteArray
    } = props;

    const rows = [];

    useEffect(() => {
    setNameArray(['Seco de Pollo', 'arepa con queso', 'pollo francesa','churassco', 'chicken vindaloo']);
    setSpiceLevelArray([0, 0, 0, 0, 3]);
    setCountryOfOriginArray(['Ecuador', 'Gran Colombia', 'France', 'Latin America', 'India']);
    setPortionSizeArray(['high', 'low', 'high', 'very high', 'high']);
    setCaloriesArray([800, 200, 800, 1000, 600]);
    setFavoriteArray(['yes', 'no', 'yes', 'yes', 'yes']);

    for(let i in nameArray) {
        rows.push(createData(nameArray[i], spiceLevelArray[i], countryOfOriginArray[i], portionSizeArray[i], caloriesArray[i], favoriteArray[i]));
    }
    }, [setNameArray, setSpiceLevelArray, setCountryOfOriginArray, setPortionSizeArray, setCaloriesArray, setFavoriteArray]);

    
    // const rows = [
    //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'yes'),
    //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 'no'),
    //     createData('Eclair', 262, 16.0, 24, 6.0, 'yes'),
    //     createData('Cupcake', 305, 3.7, 67, 4.3, 'yes'),
    //     createData('Gingerbread', 356, 16.0, 49, 3.9, 'no'),
    //   ];

    return (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name of Food</TableCell>
            <TableCell align="right">Spice Level</TableCell>
            <TableCell align="right">Country of Origin</TableCell>
            <TableCell align="right">PortionSize</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Favorite</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.spiceLevel}</TableCell>
              <TableCell align="right">{row.countryOfOrigin}</TableCell>
              <TableCell align="right">{row.portionSize}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.favorite}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default FoodTable;
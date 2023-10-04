import React ,{useState,useEffect} from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import {fetchUserFromAPI} from './reduxToolkit/apiCall';
import { useSelector } from 'react-redux';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

 const UserTable=()=> {
  //const users=useSelector((state)=>state.users)
  ////const dispatch = useDispatch();
  

  //useEffect(()=>{
   // dispatch(fetchUserFromAPI());
  //},[]);

  return (
    <Box sx={{ flexGrow: 1 }} mt={20}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          {/* <Item>xs=4</Item> */}
        </Grid>
        <Grid item xs={8}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Id</StyledTableCell>
                  <StyledTableCell align="right">Name</StyledTableCell>
                  <StyledTableCell align="right">Email</StyledTableCell>
                  <StyledTableCell align="right" mr={50}>Address</StyledTableCell>
                  <StyledTableCell align="left" >
                    Action
                  </StyledTableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.calories}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right" >{row.carbs}</StyledTableCell>
                    <Button variant="contained" color="success" style={{marginRight:'30px',marginLeft:'20PX'}}>
                     Add User
                    </Button>
                    <Button variant="contained" color="primary" style={{marginRight:'30px'}}>
                     Edit User
                    </Button>
                    <Button variant="contained" color="error" >
                     Delete User
                    </Button>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={2}>
          {/* <Item>xs=4</Item> */}
        </Grid>
      </Grid>
    </Box>
  );
}
export default UserTable;
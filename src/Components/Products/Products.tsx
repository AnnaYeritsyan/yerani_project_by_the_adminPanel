import { Box, Grid } from "@mui/material";
import HeaderName from "../RepeatName";

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import { commondFlex } from "../style";
import ProductsItem from "./ProductsItem";

const vision = ['Honey-scented','Apple','Plum','Apricot','Peach', 'Fig','Hon','Serkefil','Chanchvar','Mulberry','Black mulberry','Calvados']



const  SelectAutoWidth = () => {
  

  return (
   

    <Box sx={{width:'80%'}}>
     <FormControl sx={{ m: 1, minWidth:264 }}>
        <InputLabel htmlFor="grouped-select">All</InputLabel>
        <Select defaultValue="" id="grouped-select" label="All">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>All</MenuItem>
          <MenuItem value={1}>New</MenuItem>
          <MenuItem value={2}>Limited edition</MenuItem>
          <MenuItem value={3}>Coming soon</MenuItem>
          
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 264 }}>
        <InputLabel htmlFor="grouped-select">Fruit spirit</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Fruit spirit">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            vision.map((e:string, index:number)=>{
              return (
                 <MenuItem value={index} key={index}>{e}</MenuItem>
              )
            
            })
          }
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 264 }}>
        <InputLabel htmlFor="grouped-select">Year</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Year">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          
          <MenuItem value={1}>All</MenuItem>
          <MenuItem value={2}>{(new Date()).getFullYear()}</MenuItem>
          <MenuItem value={3}>{(new Date()).getFullYear()-1}</MenuItem>
          <MenuItem value={4}>{(new Date()).getFullYear()-2}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

const Products = ({products}:any) => {

  return (
    <Box sx={{ mt: '63px' }}>
      <HeaderName />
      <Box sx={{ ...commondFlex, alignItems: 'center' }}>
        <SelectAutoWidth />
        <Grid container spacing={2} width="83%" sx={{ marginTop: 2 }}>
          <ProductsItem product={products}/>
        </Grid>
      </Box>
    </Box>
  );
};

export default Products;


import React from 'react'
import {MenuList} from '../data/data'
import Layout from '../components/layout/Layout'
import { Box, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';


const Menu = () => {
  return (
    <Layout>
      <Box sx={{display: 'flex', flexWrap: 'wrap',justifyContent: 'center'}}>
      {
        MenuList.map(menu => (
          <Card sx={{maxWidth: {xs: '200px', sm: '390px'},display: 'flex',m: 2 }}>
            <CardActionArea>
              <CardMedia sx={{minHeight: {xs: '200px', sm: '400px'}}} component={'img'}  src={menu.image} alt={menu.name}/>
              <CardContent>
                <Typography variant='h5' gutterBottom component={'div'} sx={{fontSize: {xs: '25px',sm: '35px'}}}>
                  {menu.name}
                </Typography>
                <Typography variant='body2' sx={{fontSize: {xs: '12px',sm: '20px'}}}> 
                  {menu.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
      }
      </Box>
    </Layout>
  )
}

export default Menu

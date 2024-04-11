import React from 'react'
import {MenuList} from '../data/data'
import Layout from '../components/layout/Layout'
import { Box,Card,CardActionArea,CardMedia,CardContent } from '@mui/material';
import { Typography } from '@mui/material';

const Menu = () => {
  return (
    <Layout>
      <Box>
      {
        MenuList.map(menu => (
          <Card>
            <CardActionArea>
              <CardMedia sx={{minHeight: '400px'}} component={'img'}  src={menu.image} alt={menu.name}/>
              <CardContent>
                <Typography variant='h5' gutterBottom component={'div'}>
                  {menu.name}
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

import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Typography, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
      <Box sx={{textAlign: 'center', "& h3" : {fontWeight: 'bold'}, "& p": {textAlign: 'center', fontSize: 20}} }>
        <Typography variant='h3' sx={{py: '25px'}}>
          Contact My Restaurant
        </Typography>
        <Typography variant='p'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fuga dicta maxime, explicabo id, veniam, eius eum adipisci fugit sunt sequi in consequuntur numquam laboriosam impedit enim saepe dolorum nulla.
          </p>
        </Typography>
      </Box>
      <Box>
        <TableContainer component={Paper} sx={{display: 'flex', justifyContent: 'center'}}>
          <Table aria-label='contact table' sx={{width: '60%', boxShadow: 5, marginBottom: 7, "&media (max-width: 600px)": {width: '300px'}}} >
            <TableHead>
              <TableRow>
                <TableCell sx={{textAlign: 'center', fontSize: 22, backgroundColor: 'black', color: 'white'}}>
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{textAlign: 'center'}}>
                  <SupportAgentIcon sx={{pt: 2, pr: 1, color: 'red'}}/> 1234567890 (toll free)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{textAlign: 'center'}}>
                  <EmailIcon sx={{pt: 2, pr: 1, color: 'blue'}}/> help@myrestaurant
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{textAlign: 'center'}}>
                  <CallIcon sx={{pt: 2, pr: 1, color: 'green'}}/> 9649342323
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact

import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Typography, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';

const Contact = () => {
  return (
    <Layout>
      <Box>
        <Typography sx={{ textAlign: 'center', fontSize: '3rem' }}>
          <h4>Contact My Restaurant</h4>
        </Typography>
        <p style={{ textAlign: 'center', fontSize: '1.3rem' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate commodi doloremque quidem iste officiis explicabo dolor. Eos porro neque quisquam quibusdam tempora obcaecati temporibus vitae tenetur cumque officia. Animi, dolorum!</p>
      </Box>
      <Box sx={{m: 7}}>
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow sx={{m: 5}}>
                <TableCell sx={{textAlign: 'center',backgroundColor: 'black', color: 'white',fontSize: '1.4rem'}}>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{}}>
                  <CallIcon sx={{ color: 'red', pt: 2, fontSize: '1.5rem' }} />1234567899 (toll free)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell  >
                  <MailIcon sx={{ color: 'skyblue', pt: 2, fontSize: '1.5rem' }} />1234567899 (toll free)
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

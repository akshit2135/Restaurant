import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Typography, TableContainer, Paper, Table, TableHead } from "@mui/material"

const Contact = () => {
  return (
    <Layout>
      <Box>
        <Typography variant='h4'>
          Contact My Restaurant
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fuga dicta maxime, explicabo id, veniam, eius eum adipisci fugit sunt sequi in consequuntur numquam laboriosam impedit enim saepe dolorum nulla.
        </p>
      </Box>
      <Box>
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              
            </TableHead>
            
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact

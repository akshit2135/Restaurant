import React from 'react'
import Layout from '../components/layout/Layout'
import {Box, Typography} from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my: 15,
        textAlign: 'center',
      }}>
      <Typography variant = 'h4' sx={{marginBottom: '30px'}}>
        Welcome To My Restaurant
        </Typography>
        <p style={{fontSize: '20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ducimus eaque, fuga reprehenderit incidunt corporis. Deserunt, unde eligendi perspiciatis et totam minus facilis dicta doloribus beatae, molestiae id natus. Dolores velit laborum officia impedit reprehenderit, minus delectus culpa quos eos ipsa laudantium tenetur illum. Voluptate cupiditate dignissimos quod eius molestiae quo autem numquam magni velit quibusdam facilis perferendis dolorem libero, ipsam dolores, placeat ut cum illum accusamus ab distinctio, delectus impedit. Repellendus ullam voluptate, ipsum veritatis esse consequatur ipsa officia, dolore excepturi totam explicabo fugiat nihil dolores doloremque odio tempore. Praesentium facere corrupti dicta unde nulla error explicabo enim corporis.</p>
        <br />
        <p style={{fontSize: '20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi culpa id, consectetur quis quasi tenetur reprehenderit sit iste numquam minima! Sed facere beatae, velit officia ad quibusdam, consectetur delectus dolore aspernatur, ex nemo? Nobis quasi facere expedita exercitationem dignissimos dolor sit, deleniti fuga explicabo temporibus neque ut nostrum perferendis ea, id eius optio, laborum cum iure quaerat! Et mollitia porro eligendi, deserunt eos sed. Autem dignissimos quam debitis, maxime explicabo assumenda atque nemo accusantium, nobis reiciendis veniam, commodi impedit dolores sed accusamus. Ducimus, minima magni voluptas dicta illo atque laboriosam officia provident facere, expedita sit quidem deleniti nesciunt itaque eius!</p>
      </Box>
    </Layout>
  )
}

export default About

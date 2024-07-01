import React from 'react'
import './Menu.css'
import {Typography, Button, Card,  CardContent, CardMedia, Grid, Container} from '@mui/material'
import M1 from '../../assets/m1.png'
import M2 from '../../assets/m2.png'
import M3 from '../../assets/m3.png'
import M4 from '../../assets/m4.png'
import M5 from '../../assets/m5.png'
import M6 from '../../assets/m6.png'
import M7 from '../../assets/m7.png'
import M8 from '../../assets/m8.png'

import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from "react";

const Menu = () => {

     useEffect(() => {
        AOS.init({
            duration:2000,
            delay: 100,
        })
    }, []);

  return (
    <>
      <Typography variant='h3' align='center' style={{marginTop: '30px'}}>McRuff Offers</Typography>

      <Container>
          <Grid container spacing={2} marginTop='20px'>

              {/* Item#1 */}
              <Grid item padding='20px 0' xs={12} sm={6} md={4}>
                  <div className="animation" data-aos="slide-left">
                      <Card height='100%' display='flex' direction='column'>
                          <CardMedia component='img' image={M1} height='200px' object-fit='cover' width='100%'/>
                          <CardContent align='center'>
                              <Typography variant='h5' align='center'>Hot N' Crispy</Typography>
                              <Button variant='contained' size='small' color='secondary'
                                      style={{marginTop: '12px'}} className='card-btn'>Order
                                  Now</Button>
                          </CardContent>
                      </Card>
                  </div>
              </Grid>

    {/* Item#2 */}
    <Grid item padding='20px 0' xs={12} sm={6} md={4}>
        <div className="animation" data-aos="slide-left">
            <Card height='100%' display='flex' direction='column'>
                <CardMedia component='img' image={M2} height='200px' object-fit='cover' width='100%'/>
                <CardContent align='center'>
                    <Typography variant='h5' align='center'>McChicken</Typography>
                    <Button variant='contained' size='small' color='secondary'
                            style={{marginTop: '12px'}} className='card-btn'>Order
                        Now</Button>
                </CardContent>
            </Card>
        </div>
    </Grid>

{/* Item#3 */}
              <Grid item padding='20px 0' xs={12} sm={6} md={4}>
                  <div className="animation" data-aos="slide-left">
                      <Card height='100%' display='flex' direction='column'>
                          <CardMedia component='img' image={M3} height='200px' object-fit='cover' width='100%'/>
                          <CardContent align='center'>
                              <Typography variant='h5' align='center'>Spicy McCrispy</Typography>
                              <Button variant='contained' size='small' color='secondary'
                                      style={{marginTop: '12px'}} className='card-btn'>Order
                                  Now</Button>
                          </CardContent>
                      </Card>
                  </div>
              </Grid>

              {/* Item#4 */}
              <Grid item padding='20px 0' xs={12} sm={6} md={4}>
                  <div className="animation" data-aos="slide-right">
                      <Card height='100%' display='flex' direction='column'>
                          <CardMedia component='img' image={M4} height='200px' object-fit='cover' width='100%'/>
                          <CardContent align='center'>
                              <Typography variant='h5' align='center'>Spicy Chicken Burger</Typography>
                              <Button variant='contained' size='small' color='secondary'
                                      style={{marginTop: '12px'}} className='card-btn'>Order
                                  Now</Button>
                          </CardContent>
                      </Card>
                      </div>
              </Grid>

              {/* Item#5 */}
              <Grid item padding='20px 0' xs={12} sm={6} md={4}>
                  <div className="animation" data-aos="slide-right">
                      <Card height='100%' display='flex' direction='column'>
                          <CardMedia component='img' image={M5} height='200px' object-fit='cover' width='100%'/>
                          <CardContent align='center'>
                              <Typography variant='h5' align='center'>Filet-O-Fish</Typography>
                              <Button variant='contained' size='small' color='secondary'
                                      style={{marginTop: '12px'}} className='card-btn'>Order
                                  Now</Button>
                          </CardContent>
                      </Card>
                      </div>
              </Grid>

    {/* Item#6 */}
              <Grid item padding='20px 0' xs={12} sm={6} md={4}>
                  <div className="animation" data-aos="slide-right">
                      <Card height='100%' display='flex' direction='column'>
                          <CardMedia component='img' image={M6} height='200px' object-fit='cover' width='100%'/>
                          <CardContent align='center'>
                              <Typography variant='h5' align='center'>McArabia</Typography>
                              <Button variant='contained' size='small' color='secondary'
                                      style={{marginTop: '12px'}} className='card-btn'>Order
                                  Now</Button>
                          </CardContent>
                      </Card>
                  </div>
              </Grid>

          {/* Item#7 */}

              <Grid item padding='20px 0' xs={12} sm={6} md={4}>
                  <div className="animation" data-aos="slide-left">
                      <Card height='100%' display='flex' direction='column'>
                          <CardMedia component='img' image={M8} height='200px' object-fit='cover' width='100%'/>
                          <CardContent align='center'>
                              <Typography variant='h5' align='center'>Mini McArabia</Typography>
                              <Button variant='contained' size='small' color='secondary'
                                      style={{marginTop: '12px'}} className='card-btn'>Order
                                  Now</Button>
                          </CardContent>
                      </Card>
                  </div>
              </Grid>

              {/* Item#8 */}

              <Grid item padding='20px 0' xs={12} sm={6} md={4}>
                  <div className="animation" data-aos="slide-left">
                      <Card height='100%' display='flex' direction='column'>
                          <CardMedia component='img' image={M7} height='200px' object-fit='cover' width='100%'/>
                          <CardContent align='center'>
                              <Typography variant='h5' align='center'>Chicken Mac</Typography>
                              <Button variant='contained' size='small' color='secondary'
                                      style={{marginTop: '12px'}} className='card-btn'>Order
                                  Now</Button>
                          </CardContent>
                      </Card>
                  </div>
              </Grid>


          </Grid>
      </Container>


    </>
)
}

export default Menu

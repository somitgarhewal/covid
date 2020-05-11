import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'

const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
  if(!confirmed){
    return 'Loading...';
  }
  return(
    <div className = 'container'>
      <Grid container spacing={3} justify='center'>
        <Grid item component={Card} xs={12} md={3} className ='mt-3 ml-1  border border-primary'>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Infected</Typography>
            <Typography varaint='h5'> 
              <CountUp start={0} end = {confirmed.value} duration={3} separator=','/>
            </Typography>
            <Typography color='textSecondary'>Last updated on {new Date(lastUpdate).toDateString()} {new Date(lastUpdate).toLocaleTimeString()}</Typography>
            <Typography varaint='body2'>Number of active cases of COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className ='mt-3 ml-1  border border-success'>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Recovered</Typography>
            <Typography varaint='h5'>
            <CountUp start={0} end = {recovered.value} duration={3} separator=','/>
            </Typography>
            <Typography color='textSecondary'>Last updated on {new Date(lastUpdate).toDateString()} {new Date(lastUpdate).toLocaleTimeString()}</Typography>
            <Typography varaint='body2'>Number of recovered cases of COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className ='mt-3 ml-1  border border-danger'>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Deaths</Typography>
            <Typography varaint='h5'>
            <CountUp start={0} end = {deaths.value} duration={3} separator=','/>
            </Typography>
            <Typography color='textSecondary'>Last updated on {new Date(lastUpdate).toDateString()} {new Date(lastUpdate).toLocaleTimeString()}</Typography>
            <Typography varaint='body2'>Number of deaths caused by COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}
export default Cards
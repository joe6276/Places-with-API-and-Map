import react from 'react'
import GoogleMapReact  from 'google-map-react'
import {Paper,Typography,useMediaQuery} from '@material-ui/core'
import LocationOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab'

import useStyle from './styles'

 const Map =()=>{
     const classes= useStyle()
     const isMobile=useMediaQuery('(min-width:600px)')
     const coordinates ={lat:0 , lng :0}
     return(
         <div className={classes.mapContainer}>
            <GoogleMapReact

            bootstrapURLKeys={{key:'AIzaSyDuNaVCfaopi94aZ0KvgqISggGet0EHGVU'}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom ={14}
            margin= {[50, 50, 50, 50]}
            options={''}
            onChange={''}
            onChildClick={''}>

            </GoogleMapReact>

         </div>

     )
 }

 export default Map
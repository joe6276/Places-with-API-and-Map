import react,{useState} from 'react'
import {CircularProgress, Grid,Typography,InputLabel, MenuItem ,FormControl, Select} from '@material-ui/core'
import useStyle from './styles'
import PlaceDetails from '../PlaceDetails/PlaceDetails'
 const List =()=>{
     const classes= useStyle()
     const[type,setType]=useState('restaurant');
     const[rating,setRating]= useState('')
     const places =[
         {name:'Cool Place'},
         {name:'Cool Beer'},
         {name:'Cool Person'},
         {name:'Cool Jonathan'},
         {name:'Cool Ndambuki'},
         {name:'Cool Nzimbi'}
     ]

     return(
     <div className={classes.container}>
         <Typography valiant='h4'> Restaurant Hotel and Attraction around you </Typography>
         <FormControl className={classes.formControl}>
             <InputLabel>Type </InputLabel>
             <Select value={type} onChange={(e)=>setType(e.target.value)}>
                 <MenuItem value ="restaurants">Restaurants </MenuItem>
                 <MenuItem value ="hotel">Hotel</MenuItem>
                 <MenuItem value ="attraction">Attraction</MenuItem>
             </Select>
         </FormControl>

         <FormControl className={classes.formControl}>
             <InputLabel>Rating </InputLabel>
             <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
                 <MenuItem value ={0}>All</MenuItem>
                 <MenuItem value ={3.0}>Above 3.0 Stars</MenuItem>
                 <MenuItem value ={4.0}>Above 4.0 Stars</MenuItem>
                 <MenuItem value ={4.5}>Above 4.5 Stars</MenuItem>
             </Select>
         </FormControl>
         <Grid container spacing={3} className={classes.list}>
             {places?.map((place, i)=>(
                <Grid item key={i} xs ={12}>
                    <PlaceDetails place={place}/>
            </Grid> 
             ))}
         </Grid>

    </div>
)
 }

 export default List
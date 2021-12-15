import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


export default function BasicRating({handleRating}) {
  const [value, setValue] = React.useState(0);
  const handleChange=(event, newValue) => {
  
    handleRating(newValue);
  }
  
  
  return (
    <Box
      sx={{
        '& > legend': { mt: 0 },
      }}
    >
    
      <Rating
        name="simple-controlled"
        value={value}
        onChange={handleChange
        }
       style={{backgroundColor:"#221f1f",borderRadius:"50px",padding:"5px",marginLeft:"10px"}}
      />
    
    </Box>
  );
}

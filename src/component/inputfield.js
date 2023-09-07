import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import StraightenIcon from '@mui/icons-material/Straighten';
import QrCodeIcon from '@mui/icons-material/QrCode';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Typography from '@mui/material/Typography';


function inputfield(props) {
    return (
        <div className='barcode_section'>
            <h1 className='heading'>Barcode key form</h1>
            <Box >
            <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <Stack className='input_field'>
        <Typography>Barcode key</Typography>
           <TextField id="outlined-basic" label="Enter your key" variant="outlined" />         
      <Button variant="contained">Submit</Button>
    </Stack>
        </Grid>
        <Grid item  xs={12} md={6} className='list_grid'>
        <Stack className='list_wrapper'>
            <div className='heading_list'>
                <StraightenIcon sx={{ pr: 1 }}/>
                <Typography>Size</Typography>
            </div>
            <div className='sub_list'>
                <Typography sx={{ width: '100%' }}>98745120</Typography>
            </div>
      </Stack>
      <Stack className='list_wrapper'>
            <div className='heading_list'>
                <QrCodeIcon sx={{ pr: 2 }}/>
                <Typography>Code</Typography>
            </div>
            <div className='sub_list'>
                <Typography sx={{ width: '100%' }}>012456</Typography>
            </div>
      </Stack>
      <Stack className='list_wrapper'>
            <div className='heading_list'>
                <CalendarMonthIcon sx={{ pr: 2 }}/>
                <Typography>Date of Manufacture</Typography>
            </div>
            <div className='sub_list'>
                <Typography sx={{ width: '100%' }}>07/09/2023</Typography>
            </div>
      </Stack>
        </Grid>
        </Grid>
           
            
    </Box>
        </div>
    );
}

export default inputfield;
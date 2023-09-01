import React from 'react';
import AnimatedSlider from './AnimatedSlider';
import { Card, CardContent, Grid, IconButton, Typography } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const labelStyle = {
  fontWeight: 'bold',
  textAlign: 'left',
};

const CampaignSettings = ({ demo }) => {
  return (
    <Card
      sx={{
        height: '200px',
        width: '275px',
        padding: '10px',
        borderRadius: '8px',
        marginBottom: 0,
        boxSizing: 'border-box',
      }}
    >
      <CardContent>
        <Grid container sx={{ alignItems: 'center' }}>
          <Grid item xs={10}>
            <Typography sx={labelStyle}>New Movers</Typography>
          </Grid>
          <Grid item xs={2}>
            <IconButton>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <AnimatedSlider minLabel="1 month" maxLabel="2 years" demo={demo} />
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ color: 'gray', fontWeight: 'bold' }}>
              Update Selection
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CampaignSettings;

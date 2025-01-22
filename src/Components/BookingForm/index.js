import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, TextField, Grid, FormControl, InputLabel, Select, MenuItem, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { styled } from '@mui/system';
import backgroundImage from "../../assests/images/formbg.jpg";
import CloseIcon from '@mui/icons-material/Close';

const FormContainer = styled(Box)({
  width: '100%',
  maxWidth: '600px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent background for the form
  padding: '30px',
  borderRadius: '10px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
  margin: '20px 0', // Adds top and bottom space
  backdropFilter: 'blur(10px)', // Optional: Adds a glass effect by blurring the background
});

const FullScreenForm = styled(Box)({
  width: '100vw',
  minHeight: '100vh', // Full viewport height
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: `url(${backgroundImage})`,
  opacity:'0.9',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  padding: '20px 20px', // Top and bottom padding to give the form some space
  boxSizing: 'border-box',
});

const BookingForm = () => {
  const [destination, setDestination] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  useEffect(() => {
    const header = document.querySelector('.HeaderWrapper');
    const nav = document.querySelector('nav');

    if (header) header.style.display = 'none';
    if (nav) nav.style.display = 'none';

    return () => {
      if (header) header.style.display = '';
      if (nav) nav.style.display = '';
    };
  }, []);

  return (
    <FullScreenForm>
      <FormContainer>
        <Typography variant="h4" gutterBottom>
          Book Your Travel Tour
        </Typography>
        <Button
          variant="outlined"
          onClick={() => window.close()}
          sx={{ mb: 2 }}
        >
          <CloseIcon/>
        </Button>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Full Name"
                fullWidth
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone Number"
                type="tel"
                fullWidth
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Destination</InputLabel>
                <Select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  variant="outlined"
                >
                  <MenuItem value="Paris">Paris</MenuItem>
                  <MenuItem value="New York">New York</MenuItem>
                  <MenuItem value="Tokyo">Tokyo</MenuItem>
                  <MenuItem value="Sydney">Sydney</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Departure Date"
                type="date"
                fullWidth
                required
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Return Date"
                type="date"
                fullWidth
                required
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Special Requests"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Payment Method</InputLabel>
                <Select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  variant="outlined"
                >
                  <MenuItem value="Credit Card">Credit Card</MenuItem>
                  <MenuItem value="PayPal">PayPal</MenuItem>
                  <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="I agree to the terms and conditions"
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
              >
                Book Now
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormContainer>
    </FullScreenForm>
  );
};

export default BookingForm;


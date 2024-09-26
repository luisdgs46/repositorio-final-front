import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PaypalButton from "./PayPalButton";
import Grid from '@mui/material/Grid2';

const Products = ({ products, activateEditMode, sendDataToDeleteProduct }) => {
  return (
    <div>
      <h1>AUTOS</h1>
      <Grid container spacing={3} sx={{ paddingLeft: 2, paddingRight: 2 }}>
        {products.map((product) => (

          <Grid size= "auto" key={product._id}>
            <Card
              sx={{

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                maxWidth: 345,
                margin: 'auto'
              }}>
              <CardMedia
                sx={{ height: 140, 
                  width: '100%',
                  objectFit: 'cover' }}
                image={product.imagen}
                title={product.nombre}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography 
                gutterBottom 
                variant="h5" 
                component="div"
                sx={{ 
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis', 
                  whiteSpace: 'nowrap' 
                }}
                >
                  {product.nombre}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Precio: ${product.precio}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', paddingBottom: 2  }}>
                <PaypalButton valor={product.precio} />

                {/* <Button size="small" onClick={() => activateEditMode(product)}>Editar</Button>
            <Button size="small" onClick={() => sendDataToDeleteProduct(product)}>Borrar</Button> */}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
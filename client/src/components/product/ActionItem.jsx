
import { Button, Box } from '@mui/material';

import clsx from 'clsx';



import { makeStyles } from '@mui/styles'

const useStyle = makeStyles({
    leftContainer: {
        minWidth: '40%',
        padding: '40px 0 0 80px',   
    },
    productImage: {
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '95%'
    },
    button: {
        width: '46%',
        borderRadius: 2,
        height: 50
    },
    addToCart: {
        background: 'red',
        color: '#FFF'
    },
    buyNow:{
        background: '#fb641b',
        color: '#FFF'
    }
});

const ActionItem = ( {product} ) => {

    const classes = useStyle()

    return (
        <Box className={classes.leftContainer}>
         
            <img src={product.product.detailUrl} className={classes.productImage} alt='hhhhh' /><br />
            <Button  className={clsx(classes.button, classes.addToCart)} style={{marginRight: 10}} variant="contained">Add to Cart</Button>
            <Button  className={clsx(classes.button, classes.buyNow)} variant="contained">  Buy Now</Button>
        </Box>
    )
}

export default ActionItem;
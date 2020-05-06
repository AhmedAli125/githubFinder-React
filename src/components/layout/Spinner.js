import React, { Fragment } from 'react'
import spinner from './spinnerGif.gif';

export const Spinner = () =>
    <Fragment >
    <
    img src = {
        spinner
    }
alt = 'loading...'
style = {
    {
        width: '200px',
        margin: 'auto',
        display: 'block'
    }
}
/> 
</Fragment>

export default Spinner
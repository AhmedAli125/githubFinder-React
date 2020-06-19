import React from 'react'

const alert = (isAlert) => {
    return (
        isAlert && (
            <div className='alert alert-info mt-2'>
                <p>
                    <i className='fa fa-info-circle'> Please Enter Some Text</i>
                </p>
            </div>
        )
    )
}

export default alert;

import React from 'react'
import { Button } from 'react-bootstrap'

const CustomButton = ({variant = 'primary', type = null, text}) => {
  return (
    <Button variant={variant} type={type}>{text}</Button>
  )
}

export default CustomButton
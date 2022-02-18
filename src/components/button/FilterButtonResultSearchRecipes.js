import React from 'react'
import CustomButton from './CustomButton'

const FilterButtonResultSearchRecipes = () => {
 
  const handleFilterButton = (e) => {
    console.log('e')
  }
  
  return (
    <CustomButton variant="outline-success" text='Filtrar dieta vegana' handleClickButton={handleFilterButton} />
  )
}

export default FilterButtonResultSearchRecipes
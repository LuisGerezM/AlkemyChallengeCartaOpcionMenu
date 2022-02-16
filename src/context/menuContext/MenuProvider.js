import React, { useState } from 'react'
import MenuContext from '.';

const MenuProvider = ({children}) => {

    const [showPage, setShowPage] = useState(0);




  return (
    <MenuContext.Provider value={{showPage, setShowPage}}>
        {children}
    </MenuContext.Provider>
  )
}

export default MenuProvider
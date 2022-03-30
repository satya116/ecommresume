import React, { createContext, useState } from 'react'

export const loginContext = createContext(null)

const ContextProvider = ({ children }) => {

    const [accountu, setAccountu ] = useState('')

  return (
    <>

    <loginContext.Provider
    value={{ accountu, setAccountu }}>
        {
            children
        }


    </loginContext.Provider>


    </>
  )
}

export default ContextProvider
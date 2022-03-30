import React, { Suspense } from 'react'

const SomeCompo = React.lazy(()=> import('./SomeCompo'))



const Pg =()=>{
    return(
        <>
        <div>
            <Suspense fallback={<h1>Loading...</h1>}>
                <SomeCompo />
            </Suspense>
        </div>





       


        </>
    )
}

export default Pg
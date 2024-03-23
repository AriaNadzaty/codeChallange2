import React from 'react'
import RandomUserPage from '../Api/fetch';


export default function Teams() {
  return (
    <><title>Teams</title>
     <div className="main">
        <h1 className=' text-center regular-32 text-blue-900 font-bold'>{'Hololive Member'}</h1>
        <RandomUserPage />
      </div>
    

    </>
  );
}
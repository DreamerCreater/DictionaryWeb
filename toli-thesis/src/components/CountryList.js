import React from 'react';

const CountryList = ({word=[]}) => {
  return (
    <>
    { word.map((data,index) => {
        if (data) {
          return (
            <div key={data.id}>
              <h1>{data.mhUg}</h1>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default CountryList
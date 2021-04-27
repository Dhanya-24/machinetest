import React from 'react'
import { Location } from './Location';
import "./Location.css";

export const LocationContainer = ():JSX.Element => {

  type locationListArray = {
    location:string;
    id:number;
  }

    const [locationList, setLocationList] = React.useState<locationListArray[]>(
        [
            {location: "chennai", id: 0}, 
            {location: "chennai", id: 1}
        ]
    );
  
    const handleAddLocation = (): void => {
      setLocationList([...locationList, {location: "chennai", id: locationList.length+1}])
    };
    
    const handleDelete = (itemId:number):void => {
      console.log("itemId",itemId);
      const items:locationListArray[] = locationList.filter((item:locationListArray) => item.id !== itemId);
      setLocationList(items);
      // setMinusIconVisibility(false);
   };
  
    return (
      <div>
          {
            locationList.map((row, index) => {
              return (
               <React.Fragment key={index}>
                  <Location 
                     handleDelete= {handleDelete}
                     id={row.id}
                  /> 
               </React.Fragment>
                              
              )
            })
          }
          <button onClick={handleAddLocation} className="sub-btn">Add NewLocation</button>
      </div>
    )
}
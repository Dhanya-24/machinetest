import React from "react";


interface IProps{
  handleDelete: (itemId:number) => void;
  id:number;
}

export const Location: React.FC<IProps> = (props: IProps) => {
  const { handleDelete,id } = props;

  const[minusIcon, setMinusIconVisibility]  = React.useState<boolean>(false);

    const handleMinusIconClick = ():void => {
      setMinusIconVisibility(false)
    }
  
    const handlePlusIconClick = ():void => {
      setMinusIconVisibility(true)
    }

    const handleLocationRemove = () => {
      setMinusIconVisibility(false);
    }
  
  return (
    <div className="location">
       <div className="location-header">
          <span>Location-{id} </span>
          {
            minusIcon ?  
            <i className="fa fa-minus" onClick={handleMinusIconClick}></i>
            :    
            <i className="fa fa-plus" onClick={handlePlusIconClick}></i>
          }  
        </div>
        {
          minusIcon &&  
              <div className="location-remove" onClick={handleLocationRemove}>
                <i className="fa fa-trash" onClick={() => handleDelete(id as number)}></i>
          </div>

        }
    </div>
  )
}

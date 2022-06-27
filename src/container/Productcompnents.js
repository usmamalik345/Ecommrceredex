
import React  from 'react'
import { useSelector} from "react-redux"


const Productcompnents = () => {
    const products = useSelector((state) => state.allProducts.products )
    


    const renderList = products.map((product)=>{
      const {id, image , title , price , Category} = product;
        return(
          <div className='four column  wide' key={id}>
          <div className='ui link cards '>
                  <div className="card">
                      <div className="image"> <img src={image} alt={title} srcset="" /> </div>
                      <div className="content">
                          <div className="header">
                                  {title}
                          </div>
                          <div className="meta price"> $ {price }</div>
                          <div className="meta"> { Category}</div> 
                      </div>
                  </div>
  
            </div>
  
      </div>
        );
    })
  return (
    <>
    {renderList}
    </>
  )
}

export default Productcompnents
import React from 'react'
import 'boxicons'
import star from './img/star.png'
import './Food.css'


const Food = ({description,id,strMealThumb, strMeal,ratings}) => {
  
  
function truncate(str,n){
  return str?.length > n ? str.substr(0, n-1) + "..." : str;
}   

    return (
      <div className="food__container ">
            <div className="card bg-light ">
                <img src={strMealThumb} className="card-img-top img-fluid rounded-end " alt={strMeal} style={{width:'500px'}}/>
              <div className="card-body">
            <h5 className="card-title">{strMeal}</h5>
            <p className="card-text">{truncate(description,70)}</p>
            <p>{ratings}</p>
            {/* <div className="food__boxcon" >
                  <div className='food_starrating'>
                  <img src={star}/>
                  <img src={star}/>
                  <img src={star}/>
                  <img src={star}/>
                  </div>
                  <div  className="plus__icon">
                     <box-icon name='plus'></box-icon>
                  </div>
                
            </div> */}
      </div>
    </div>
      </div>
      
    )
}

export default Food
{/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAKklEQVRIiWNgGAWjAA38h+JRC0YtIN4gUvHgsYCQxTQDoxaMAAtGwRAEAEy7M80e2ZHnAAAAAElFTkSuQmCC"/> */}
import React,{useState, useEffect} from 'react'
import 'boxicons'
import star from './img/star.png'
import greyStar from './img/grey.png'
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
            
<div>
     {
      ratings? (
        <div style={{display:'flex'}}>
          <div>{
                ([...Array(ratings)].map((item,index)=><img src={star} key={index} style={{width:'10px', height:'10px'}}/>))
                }
          </div>
          <div>
          {
          ([...Array(5-ratings)].map((item,index)=><img src={greyStar} key={index} style={{width:'10px',height:'10px'}}/>))
          }
          </div>
          </div>
          ):null
            }
          
            </div>
           
      </div>
    </div>
      </div>
      
    )
}

export default Food
{/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAKklEQVRIiWNgGAWjAA38h+JRC0YtIN4gUvHgsYCQxTQDoxaMAAtGwRAEAEy7M80e2ZHnAAAAAElFTkSuQmCC"/> */}
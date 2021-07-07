import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Food from './Food'
import './Food.css'



const URL = 'https://asm-dev-api.herokuapp.com/api/v1/food'
const Items = () => {
    const [menu, setMenu] = useState([])
    const fetchData =async ()=>{
        const response = await axios.get(URL)
        setMenu(response.data.data.meals)
        
        return response
    }
   

    useEffect(()=>{
        fetchData()
    },[URL])

    
    return (
        <div className='container'>
        
           {menu.map((food)=>{
               const {description,id,strMealThumb, strMeal} = food
               return (
                        <div className='container__item ' key={id} >
                            <Food key={id} {...food}/>
                        </div>
                   
                   
               )
           })}
        </div>
    )
}

export default Items

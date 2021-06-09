import React from 'react'
import Img from './../../Assets/user-picture.png'
const Card2 = (props) => {
    if(props.data===undefined){
        return(<div>
        </div>)
    }
    else{
    return (
        <div className="w-full h-96 ">
                <div className=" shadow-xl rounded-lg" style={{background:'rgba(185,171,149,255)'}}>
                <img className="h-1/2 w-full"src={Img} alt="couldn't load"/>
                <div className="text-white">
                    <div className="font-8xl uppercase font-bold">{props.data.name}</div>
                </div>
                </div>
        </div>
    )
    }
}

export default Card2
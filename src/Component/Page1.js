import React,{useState} from 'react'
import _ from 'lodash'
import Card from './../Component/Card/Card'
import Slider from 'react-input-slider';
import { Link } from 'react-router-dom';
function Page1() {

    const [Range,setRange]=useState(4000)
    const person=require('./../Files/people.json')
    const [Person,setPerson]=useState(person)
    const ChangeData=(value)=>{
        const data=_.filter(person,function(prsn){
            return prsn.balance.substr(1).replace(",","")<=value
        })
        setPerson(data)
        setRange(value)
    }
    const CardGetter=()=>{
        return Person.map(prsn=>{
            return <Card data={prsn} key={prsn._id} />
        })
    }
    return (
        <div>
        <Slider 
            axis="x"
            x={Range}
            xstep={100}
            xmin={1000}
            xmax={4000}
            onChange={({x})=>ChangeData(x)}
        />
        <div className="flex justify-center text-center">$1000-${Range}</div>
        <div className="h-full w-full grid">
        <div className="pt-3 gap-x-3 gap-y-3 grid grid-cols-4 ">
        {CardGetter()} 
        </div>
        </div>
        <div className="flex justify-center"/>
            <button className="rounded-full text-xl text-center m-6 p-3 font-bold bg-yellow-300 text-purple-700"><Link to="/Page2">Page 2 </Link> </button>
        </div>
    )
}
export default Page1

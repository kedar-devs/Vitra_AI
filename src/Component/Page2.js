import React, { useState, useEffect } from 'react'
import Card from './../Component/Card/Card2'
import { Link } from 'react-router-dom'
import _ from 'lodash'
function Page2() {
    const [Amigo, SetAmigo] = useState([])
    useEffect(() => {
        const persons = require('./../Files/people.json')
        console.log(persons)
        const data = _.filter(persons, function (person) {
            console.log(parseInt(person.balance.substr(1)))
            return person.isActive === false && person.balance.substr(1).replace(",", "") < 2000
        })
        console.log(data)
        SetAmigo(data)
    }, [])
    const CardGetter=(friends)=>{
        return friends.map(friend=>{
            return <Card data={friend} key={friend._id} />
        })
    }
    const DetailDisplay = () => {
        return Amigo.map(person => {
               return(
                   <div>
               <h1 className="font-bold text-xl capitalize underline mt-7">This are the friends of {person.name}</h1>
               <div className="pt-3 gap-x-3 gap-y-3 grid grid-cols-4 ">
                    {CardGetter(person.friends)}
               </div>
               </div> 
               )

            //  return person.friends.map(friend => {
            //     return <Card data={friend} key={friend._id} />
            // })
        })
    }
    return (
        <div>
            <div className="h-full w-full grid">
                    {DetailDisplay()}
            </div>
            <button className="rounded-full text-xl text-center m-6 p-3 font-bold bg-yellow-300 text-purple-700"><Link to="/">Page 1 </Link> </button>
        </div>
    )
}

export default Page2

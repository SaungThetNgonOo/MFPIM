import React, { useState } from "react";
import './Q&A.css'
function QuesAns(){

const [selected,setSelected]=useState(null)
const toggle=(i)=>{
    if(selected === i){
        return setSelected(null)
    }
    setSelected(i)
}
const data=[
    {
        question:"What is the most beautiful place in Myanmar?",
        answer:`Famed for its stunning Pagodas and rich culture, Myanmar has a 
                plethora of places that are a definition of beauty like Scenic 
                Shan State, floating gardens of Inle Lake and the historical 
                buildings. If you are wondering which is the most beautiful 
                place in Myanmar, then Shwedagon Pagoda will top the list as 
                it looks mesmerizingly beautiful at night.`
    },{
        question:"Is Myanmar safe to travel?",
        answer:`There are a lot of ethnic issues going on in Myanmar but this 
                Southeast Asian country is absolutely safe for tourists. There 
                are some areas like the northern parts of Shan State, Southern 
                Chin and Rakhine state where tourists are not allowed but all 
                the other popular places to visit in Myanmar and the impeccable 
                hotels are completely safe.`
    },{
        question:"What is Myanmar famous for?",
        answer:`Myanmar is a beautiful country dotted with several thousands of 
                Buddhist pagodas. Also, it houses various serene white beaches, 
                diverse landscapes, and is enriched with flora and fauna.
                Myanmar is famous for sand paintings, gems, pearls and much more.`
    },{
        question:"What is the best month to visit Myanmar?",
        answer:`The best time to visit Myanmar is between November and February 
            as the weather is pleasant and you can easily roam around the country. 
            You can enjoy your vacation to the fullest in these months as the weather 
            is not hot but cool breezes blow throughout the country.`
    },{
        question:"Is Myanmar travel expensive?",
        answer:`If the total numbers of people traveling to Myanmar are two then the 
        total cost for traveling and staying for a week will come out to be MMK 
        1,298,448 which is INR 70,500 appx. So, the destination is not that expensive. 
        If you are on a budget crunch, then you can plan your vacation for lesser 
        number of days.`
    }
]

return(
    <div className="wrapper">
        <div className="accordian">
            {data.map((item,i)=>(
                <div className="item">
                    <div className="title" onClick={()=>toggle(i)}><h6>{item.question}</h6>
                        <span>{selected === i ? '-' : '+'}</span>
                    </div>
                    <div className={selected===i ?"content show": "content"}>{item.answer}</div>
                </div>
            ))}
        </div>
    </div>
)
}
export default QuesAns
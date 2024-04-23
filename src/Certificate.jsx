
const Certificate =()=>{

    const certi=[
        {
            id:1,
            skill:"C,C++"
        },
        {
            id:1,
            skill:"Java Full Stack"
        },
       
    ]
return(<>
<div className="flex flex-col py-8 bg-slate-900 text-white text-opacity-85 md:py-20 " id="certification" > 
    <h1 className="text-center underline text-3xl py-4 font-bold text-white text-opacity-80 " id="certification">CERTIFICATIONS</h1>
    <ul className="flex  flex-col justify-around  w-[70%] mx-auto">
       {certi.map((m)=>{
        return(<><li className="list-inside list-disc text-white text-[18px] md:text-[22px] py-1 " >{m.skill}</li></>)
       })}
    </ul>
</div>
</>)
}

export default Certificate;
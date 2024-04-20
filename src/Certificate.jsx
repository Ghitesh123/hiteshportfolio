
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
<div className="flex flex-col py-8 bg-black text-white" id="certification" > 
    <h1 className="text-center text-3xl py-4" id="certification">CERTIFICATIONS</h1>
    <ul className="flex  flex-col justify-around  w-[70%] mx-auto">
       {certi.map((m)=>{
        return(<><li className="list-inside list-disc text-white text-[18px] py-1 " >{m.skill}</li></>)
       })}
    </ul>
</div>
</>)
}

export default Certificate;
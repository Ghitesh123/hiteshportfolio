
const Resume=()=>{
    
    const data=[
        {
        projectName:"STATESTREET",
        line1:" Designed, developed, and maintained enterprise-class mission-critical web applications for Wealth and Trust business domain",
        line2:"Wrote high-quality code with a high level of test coverage ensuring compliance with company policies, vulnerability management and technology updates, Software Development Life-cycle policies, procedures, and standards.",
        line3:"Conducted regular code reviews to ensure adherence to coding standards and best practices",
        line4:"Developed specifications for technical requirements by using case models, data models, and software architecture models. ",
    },
    {
        projectName:"HOMEDEPOT",
        line1:" Collaborated with business teams to review, analyze, design, and implement solutions    that meet the business needs; ensure documentation on architecture,processes, and systems    changes are up to date.",
        line2:"Led efforts in enhancing and maintaining Java-based functionalities within the application.",
        line3:" Collaborated with the development team to optimize Java code, ensuring optimal application performance.",
        line4:"Educated new and existing team members on project specifics, various technologies, approaches, and architectures.",
    },
    ]
    
    return(

       
        <>
        <div className=" py-11 bg-slate-950 md:py-20" id="resume">
        <h1 className="text-center text-3xl md:text-5xl  font-bold pb-4 text-white text-opacity-80">MY RESUME</h1>
        <h1 className="text-center text-[20px] md:text-3xl
  font-bold pb-4 text-white text-opacity-80">I like to challenge my limits, and never miss an opportunity.
        </h1>
        <hr className="bg-black h-1 w-[10%] mx-auto"/>
            <h1 className="text-center text-3xl underline font-bold py-10 text-white text-opacity-80">WORK EXPERIENCE</h1>
            <div className="">
                
<div className="w-[100%] flex flex-col bg-slate-950 mx-auto text-[18px] md:text-2xl md:w-[80%] md:flex space-y-4 p-4 text-white text-opacity-75">
    
    {data.map((m)=>{
        return(<>
            <h1 className="text-2xl py-4 font-extrabold bg-slate-800  pl-3">{m.projectName}</h1>
            <li className="font-semibold">{m.line1}</li>
            <li className="font-semibold">{m.line2}</li>
            <li className="font-semibold">{m.line3}</li>
            <li className="font-semibold">{m.line4}</li>
            </> 
        )
    })}
</div>
        </div>
        </div>
        </>
    )
}

export default Resume;
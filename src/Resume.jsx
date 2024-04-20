
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
        line1:" Collaborated with business teams to review, analyze, design, and implement solutions that meet the business needs; ensure documentation on architecture, processes, and systems changes are up to date.",
        line2:"Led efforts in enhancing and maintaining Java-based functionalities within the application.",
        line3:"• Collaborated with the development team to optimize Java code, ensuring optimal application performance.",
        line4:"Educated new and existing team members on project specifics, various technologies, approaches, and architectures.",
    },
    ]
    
    return(

       
        <>
        <div className=" bg-teal-500 p-4" id="resume">
        <h1 className="text-center text-3xl md:text-5xl  font-bold pb-4">MY RESUME</h1>
        <h1 className="text-center md:text-2xl  font-bold pb-4">I like to challenge my limits, and never miss an opportunity.
        </h1>
        <hr className="bg-black h-1 w-[10%] mx-auto"/>
            <h1 className="text-center text-3xl underline font-bold py-10">WORK EXPERIENCE</h1>
            <div className="">
                
<div className="w-[100%] flex flex-col bg-teal-100 mx-auto text-[17px] md:w-[80%] md:flex space-y-4 p-4 text-blue-950">
    
    {data.map((m)=>{
        return(<>
            <h1 className="text-2xl py-4 font-extrabold bg-green-200 pl-3">{m.projectName}</h1>
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

const Project=()=>{
    const sdata=[
        {
            icon:"fa-brands fa-java",
            brand:"Java",
            title:"what is java and how java work who developer java",
            id:1
        },
        {
            icon:"fa-brands fa-instagram",
            brand:"Instagram",
            title:"what is insta and how insta work who developer insta",
            id:2
        },
        {
            icon:"fa-brands fa-youtube",
            brand:"Youtube",
            title:"what is youtube and how youtube work who developer youtube",
            id:1
        },
        {
            icon:"fa-brands fa-youtube",
            brand:"Youtube",
            title:"what is youtube and how youtube work who developer youtube",
            id:1
        },
        {
            icon:"fa-brands fa-youtube",
            brand:"Youtube",
            title:"what is youtube and how youtube work who developer youtube",
            id:1
        },
        {
            icon:"fa-brands fa-youtube",
            brand:"Youtube",
            title:"what is youtube and how youtube work who developer youtube",
            id:1
        },
        {
            icon:"fa-brands fa-youtube",
            brand:"Youtube",
            title:"what is youtube and how youtube work who developer youtube",
            id:1
        },
    ]
    return(
        <>
        <div className="bg-purple-300 p-5" id="project">
        <h1 className="text-center text-3xl md:text-5xl  font-bold pb-4">MY PROJECTS</h1>
        <h1 className="text-center md:text-2xl  font-bold pb-4">My portfolio keeps expanding over time to better address even more challenges.

        </h1>
        <hr className="bg-black h-1 w-[10%] mx-auto my-10"/>
        <div className="main   bg-purple-500   py-4 md:p-6  gap-7 flex flex-col  md:w-full h-auto md:flex md:flex-row md: flex-wrap lg:flex-wrap lg:justify-evenly   md:h-auto   items-center  ">

               {sdata.map((m)=>{
                return(<>
                 <div  className="w-[70%] mx-auto h-[70%] rounded-md md:w-80 md:h-auto bg-blue-300    flex flex-col py-1 text-center justify-center items-center border-solid border-sky-300 border-2 hover:bg-yellow-100 hover:cursor-pointer">
                 <div className="text-3xl md:text-5xl"><i  class={m.icon}></i></div>
                <h1 className=" text-1xl md:text-3xl underline font-bold ">{m.brand}</h1>
                <p className="p-4">{m.title}</p>
                </div>
                </>)
               })}
         
         </div>
        </div>
        </>
    )
}

export default Project;
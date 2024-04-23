
const Project=()=>{
    const sdata=[
        {
         
            brand:"Java Backend",
            title:"created Rest API for student database mangement",
            glink:"https://github.com/Ghitesh123/CrudOperationUsingRestApiStudentDatabase/tree/master/StudentDatabase",
            id:1
        }
    ]
    return(
        <>
        <div className=" p-11 bg-slate-900 text-opacity-80 md:py-20" id="project  ">
        <h1 className="text-center text-3xl md:text-5xl  font-bold pb-4 text-white text-opacity-80">MY PROJECTS</h1>
        <h1 className="text-center text-[20px] md:text-3xl  font-bold pb-4 text-white text-opacity-80">My portfolio keeps expanding over time to better address even more challenges.

        </h1>
        <hr className="bg-black h-1 w-[10%] mx-auto my-10"/>
        <div className="main   bg-slate-900   py-4 md:p-6  gap-7 flex flex-col  md:w-full h-auto md:flex md:flex-row md: flex-wrap lg:flex-wrap lg:justify-evenly   md:h-auto   items-center  ">

               {sdata.map((m)=>{
                return(<>
                 <div  className="w-[70%] mx-auto h-[70%] rounded-md md:w-80 md:h-auto bg-slate-950  flex flex-col py-1 text-center justify-center items-center border-solid text-white border-sky-300 border-2 hover:bg-white hover:duration-300 hover:text-black hover:cursor-pointer">
               
                <h1 className=" text-[25px] md:text-3xl underline font-semibold   ">{m.brand}</h1>
                <p className="p-4 text-[18px] md:text-2xl font-semibold">{m.title}</p>
                <div className="text-4xl md:text-3xl "><a className="p-1 hover:bg-green-500 hover:text-white hover:duration-300 hover:rounded-full mb-1" href={m.glink} target="_blank" ><i class="fa-solid fa-link"></i></a></div>

                </div>
                </>)
               })}
         
         </div>
        </div>
        </>
    )
}

export default Project;
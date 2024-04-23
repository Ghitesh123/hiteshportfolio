
const Contact =()=>{

    const Links=[
        {
            id:1,
            link:"mailto:hiteshsuryawanshi70@gmail.com",
            title:"hiteshsuryawanshi7s0@gmail.com",
            icon:"fa-solid fa-envelope text-3xl"
            
        }, {
            id:1,
            link:"mailto:hiteshsuryawanshi80@gmail.com",
            title:"hiteshsuryawanshi80@gmail.com",
            icon:"fa-brands fa-linkedin text-3xl"
        },
        {
            id:1,
            link:"mailto:hiteshsuryawanshi80@gmail.com",
            title:"hiteshsuryawanshi80@gmail.com",
            icon:"fa-brands fa-github text-3xl"
        },
        {
            id:1,
            link:"tel:9158447338",
            title:"9158447338",
            icon:"fa-solid fa-mobile-screen-button text-3xl"
            
        },
   
      
    ]
return(<>
<div className=" bg-stone-900 h-auto text-white text-opacity-80 md:py-20 py-11" id="contact">
<h1 className="text-center underline text-3xl py-4 font-bold text-white text-opacity-80 ">CONTACT ME
</h1>
    <div className="flex flex-wrap justify-center items-center gap-4 py-7">
   {Links.map((m)=>{
    return(<div className="rounded-full md:py-3 bg-black text-white w-[80px] p-2 hover:bg-white hover:text-black  hover:duration-300 " ><a  className="flex justify-center items-center " href={m.link} target="_blank" title=""><i class={m.icon}></i></a></div>)
   })} 
    </div>
    <h1 className="text-center  text-3xl py-4 font-semibold text-white text-opacity-80">Written & Coded by Hitesh Suryawanshi
</h1>
</div>
</>)
}

export default Contact;
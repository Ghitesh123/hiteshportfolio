import profileImage from './assets/crop1.jpeg'
const About=()=>{
    return(<>
    <div className=' w-full h-full md:h-auto lg:h-[750px] flex flex-col-reverse justify-between items-center p-11 md:flex md:flex-col-reverse md:items-center md:justify-start  md:py-12  lg:flex lg:flex-row lg:items-start lg:pt-30   bg-slate-950' id='about'>

        {/* About  */}
        <div className='w-full flex justify-center items-center ] ' >
            <div className='w-full p-4 md:w-full  space-y-6 pt-12 text-center'>
            <h3 className='text-3xl  text-white md:text-4xl text-opacity-80'>"Hello, I'm Hitesh Suryawanshi,</h3>
            <h1 className="text-4xl text-white font-semibold md:text-[48px] text-opacity-80 ">I am a Java developer</h1>
            <p className='text-white text-opacity-80 text-[18px] md:text-2xl '>a results-oriented Java Developer with 2.5 years of hands-on experience in designing, developing, and maintaining enterprise-grade applications. My journey in the realm of software development has been marked by a relentless pursuit of excellence and a passion for creating impactful solutions. Proficient in Java programming language, I specialize in leveraging technologies such as Spring Boot, Hibernate, and RESTful Web Services to deliver robust, scalable, and high-quality software products. With a collaborative mindset and a knack for problem-solving, I thrive in dynamic environments, working seamlessly with cross-functional teams to achieve business objectives. My dedication to continuous learning and growth fuels my drive to innovate and excel, making me a valuable asset for any project or team.</p>
            </div>
        </div>

        {/* image */}
        <div className='w-1/2 flex justify-start items-center pt-5 '>
           <div className='w-full '>
           <img   className="sm:h-40 md:h-60 lg:h-80  mx-auto "src={profileImage} alt="" />
           </div>
           
        </div>
    </div>
    </>)
}
export default About;

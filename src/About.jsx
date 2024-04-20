import profileImage from './assets/crop1.jpeg'
const About=()=>{
    return(<>
    <div className=' w-full flex flex-col-reverse md:flex md:flex-row md:py-10  bg-blue-900'>

        {/* About  */}
        <div className='w-full flex justify-center items-center'>
            <div className='w-full p-2 md:w-2/3 space-y-5 pt-7 text-center'>
            <h3 className='text-1xl text-pink-300 md:text-2xl'>"Hello, I'm Hitesh Suryawanshi,</h3>
            <h1 className="text-2xl text-white font-bold md:text-5xl">I am a Java developer</h1>
            <p className='text-pink-300 font-bold text-1xl'>a results-oriented Java Developer with 2.5 years of hands-on experience in designing, developing, and maintaining enterprise-grade applications. My journey in the realm of software development has been marked by a relentless pursuit of excellence and a passion for creating impactful solutions. Proficient in Java programming language, I specialize in leveraging technologies such as Spring Boot, Hibernate, and RESTful Web Services to deliver robust, scalable, and high-quality software products. With a collaborative mindset and a knack for problem-solving, I thrive in dynamic environments, working seamlessly with cross-functional teams to achieve business objectives. My dedication to continuous learning and growth fuels my drive to innovate and excel, making me a valuable asset for any project or team.</p>
            </div>
        </div>

        {/* image */}
        <div className='w-full flex justify-start items-center pt-5'>
           <div className='w-full'>
           <img   className="h-40 md:h-80  mx-auto"src={profileImage} alt="" />
           </div>
        </div>
    </div>
    </>)
}
export default About;

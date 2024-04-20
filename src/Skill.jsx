import BootImg from "./skills/bootstrap.png";
import css3Img from "./skills/css3.png";
import eclipseImg from "./skills/eclipse.png";
import githubImg from "./skills/github.png";
import hibernateImg from "./skills/hibernate.jpg";
import html5Img from "./skills/html5.png";
import javaImg from "./skills/java.png";
import mavenImg from "./skills/maven.png";
import mysqlImg from "./skills/mysql.png";
import springImg from "./skills/spring.png";
import tomcatImg from "./skills/tomcat.png";
import vscodeImg from "./skills/vscode.png";





const Skill=()=>{

    const Images=[
        {
            img:javaImg,
            title:"Java",
            id:1
        },
        {
            img:springImg,
            title:"Spring",
            id:1
        },
        {
            img:mysqlImg,
            title:"Mysql",
            id:1
        },
        {
            img:hibernateImg,
            title:"Hibernate",
            id:1
        },
        {
            img:BootImg,
            title:"Bootstrap",
            id:1
        },
        {
            img:css3Img,
            title:"CSS",
            id:1
        },
        {
            img:githubImg,
            title:"Git",
            id:1
        },
        {
            img:mavenImg,
            title:"Maven",
            id:1
        },
        {
            img:eclipseImg,
            title:"Eclipse",
            id:1
        },
        {
            img:html5Img,
            title:"HTML",
            id:1
        },  {
            img:tomcatImg,
            title:"Tomcat",
            id:1
        },
        {
            img:vscodeImg,
            title:"vscode",
            id:1
        },
    ]
    return(<>
    <div className="w-full bg-blue-950  " id="skill">
        <h1 className="text-center underline text-3xl bg-slate-600 py-4 font-bold">SKILLS</h1>

<div className="flex flex-wrap justify-center items-center sm:w-full md:w-[60%]  mx-auto py-5">
    { Images.map((m)=>{
            return(<div className="w-[100px] h-[100px] md:w-[160px] md:h-[130px] flex flex-col justify-center items-center hover:bg-black hover:text-white text-1xl rounded-md"><img className="block w-[65%] h-[60%] md:w-[50%] mx-auto pt-2 rounded-sm transition:700 hover:animate-spin " src={m.img} alt="" />
            <p className="text-center text-white hover:text-white ">{m.title}</p>
            </div>)
        })}

</div>
    </div>
    </>)
} 

export default Skill;
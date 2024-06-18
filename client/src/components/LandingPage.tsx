import { useLayoutEffect , useRef , useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
import campusSpace from '../assets/Campus-space-Logo.png'
import gsap from "gsap"
const LandingPage = () => {
    
  
       const {pathname} = useLocation();
        useEffect(() => {      
        window.scrollTo(0, 0);
      }, [pathname]);
  
      // for animation  of the text " welcome to campus space"
    const textRef = useRef(null)

    useEffect(() => {      
        window.scrollTo(0, 0);
      }, [pathname]);


      useLayoutEffect(() => {
        

          const t1 = gsap.timeline()
          t1.from("#left-text",{
            opacity:0,
            scrollTrigger:{
              trigger:'#item',
              start:'center 40%', 
              // markers:true,
            scrub:2,
             pin:true,  
            },
            duration:1,
          
          })
      },[])
      
    const content = [
        {
        
        para:" Campus Space is a cutting-edge solution tailored for institutions to streamline the management of their classrooms. It empowers both students and teachers with the tools they need to effortlessly check room availability, ensuring that vacant rooms are efficiently utilized."
        }, 
         {
         
         para:"Campus Space provides up-to-the-minute information on room availability, allowing users to quickly find and reserve vacant rooms. This dynamic feature helps in reducing scheduling conflicts and optimizes the use of institutional resources."
          },
          {
           
           para:"Teachers can log into their accounts to book available rooms with just a few clicks. This intuitive booking system is designed to save time and reduce the hassle of finding a suitable room for classes, meetings, or events."
            },
            {
           
             para:"An admin manages the data on a daily basis, ensuring that all information is current and accurate. This role is crucial for maintaining the reliability of the system and providing users with the most up-to-date room availability."
             },
             {
              
                para:"Students can easily access their timetables through Campus Space, offering them a clear view of their daily schedules. This feature helps students stay organized and manage their time more effectively."
             },
             {
                
                para:"Campus Space keeps students informed about teacher absences, so they can adjust their plans accordingly. This transparency helps in minimizing disruptions to the academic schedule and enhances overall communication within the institution."
             },
             {
                
                para:"With features like timetable access and absence notifications, Campus Space fosters better communication between students, teachers, and administrators. This seamless flow of information enhances the overall educational experience."
             },
]

 return (
   
    <div  ref={textRef}>
     <div id='item' className='relative justify-center w-screen'>
  <div>
    <img src={campusSpace} className='items-center object-cover w-[100%]' />
    <div id='left-text' className='absolute top-1/2 left-0 p-10 border backdrop-blur card rounded-lg shadow-md bg-black opacity-80'>
      <h1 className='font-bold md:text-xl lg:text-2xl'>
        <span className='text-green-500 text-4xl '> Campus space</span>  is a cutting-edge solution tailored for institutions to streamline the management of their classrooms. It empowers both students and teachers with the tools they need to effortlessly check room availability, ensuring that vacant rooms are efficiently utilized.
      </h1>
      
    </div>
  </div>
</div>  
 
 {/* <div id='#body' className='m-5 md:m-9 lg:m-14 flex flex-col items-center '>

       {
        content.map(({para}) => (
            <div  className='border  backdrop-blur card bg-black rounded-lg shadow-md p-4 top-1/2 mx-[10%] text-center m-2'>   
                <div className='text-2xl text-primary '></div>
                <div>{para}</div>
            </div>
        ))
       }

      
   
      </div>  */}
       </div>
        
 
  )
}

export default LandingPage

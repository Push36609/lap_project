// import styles from './Intro.module.css';
import React from 'react'

const Intro = () => {
  return (
     <div className="  w-full h-auto mt-2 pt-2">
          

      <div className="flex flex-wrap justify-evenly">
        
          <div className="m-[2%] w-[95%] min-w-90 bg-gradient-to-r from-purple-100 via-blue-100 to-green-100 h-70 rounded-2xl flex flex-col flex-wrap justify-evenly 
                          shadow-lg border-2 border-black
                          hover:scale-[(1.03)] hover:shadow-[0px_10px_24px_rgba(142,68,173,0.4)] hover:border-[#9b59b6]
                          max-[1024px]:w-[95%] max-[1024px]:h-auto max-[1024px]:flex max-[1024px]:flex-row max-[1024px]:justify-around max-[1024px]:items-center
                          max-[768px]:w-[95%] max-[768px]:h-auto max-[768px]:flex max-[768px]:flex-row max-[768px]:justify-around max-[768px]:items-center
                          max-[480px]:w-[95%] max-[480px]:h-auto max-[480px]:flex max-[480px]:flex-row max-[480px]:justify-around max-[480px]:items-center
                          max-[280px]:w-[95%] max-[280px]:h-90 max-[280px]:flex max-[280px]:flex-row max-[280px]:justify-around max-[280px]:items-center"  >
            <div >
              <img src="Dr.Saurabh kumar.png" alt="Dr.Saurabh kumar.png" className="w-52 h-60 object-cover flex flex-wrap items-center ml-5 my-2 rounded-2xl  
                                                                 max-[1024px]:w-56 max-[1024px]:h-60 max-[1024px]:ml-0
                                                                 max-[768px]:w-40 max-[768px]:h-48
                                                                 max-[480px]:w-32 max-[480px]:h-40 
                                                                 max-[280px]:w-24 max-[280px]:h-32
                                                                 "/>
            </div>

              <div className='ml-5 w-[70%]' >
                <h1 className="text-4xl text-black w-[70%]
                              max-[1024px]:text-4xl max-[1024px]:text-center
                              max-[768px]:text-3xl max-[768px]:text-center
                              max-[480px]:text-2xl max-[480px]:text-center
                              max-[280px]:text-xl max-[280px]:text-center"> <strong>Dr.Saurabh kumar Sharma</strong></h1>
                <h2 className="text-3xl text-black mb-2 w-[70%]
                               max-[1024px]:text-3xl max-[1024px]:text-center
                               max-[768px]:text-2xl max-[768px]:text-center
                               max-[480px]:text-2xl max-[480px]:text-center
                               max-[280px]:text-base max-[280px]:text-center">Assistent Profesor</h2>
                <p className="text-base text-gray-800 mb-3 mx-2 w-[70%]
                               max-[1024px]:text-2xl max-[1024px]:text-center max-[1024px]:w-[95%]
                               max-[768px]:text-xl max-[768px]:text-center 
                               max-[480px]:text-base max-[480px]:text-center
                               max-[280px]:text-sm max-[280px]:text-center">School of Computer & Systems Sciences
                                Jawaharlal Nehru University, New Delhi, INDIA
                                Ph.D. (Computational Neuroscience), Jawaharlal Nehru University, New Delhi, 2019.
                                M.Tech. (Computational & Systems Biology), Jawaharlal Nehru University, New Delhi, 2014.
                                B.Tech. (Computer Science and Engineering), Lovely Professional University, Punjab, 2012.</p>
                </div>
              </div>
     
        </div>
         
    </div>
  )
}
      
      
      
      
      
      
      
      
      
      
      
      
      
      {/* <div className=''>
        <img src="Dr.Saurabh kumar.png" alt="dr." className=" w-full items-center object-cover rounded-2xl flex justify-center max-[768px]:max-w-[90%] max-[768px]:mx-auto" />
      </div>
      <div className="flex  ml-6 max-w-200">
        <h1 className="font-sans text-4xl text-green-600 max-[768px]:text-3xl">Dr. SAURABH KUMAR SHARMA  </h1>
        <h2 className="font-sans text-3xl text-green-600 max-[768px]:text-2xl">ASSISTANT PROFESSOR</h2>
        <p className="text-base leading-6 mt-4 font-light text-gray-700 max-[768px]:text-base"><strong>School of Computer & Systems Sciences
          Jawaharlal Nehru University, New Delhi, INDIA
          Ph.D. (Computational Neuroscience), Jawaharlal Nehru University, New Delhi, 2019.
          M.Tech. (Computational & Systems Biology), Jawaharlal Nehru University, New Delhi, 2014.
          B.Tech. (Computer Science and Engineering), Lovely Professional University, Punjab, 2012.</strong></p>
      </div> */}
        
 
export default Intro;
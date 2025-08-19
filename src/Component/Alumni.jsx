import React from 'react'
import styles from './Alumni.module.css';


const data = [
  {
    name: `Dr. Muniraj Gupta`,
    url: `../Dr.Muniraj Gupta.jpg`,
    about: `P.hD Computer Science, JNU.  M.Tech., NSUT, New Delhi`
  },
  {
    name: `Dr. Naveen Kumar Singh`,
    url: `../Dr. Naveen Kumar Singh.jpg`,
    about: `P.hD Computer Science, JNU. MCA, JNU`
  },
  {
    name: `Ms. Goldy Pandey`,
    url: `../Ms. Goldy Pandey.jpg`,
    about: `P.hD Computer Science, JNU. M.Tech CS&T, JNU`
  },
  {
    name: `Ms. Mankirat Kaur`,
    url: `../Ms. Mankirat Kaur.jpg`,
    about: `M.Tech Computer Science & Technology, JNU`
  },
  {
    name: `Mr. Jamaluddin`,
    url: `../Mr. Jamaluddin.jpg`,
    about: ` PhD(CS) at AMU, Aligarh. M.Tech(CS) JNU. MCA & BSc(CS) from AMU`
  },
  {
    name: `Mr. Tirandij Pradhan`,
    url: `../Mr. Tirandij Pradhan.jpg`,
    about: `PhD(CS) at AMU, Aligarh. M.Tech(CS) JNU. MCA & BSc(CS) from AMU`
  },
  {
    name: `Mr. Raja Babu`,
    url: `../Mr. Raja Babu.jpg`,
    about: ``
  },
  {
    name: `Mr. Gulam Mazid`,
    url: `../Mr. Gulam Mazid.jpg`,
    about: ``
  },
  {
    name: `Mr. Saquib Warsi`,
    url: `../Mr. Saquib Warsi.jpg`,
    about: ``
  },
  {
    name: `Mr. Mritunjay Raj`,
    url: `../Mr. Mritunjay Raj.jpg`,
    about: ``
  },

]


function Alumni() {
  return (
    <div className={styles.AlumniContainer}>
         <h1 className={styles.AlumniTitle}> Alumnis</h1>
         
         <div className={styles.AlumniBox}>
         {data.map((Alumni) => (
           <div className={styles.AlumniBoxInfo} key={Alumni.name}>
             <div className={styles.AlumniImageBox} key={Alumni.name}>
               <img src={Alumni.url} alt={Alumni.name} className={styles.AlumniImage} />
             </div>
             <div className={styles.AlumniInfo} key={Alumni.name}>
             <h2 className={styles.AlumniName}>{Alumni.name}</h2>
             <h2 className={styles.AlumniAbout}>{Alumni.about}</h2>
              <button className={styles.readButton}
                   onClick={() =>
                       navigate(`/readmore/${encodeURIComponent(Alumni.name)}`, {
                         state: { name: Alumni.name, url: Alumni.url, about: Alumni.about },
                       })
                     }>Read More</button>
           </div>
           </div>
         ))}
       </div>
     </div>
  )
}

export default Alumni

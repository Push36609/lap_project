import React from 'react'
import styles from './Interns.module.css';

const data = [
  {
    name: `Mr. Ajay Gupta`,
    url: `../Mr. Ajay Gupta.jpg`,
    about: `BCA(AI) from LLDIMS`
  },
  {
    name: `Ms. Shruti`,
    url: `../Ms. Shruti.jpg`,
    about: `BCA(AI) from LLDIMS `
  },
  {
    name: `Ms. Shivangi `,
    url: `../Ms.Shivangi.jpg`,
    about: ` `
  },
  {
    name: `Ms. Priyanka`,
    url: `../Ms. Priyanka.jpg`,
    about: ` `
  },
  {
    name: `Mr. Pushpendra`,
    url: `../Mr. Pushpendra.jpg`,
    about: `BAC(AI) from LLDIMS`
  },
  {
    name: `Ms. Shravani Maity`,
    url: `../Ms. Shravani Maity.jpg`,
    about: `BCA(AI) from LLDIMS`
  },
  
  
  {
    name: `Mr. Sahil Pant`,
    url: `../Mr. Sahil Pant.jpg`,
    about: ` `
  },
  {
    name: `Mr. Ankush Rawat`,
    url: `../Mr. Ankush Rawat.jpg`,
    about: ` `
  },
  {
    name: `Mr. Rashid Reyaz`,
    url: `../Mr. Rashid Reyaz.jpg`,
    about: ``
  },

]


function Interns() {
  return (

    <div className={styles.InternsContainer}>
          <h1 className={styles.InternsTitle}>Our Interns</h1>
       
      <div className={styles.InternsBox}>
        {data.map((intern, index) => (
          <div className={styles.InternsBoxInfo} key={index}>
            <div className={styles.InternsImageBox}>
              <img src={intern.url} alt={intern.name} className={styles.InternsImage} />
            </div>

              <div className={styles.InternsInfo}>
                <h1 className={styles.InternsName}>{intern.name}</h1>
                <h2 className={styles.InternsAbout}>{intern.about}</h2>
                </div>
              </div>
            
        ))}
        </div>
         
    </div>
  )
}
export default Interns;

      
    
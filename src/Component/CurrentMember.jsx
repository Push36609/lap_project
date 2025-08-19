import React from 'react'
import './Member.css'
import styles from './CurrentMember.module.css';

 const data =[
  {
    name:`Mr. Kapil Dev`,
    url:"../Mr. Kapil Dev.jpg",
    about:`PhD Scholar`
  },
    {
    name:`Ms. Anupma Gadhwal`,
    url:"../Ms. Anupma Gadhwal.jpg",
    about:`PhD Scholar`
  },
    {
    name:`Mr. Saurabh Kumar`,
    url:"../Mr. Saurabh Kumar.jpg",
    about:`PhD Scholar`
  },
    {
    name:`Mrs. Pooja Tiwari`,
    url:"../Mrs. Pooja Tiwari.jpg",
    about:`PhD Scholar`
  },
    {
    name:`Mr. Sayantan Das`,
    url:"../Mr. Sayantan Das.jpg",
    about:`Research Associate`
  },
    {
    name:`Mr. Anil Kumar`,
    url:"../Mr. Anil Kumar.jpg",
    about:`PhD Scholar`
  }

]

function CurrentMember() {
  return (
    <div className={styles.CurrentmemberContainer}>
      <h1 className={styles.CurrentmemberTitle}>Current Members</h1>
      
      <div className={styles.CurrentmemberBox}>
      {data.map((member) => (
        <div className={styles.MemberBoxInfo} key={member.name}>
          <div className={styles.MemberImageBox} key={member.name}>
            <img src={member.url} alt={member.name} className={styles.MemberImage} />
          </div>
          <div className={styles.MemberInfo} key={member.name}>
          <h2 className={styles.MemberName}>{member.name}</h2>
          <h2 className={styles.MemberAbout}>{member.about}</h2>
           <button className={styles.readButton}
                onClick={() =>
                    navigate(`/readmore/${encodeURIComponent(member.name)}`, {
                      state: { name: member.name, url: member.url, about: member.about },
                    })
                  }>Read More</button>
        </div>
        </div>
      ))}
    </div>
  </div>
  )
}

 

export default CurrentMember;

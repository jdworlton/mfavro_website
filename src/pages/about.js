import React from 'react'
import Layout from '../components/layout'
import * as aboutStyles from '../styles/about.module.scss'
import about_shot from '../images/about_shot.png'

const AboutPage = () => {
    return (
        <Layout>
            {/* <h1>Meet Mary</h1> */}
            <div className={aboutStyles.container}>
                <img src={about_shot}/>
                <p className={aboutStyles.bio}>Mary teaches Humanities at Ensign College. She studied Humanities at Brigham Young University, 
                Curriculum and Teaching at Boston University, and Art History at the Smithsonian in Washington, DC. 
                She and her family live in Alpine, Utah.</p>
                
                {/* <p>publications...speaking engagments ... subject discussed in a lecture setting </p> */}
            </div>
        </Layout>
    )
}

export default AboutPage
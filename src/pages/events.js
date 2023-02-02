import React from 'react'
import Layout from '../components/layout'
import * as eventStyles from '../styles/events.module.scss'
import mormonScholars from '../images/jesus_stainglass.png'
import creativity from '../images/creativity2.png'


export default function Events() {

    return (
        <Layout>
            <div className={eventStyles.container}>
                <div className={eventStyles.box}>
                {/* style={{marginLeft:'30px'}} */}
                    <img src={mormonScholars} className={eventStyles.mormonScholars} />
                    <p className={eventStyles.title}><b>Presenter</b>, Mormon Scholars in the Humanities Annual Conference</p> 
                    <p className={eventStyles.date}>May 26, 27 Logan, Utah</p>
                </div>
                <div className={eventStyles.box}>
                    <img src={creativity} className={eventStyles.creativity} />
                    <p className={eventStyles.title}><b>Host</b>, Creativity Summit: Arts, <br />Spirituality, and Living Well</p>
                    {/* style={{paddingTop: '30px'}} */}
                    <p className={eventStyles.date} >Fall 2023, Sundance, Utah</p>
                </div>
            </div>
            {/* <ul>
                <li>
                
                </li>
                <li>
                
                </li>
            </ul> */}
        </Layout>
        
    )
}
import React from 'react'
import Layout from '../components/layout'
import * as pubsStyles from '../styles/pub-present.module.scss'

import sheCouldSee from '../images/5F2441F8-711D-42D3-BD99-0D17A5A1CE6A.jpeg'
import connecting from '../images/connecting.png'
import poems from '../images/poems.png'


export default function Publications() {

    return (
        <Layout>
            <h2>Publications</h2>
            <div className={pubsStyles.container}>
                <div className={pubsStyles.row}>
                    <img src={sheCouldSee} alt="print" className={pubsStyles.img}/>
                    <div className={pubsStyles.titleSummary}>
                        <h4 className={pubsStyles.ptitle}>She Could See Further</h4>
                        <i >Stories of Women With Vision and Resilience to Inspire a Meaningful Life</i>
                    </div>        
                </div>

                <div className={pubsStyles.row}>
                    <img src={connecting} alt="print" className={pubsStyles.img}/>
                    <div className={pubsStyles.titleSummary}>
                        <h4 className={pubsStyles.ptitle}>Connecting with Heaven</h4>                
                        <i >What the Humanities Teach Us About God’s Voice</i>
                    </div>
                </div>

                <div className={pubsStyles.row}>
                    <img src={poems} alt="print" className={pubsStyles.imgCrop}/>
                    <div className={pubsStyles.titleSummary}>
                        <h4 className={pubsStyles.ptitle}>These Precious Days</h4>                
                        <i >A Collection of Poems by Mary Favro</i>
                    </div>
                </div>                
            </div>

            <h2 className={pubsStyles.topBottom}>Presentations</h2>
            
            <div className={pubsStyles.container}>
                <div className={pubsStyles.row}>
                    <img src={connecting} alt="print" className={pubsStyles.img}/>
                    <div className={pubsStyles.titleSummary}>
                        <h4 className={pubsStyles.ptitle}>Connecting with Heaven</h4>                
                        <i >What the Humanities Teach Us About God’s Voice</i>
                    </div>
                </div>

                <div className={pubsStyles.row}>
                    <img src={connecting} alt="print" className={pubsStyles.img}/>
                    <div className={pubsStyles.titleSummary}>
                        <h4 className={pubsStyles.ptitle}>The Art of Living Well</h4>                
                        <i >What the Humanities Teach us About Flourishing</i>
                    </div>
                </div>
            </div>
            
            
            {/* <h4>Connecting with Heaven: What the Humanities Teach Us About God’s Voice</h4> */}
        </Layout>
        
    )
}
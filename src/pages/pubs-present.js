import React from 'react'
import Layout from '../components/layout'
import * as pubsStyles from '../styles/pub-present.module.scss'

import sheCouldSee from '../images/5F2441F8-711D-42D3-BD99-0D17A5A1CE6A.jpeg'
import connecting from '../images/connecting.png'
import poems from '../images/poems.png'
import livingWell from '../images/livingWell.png'
import confidence from '../images/confidence.png'
import sharingLight from '../images/sharingLight.png'
import artistTranslator from '../images/artistTranslator.png'


export default function Publications() {

    return (
        <Layout>
            <h2>Publications</h2>
            <div className={pubsStyles.container}>
                <div className={pubsStyles.row}>
                    <img src={sheCouldSee} alt="print" className={pubsStyles.imgPubPresent}/>
                    <div className={pubsStyles.titleSummary}>
                        <h4 className={pubsStyles.ptitle}>She Could See Further</h4>
                        <i >Stories of Women With Vision and Resilience to Inspire a Meaningful Life</i>
                    </div>        
                </div>

                <div className={pubsStyles.row}>
                    <img src={connecting} alt="print" className={pubsStyles.imgPubPresent}/>
                    <div className={pubsStyles.titleSummary}>
                        <h4 className={pubsStyles.ptitle}>Connecting with Heaven</h4>                
                        <i >What the Humanities Teach Us About God’s Voice</i>
                    </div>
                </div>

                <div className={pubsStyles.row}>
                    <img src={poems} alt="print" className={pubsStyles.imgPubPresent}/>
                    <div className={pubsStyles.titleSummary}>
                        <h4 className={pubsStyles.ptitle}>These Precious Days</h4>                
                        <i >A Collection of Poems by Mary Favro</i>
                    </div>
                </div>                
            </div>

            <h2 className={pubsStyles.topBottom}>Presentations</h2>
            
            <div className={pubsStyles.container}>
                <div className={pubsStyles.row}>
                    <img src={connecting} alt="print" className={pubsStyles.imgPubPresent}/>
                    <div className={pubsStyles.titleSummary}>
                        <h4 className={pubsStyles.ptitle}>Connecting with Heaven</h4>                
                        <i >What the Humanities Teach Us About God’s Voice</i>
                    </div>
                </div>

                <div className={pubsStyles.row}>
                    <img src={livingWell} alt="print" className={pubsStyles.imgPubPresent}/>
                    <div className={pubsStyles.titleSummary}>
                        <h4 className={pubsStyles.ptitle}>The Art of Living Well</h4>                
                        <i >What the Humanities Teach us About Flourishing</i>
                    </div>
                </div>

                <div className={pubsStyles.row}>
                    <img src={confidence} alt="print" className={pubsStyles.imgPubPresent}/>
                    <div className={pubsStyles.titleSummary}>
                        <h4 className={pubsStyles.ptitle}>Cultivating Confidence Through Creativity</h4>                
                        <i > How to Use Poetry and Painting to Help Children Appreciate Their own Voice</i>
                    </div>
                </div>

                <div className={pubsStyles.row}>
                    <img src={sharingLight} alt="print" className={pubsStyles.imgPubPresent}/>
                    <div className={pubsStyles.titleSummary}>
                        <h4 className={pubsStyles.ptitle}>Sharing Light</h4>                
                        <i >An Exploration of Female Creativity</i>
                    </div>
                </div>

                <div className={pubsStyles.row}>
                    <img src={artistTranslator} alt="print" className={pubsStyles.imgPubPresent}/>
                    <div className={pubsStyles.titleSummary}>
                        <h4 className={pubsStyles.ptitle}>Artist As Translator</h4>                
                        <i>Shedding Light on Human Experience Through Creativity</i>
                    </div>
                </div>

                <div className={pubsStyles.row}>
                    <img src={sheCouldSee} alt="print" className={pubsStyles.imgPubPresent}/>
                    <div className={pubsStyles.titleSummary}>
                        <h4 className={pubsStyles.ptitle}>She Could See Further</h4>                
                        <i> Stories of Women with Vision & Resilience to Inspire a Meaningful Life</i>
                    </div>
                </div>
            </div>
            
            
            {/* <h4>Connecting with Heaven: What the Humanities Teach Us About God’s Voice</h4> */}
        </Layout>
        
    )
}
import React from 'react'

import { Link} from 'gatsby'

import vg_header from '../images/vg_header.png'

//old approach:
// import './header.module.scss'

//when using modules, we get a default export
// if 'headerStyles' is undefined, add *
import * as headerStyles from './header.module.scss'

const Header = () => {
    //tagged template string ``
    // const data = useStaticQuery(graphql`
    //     query {
    //         site {
    //             siteMetadata {
    //                 title
    //             }
    //         }
    //     }
    // `)


    // inline syntax:
    //<ul style={{listStyle:'none'}}>
    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} activeClassName={headerStyles.activeNavItem} to='/'>
                    {/* {data.site.siteMetadata.title} */}
                    <img src={vg_header} />
                    {/* Empowering women to create, discover, and delight */}
                    
                </Link>
            </h1>
            <h2>
            <div style={{textAlign:'center', fontSize: '1.1em', fontFamily:'Droid Sans'}}>
                <quote style={{ lineHeight: '0.9', fontFamily: 'Marck Script'}}>
                    <i className={headerStyles.quoteColor}>Love many things, for therein lies strength, and whosoever loves much 
                        performs much, and can accomplish much, and what is done in love is done well.</i> 
                    <br></br><span style={{float:'right', fontWeight:'500'}} className={headerStyles.quoteColor}><b>Vincent van Gogh</b></span>
                </quote>
             </div>
            </h2> 
    
            <div className={headerStyles.welcome}>Mary Favro is available for speaking engagments. <Link style={{textDecoration:'none', color:'green' }} to='/contact'>Contact</Link></div>
            <nav>
            <ul className={headerStyles.navList}>
                <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/pubs-present">
                        Publications + Presentations
                    </Link>
                </li>
                <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/events">
                        Upcoming Events
                    </Link>
                </li>
                <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">
                        About
                    </Link>
                </li>
            </ul>
            </nav>
            
        </header>
    )
}

export default Header
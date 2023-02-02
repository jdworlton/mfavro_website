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
    // const testTxt = 'howdy, sir'
    return (
        
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} activeClassName={headerStyles.activeNavItem} to='/'>
                    {/* {data.site.siteMetadata.title} */}
                    {/* <img src={vg_header} /> */}
                    Empowering women to create, discover, and delight (rotating quote)
                    {/* {randomQuote} */}
                </Link>
            </h1>
            
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
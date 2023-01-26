import React from 'react'

import { Link} from 'gatsby'

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
                    Mary Favro
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
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/practice">
                        Practice
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
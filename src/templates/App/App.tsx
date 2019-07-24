import React from 'react'
import { Component, classes } from '../../lib'

import AppBar from '../../components/AppBar'
import Header from '../../components/Header'
import Icon from '../../components/Icon'
import TabBar from '../../components/TabBar'
import Logo from '../../../public/images/luma.svg'
import Link, { LinkRoute } from '../../components/Link'
import Image from '../../components/Image'
import Footer from '../../components/Footer'

import IconSearch from '@fortawesome/fontawesome-free/svgs/solid/search.svg'
import IconBag from '@fortawesome/fontawesome-free/svgs/solid/shopping-bag.svg'
import IconHome from '@fortawesome/fontawesome-free/svgs/solid/store.svg'
import IconAccount from '@fortawesome/fontawesome-free/svgs/solid/user.svg'
import IconTwitter from '@fortawesome/fontawesome-free/svgs/brands/twitter.svg'
import IconFacebook from '@fortawesome/fontawesome-free/svgs/brands/facebook.svg'
import IconInstagram from '@fortawesome/fontawesome-free/svgs/brands/instagram.svg'
import IconPinterest from '@fortawesome/fontawesome-free/svgs/brands/pinterest.svg'
import { useResize } from '../../hooks/useResize'

export type AppProps = {
    home: {
        label?: string
        link: LinkRoute
    }
    
    logo: {
        title: string
        src?: string
        link: LinkRoute
    }

    menu?: Array<{
        label: string
        link: LinkRoute
    }>

    help?: {
        label?: string
        link: LinkRoute
    }

    myAccount: {
        label?: string
        link: LinkRoute
        count?: number
    }

    search: {
        label?: string
        link: LinkRoute
    }

    cart: {
        count?: number
        label?: string
        link: LinkRoute
    }

    footer: {
        copyright: string
        menu?: Array<{ link: LinkRoute, label: string }>
        social?: {
            facebook?: LinkRoute
            instragram?: LinkRoute
            pinterest?: LinkRoute
            twitter?: LinkRoute
        }
    }
}

export const App: Component<AppProps> = ({
    as: App = 'div',
    cart,
    children,
    footer,
    help,
    home,
    logo,
    menu,
    myAccount,
    search,
    ...props
}) => {
    const { vHeight } = useResize()

    return (
        <App {...props} className={classes('app', props.className)}>
            <AppBar className="app__app-bar" 
                as="header" 
                hideOnOffset={100}
            >
                <Header className="app__app-bar__header">
                    <Header.Logo className="app__app-bar__header__logo" as="h1">
                        <Link {...logo.link}>
                            {logo.src ? (
                                <Image className="app__app-bar__header__logo__image" src={logo.src} alt={logo.title} />
                            ) : (
                                <Logo className="app__app-bar__header__logo__image" height="40" aria-label={logo.title} />
                            )}
                        </Link>
                    </Header.Logo>

                    {menu && menu.length > 0 && (
                        <Header.Menu as="nav" className="app__app-bar__header__menu">
                            {menu.map((item, key) => (
                                <Link key={key} {...item.link}>{item.label}</Link>
                            ))}
                        </Header.Menu>
                    )}

                    <Header.Utilities className="app__app-bar__header__utilities">
                        {help && <Link {...help.link}>
                            {help.label || 'Help'}
                        </Link>}
                       
                        <Link className="app__app-bar__header__utilities__account" {...myAccount.link}>
                            {myAccount.label || 'My Account'}
                        </Link>

                        <Icon className="app__app-bar__header__utilities__search"
                            as={Link} {...search.link}
                            aria-label={search.label || 'Search'}
                        >
                            <IconSearch />
                        </Icon>

                        <Icon className="app__app-bar__header__utilities__cart"
                            as={Link} {...cart.link}
                            aria-label={cart.label || 'My Bag'}
                            count={cart.count}
                        >
                            <IconBag />
                        </Icon>
                    </Header.Utilities>
                </Header>
            </AppBar>
            
            <main className="app__main">
                {children}
            </main>

            <Footer as="footer" className="app__footer">
                {footer.menu && (
                    <div className="app__footer__menu">
                        {footer.menu.map(({ label, link }, key) => (
                            <Link className="app__footer__menu__link" 
                                key={`app__footer__meny__link--${key}`}
                                {...link}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                )}

                {footer.social && (
                    <div className="app__footer__social">
                        {footer.social.pinterest && (
                            <Icon as={Link} {...footer.social.pinterest}>
                                <IconPinterest />
                            </Icon>
                        )}

                        {footer.social.instragram && (
                            <Icon as={Link} {...footer.social.instragram}>
                                <IconInstagram />
                            </Icon>
                        )}

                        {footer.social.facebook && (
                            <Icon as={Link} {...footer.social.facebook}>
                                <IconFacebook />
                            </Icon>
                        )}

                        {footer.social.twitter && (
                            <Icon as={Link} {...footer.social.twitter}>
                                <IconTwitter />
                            </Icon>
                        )}

                    </div>
                )}

                <div className="app__footer__copyright">
                    {footer.copyright}
                </div>
            </Footer>

            <TabBar as="nav" className="app__tab-bar">
                <TabBar.Item isActive={true}>
                    <Icon as={Link} {...home.link}>
                        <IconHome />
                    </Icon>
                </TabBar.Item>

                <TabBar.Item>
                    <Icon count={myAccount.count} as={Link} {...myAccount.link}>
                        <IconAccount />
                    </Icon>
                </TabBar.Item>

                <TabBar.Item>
                    <Icon as={Link} {...search.link}>
                        <IconSearch />
                    </Icon>
                </TabBar.Item>

                <TabBar.Item>
                    <Icon count={cart.count} as={Link} {...cart.link}>
                        <IconBag />
                    </Icon>
                </TabBar.Item>
            </TabBar>

            <style jsx>{`
                .app {
                    min-height: calc(${vHeight}px - 0rem);
                }      
            `}</style>

            <style jsx global>{`
                .app {
                    display: grid;
                    grid-auto-columns: minmax(0, 1fr);
                    grid-template-rows: auto 1fr auto auto;
                    
                }
                
                .app__app-bar__header__logo {
                    margin: 0;
                    padding: 0;
                    line-height: 0;
                }

                .app__app-bar__header__logo__image {
                    max-height: 2.8rem;

                    @media(--large-screen) {
                        max-height: 3.5rem;
                    }
                }

                /** Footer */

                .app__footer {
                    & .footer__container {
                        display: grid;
                        filter: opacity(0.65);
                        grid-gap: 3rem;
                    }
                }

                .app__footer__menu {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: center;
                    text-align: center;
                    text-transform: uppercase;

                    & .app__footer__menu__link {
                        margin: 1rem 0.75rem;
                    }
                }

                .app__footer__social {
                    display: grid;
                    font-size: 2.4rem;
                    grid-auto-columns: max-content;
                    grid-auto-flow: column;
                    grid-auto-rows: max-content;
                    grid-gap: 2rem;
                    justify-content: center;
                }

                .app__footer__copyright {
                    text-align: center;
                    width: 100%;
                }
                

                @media(--small-screen-only) {
                    .app__app-bar__header__menu,
                    .app__app-bar__header__utilities__search,
                    .app__app-bar__header__utilities__cart {
                        display: none;
                    }

                    .app__app-bar__header {
                        grid-template-areas: "logo utilities";
                    }
                }

                @media(--medium-screen) {
                    .app__tab-bar {
                        display: none;
                    }
                }
            `}</style>
        </App>
    )
}

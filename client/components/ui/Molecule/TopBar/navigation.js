import React, {useState, useEffect} from "react"
import {Button} from "../../../ui/Atom/Button"
import {RiMenu3Line, RiCloseLine} from "react-icons/ri"
import {RiInstagramLine, RiTwitterLine, RiDiscordLine} from 'react-icons/ri'
import {NavigationLink} from './navigation-link'

export const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false)
	const classesMenu = `Navigation-menu ${isOpen ? "is-open" : ""}`
  
	useEffect(() => {
    isOpen
      ? document.body.classList.add("block-scroll")
		  : document.body.classList.remove("block-scroll")
	}, [isOpen])
  
	const handleToggleMenu = () => {
		setIsOpen(!isOpen)
	}
  
	const buttonOpenMenu = (
		<div>
			<Button
        theme='white'
				size='small'
        border={false}
        ghost
				onClick={handleToggleMenu}
				aria-label='open menu'>
        <RiMenu3Line size={24} />
			</Button>
			<style jsx>{`
        .button-inner {
          display: flex;
          align-items: center;
        }

        .button-text {
          font-size: 1rem;
          font-variant: all-small-caps;
          margin-left: 0.4rem;
        }

        @media screen and (min-width: 768px) {
          div { display: none; }
        }
      `}</style>
		</div>
	)
  
	return (
		<div className='Navigation'>
			{buttonOpenMenu}
			
			<div className={classesMenu}>
				{isOpen && (
          <div className='Navigation-close'>
            <Button
              theme='white'
              size='small'
              border={false}
              ghost
              onClick={handleToggleMenu}
              aria-label='close menu'>
              <RiCloseLine size={26} />
            </Button>
          </div>
        )}
				<div className='Navigation-inner'>
          <div className='Navigation-links'>
            <NavigationLink href='/'>Inicio</NavigationLink>
            <NavigationLink href='/contacto'>Contacto</NavigationLink>
            <NavigationLink href='/noticias'>Noticias</NavigationLink>
            <NavigationLink href='/torneos'>Torneos</NavigationLink>
          </div>
          <div className='Navigation-socialMedia'>
            <NavigationLink
              href='https://www.instagram.com/temploesports/'
              target='_blank'
              title="link to the Instagram account El templo">
              <RiInstagramLine size={24} aria-hidden="true"/>
            </NavigationLink>
            <NavigationLink
              href='https://twitter.com/temploesports'
              target='_blank'
              title="link to the Twitter account El templo">
              <RiTwitterLine size={24} aria-hidden="true"/>
            </NavigationLink>
            <NavigationLink
              href='/'
              target='_blank'
              title="link to the Discord account El templo">
              <RiDiscordLine size={24} aria-hidden="true"/>
            </NavigationLink>
          </div>
				</div>
			</div>

			<style jsx>{`
        .Navigation-menu {
          display: none;
          z-index: 10001;
        }

        .Navigation-close {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
        }

        .Navigation-menu.is-open {
          bottom: 0;
          background-color: var(--c-background);
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
          box-shadow: 0 15px 20px -5px rgba(1,1,1,0.2);
          display: block;
          left: 0;
          overflow-y: auto;
          padding: 1.25rem 1.5rem;
          position: fixed;
          right: 0;
          top: 0;
        }
        
        .Navigation-inner {
          display: flex;
          flex-direction: column;
          margin-top: 2rem;
        }

        .Navigation-socialMedia {
          display: flex;
          align-items: center;
        }

        @media screen and (min-width: 768px) {
          .Navigation-close {display: none;}

          .Navigation-menu {display: block;}
          
          .Navigation-links {
            display: flex;
          }

          .Navigation-inner {
            align-items: center;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            margin-top: 0;
            position: relative;
          }
        }

        @media screen and (min-width: 992px) {
          .Navigation-socialMedia {
            margin-left: 3rem;
            position: relative;
          }
        }
      `}</style>
		</div>
	)
}

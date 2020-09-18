import React, {useState, useEffect} from "react"
import {Button} from "../../../ui/Atom/Button"
import {RiMenu3Line, RiCloseLine} from "react-icons/ri"
import {RiInstagramLine, RiTwitterLine, RiDiscordLine} from 'react-icons/ri'
import {NavigationLink} from './navigation-link'
import {Container} from '../../Atom/Container'

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
            <NavigationLink href='/#contact'>Contacto</NavigationLink>
          </div>
          <div className='Navigation-socialMedia'>
            <NavigationLink
              href='https://www.instagram.com/temploesports/'
              target='_blank'
              title="link to the Instagram account Templo Gaming">
              <RiInstagramLine size={24} aria-hidden="true"/>
            </NavigationLink>
            <NavigationLink
              href='https://twitter.com/temploesports'
              target='_blank'
              title="link to the Twitter account Templo Gaming">
              <RiTwitterLine size={24} aria-hidden="true"/>
            </NavigationLink>
            <NavigationLink
              href='/'
              target='_blank'
              title="link to the Discord account Templo Gaming">
              <RiDiscordLine size={24} aria-hidden="true"/>
            </NavigationLink>
          </div>
				</div>
			</div>

      <style jsx>{`
        .Navigation {
          animation: fromRight 0.5s ease-in, fadein 0.5s ease-in;
        }

        @keyframes fromRight {
          from {
            transform: translateX(10px);
          }
          to {
            transform: translateX(0);
          }
        }
  
        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

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

          .Navigation-socialMedia {
            margin-top: 0.35rem;
            margin-left: 2rem;
            position: relative;
          }
        }

        @media screen and (min-width: 992px) {
          .Navigation-socialMedia {
            margin-left: 3rem;
          }
        }
      `}</style>
		</div>
	)
}

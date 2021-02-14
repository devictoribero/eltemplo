import React from 'react'
import { Container } from 'client/components/ui/Atom/Container'
import { Title, titleSizes, titleTags } from 'client/components/ui/Atom/Title'

export function Footer() {
  return (
    <footer>
      <Container isBoxed>
        <section>
          <div>
            <Title size={titleSizes.s} as={titleTags.h5}>
              <span className='inner-title'>Nuestras redes sociales</span>
            </Title>
            <ul>
              <li><a href='https://www.instagram.com/temploesports/'><span className='text'>Instagram</span></a></li>
              <li><a href='https://twitter.com/temploesports'><span className='text'>Twitter</span></a></li>
              <li><a href=''><span className='text'>Discord</span></a></li>
            </ul>
          </div>
        </section>
      </Container>
      <style jsx>{`
        footer {
          background-color: var(--c-background-dark);
        }
        
        section {
          padding: 4rem 0;
        }

        .inner-title {
          color: var(--c-background-pale);
        }

        ul {
          margin: 0;
          padding: 0;
        }

        li {
          list-style: none;
        }

        a {
          position: relative;
          display: flex;
          align-items: center;
          cursor: pointer;
          color: white;
          font-weight: 600;
          text-decoration: none;
          font-family: var(--ff-text);
          padding: 0.5rem 0;
          font-size: 1rem;
        }
        
        a:focus {outline: none;}

        .text {
          position: relative;
          display: flex;
        }

        .text:after {
          position: absolute;
          bottom: -0.5rem;
          content: "";
          height: 5px;
          background-color: var(--c-accent);
          width: 0;
          left: 0;
          transition: 0.15s width ease-in;
        }

        a:hover .text:after,
        a:focus .text:after {
          width: 100%;
        }
      `}</style>
    </footer>
  )
}
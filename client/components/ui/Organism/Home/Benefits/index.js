import { Container } from 'client/components/ui/Atom/Container'
import { Title } from 'client/components/ui/Atom/Title'
import { Typography } from 'client/components/ui/Atom/Typography'
import React from 'react'
import { HomeSection } from '../section'

const BENEFITS = [
  {
    title: 'Más comunidad',
    text: 'Más eventos, más gente y más talento. Tu opinión cuenta.',
  },
  {
    title: 'Mejores equipo',
    text: 'Apostamos por equipos de alto rendimiento porque tu experiencia es lo más importante.',
  },
  {
    title: 'Menores precios',
    text: 'Son momentos dificiles. Nosotros te ayudamos con precios más bajos',
  }
]

export function Benefits () {
  return (
    <HomeSection>
      <Container isBoxed>
        <Title size={titleSizes.giant} as={titleTags.h2} spacelessTop>
          ¿Qué encontrarás <br/> en Templo eSports?
        </Title>

        <Typography size='large'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut felis et elit rhoncus tempor.
        </Typography>

        <ul>
          {BENEFITS.map(({title, text}) => {
            return (
              <li key={title}>
                <Title size={titleSizes.s} as={titleTags.h2} spacelessTop>
                  <span>{title}</span>
                </Title>
                <Typography>{text}</Typography>
              </li>
            )
          })}
        </ul>
      </Container>
      <style jsx>{`
        ul {
          margin: 2rem 0 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 1rem;
        }

        li {
          list-style: none;
          padding: 2rem;
          background-color: var(--c-background-light);
          border-radius: 5px;
          box-shadow: 0 5px 20px -5px var(--c-background-dark);
        }

        @media screen and (min-width: 768px) {
          ul {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
      `}</style>
    </HomeSection>
  )
}
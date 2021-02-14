import React from 'react'
import { Container } from '../../../Atom/Container'
import { Title, titleSizes, titleTags } from '../../../Atom/Title'
import { Typography } from '../../../Atom/Typography'
import { HomeSection } from '../section'
import Map from '../../../Molecule/Map'
import { COORDINATES_EL_TEMPLO_GAMING } from './coordinates-templo'

export function FindUs() {
  return (
    <HomeSection id='find-us'>
      <Container isBoxed>
        <Title size={titleSizes.giant} as={titleTags.h2} spacelessTop>
          Como encontrarnos
        </Title>

        <Typography size='large'>
          <strong>El Templo eSports</strong> se encuentra en Calle Diputació 160, Barcelona.
        </Typography>

        <Title size={titleSizes.l} as={titleTags.h4}>Cuando estamos abiertos</Title>
        <div className='schedule'>
          <Typography size='large' spacelessTop spacelessBottom>
            De lunes a domingo <time>09:00h</time> a <time>21:00h</time>
          </Typography>
        </div>

        <Title size={titleSizes.l} as={titleTags.h4}>Ubicación</Title>
        <div id='map-wrapper'>
          <div id='map'>
            <Map id='map-inner' center={COORDINATES_EL_TEMPLO_GAMING}/>
          </div>
        </div>

      </Container>
      <style jsx>{`
        .schedule {
          display: flex;
          flex-direction: column;
        }

        .schedule span {
          margin-bottom: 0.5rem;
        }

        time {
          font-weight: bold;
        }

        #map {
          position: relative;
          width: 100%;
          height: 400px;
          background-color: var(--c-background-dark);
        }

        @media screen and (min-width: 768px) {
          #map {
            height: 400px;
          }
        }
      `}</style>
    </HomeSection>
  )
}
import {Layout} from "../client/components/ui/Organism/Layout"
import {Button} from "../client/components/ui/Atom/Button"
import {Typography} from "../client/components/ui/Atom/Typography"
import {Container} from "../client/components/ui/Atom/Container"
import {Title, titleSizes, titleTags} from "../client/components/ui/Atom/Title"

function Home () {
	return (
		<Layout>
      <HomeHeader />
      <OurBrands/>
			<main>
        <Container isBoxed>
          <AboutUs/>
        </Container>
        <Benefits/>
			</main>
			
      <style jsx>{`
        /* color pallette
         * #1a0c1b
         * #200f21
         * #382039
         * #5a3d5c
         * #f638dc
         */

         main {
           padding-top: 5rem;
           background-image: url(/images/wallpaper-malzahar.jpg);
           background-image: linear-gradient(to bottom, rgba(26,26,46,0.8), rgba(26,26,46,1)), url(/images/wallpaper-malzahar.jpg);
           background-size: cover;  
           background-position: top right;
           background-repeat: no-repeat;
         }
			`}</style>
		</Layout>
	)
}
export default Home



function HomeHeader() {
  return (
    <section>
      <div className="home-hero-overlay"/>
      <Container>
        <div className='HomeHeader-inner'>
          <Title size={titleSizes.giant} as={titleTags.h1} spacelessTop>
            El centro gaming más grande de Barcelona
          </Title>
          <p>Menos tiempos de espera, precios más bajos, más diversión y más comunidad. ¿A qué esperas?</p>
          <div className='HomeHeader-buttons'>
            <Button theme='primary' size='large'>
              Saber más
            </Button>
            <Button theme='accent' size='large'>
              Ver horarios
            </Button>
          </div>
        </div>
      </Container>
      <style jsx>{`
        section {
          position: relative;
          display: flex;
          align-items: center;
          min-height: 450px;
          padding-top: calc(3rem + 50px);
          padding-bottom: 3rem;
          box-sizing: border-box;
        }
        
        .home-hero-overlay {
          background-image: url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
          background-image: linear-gradient(180deg, rgba(21,32,43,1), rgba(21,32,43,0.5)), url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
          background-size: cover;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }
        
        .HomeHeader-inner {
          padding: 1rem;
          box-sizing: border-box;
        }

        h1 {
          font-size: 2rem;
          font-weight: 900;
        }

        p {
          color: #e0e1e2;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .HomeHeader-buttons {
          display: grid;
          grid-gap: 0.5rem;
          margin-top: 2rem;
          grid-template-columns: 1fr 1fr;
        }

        @media screen and (min-width: 768px) {
          section {
            min-height: 600px
          }

          .HomeHeader-inner {
            max-width: 550px;
          }

          .HomeHeader-buttons {
            width: 350px;
          }
        }

        @media screen and (min-width: 992px) {
          section {
            min-height: 600px;
          }

          .HomeHeader-inner {
            max-width: 600px;
          }

          .HomeHeader-buttons {
            width: 350px;
          }
        }
    `}</style>
    </section>
  )
}


function OurBrands () {
  return (
    <section>
      <ul>
        <li>brand1</li>
        <li>brand2</li>
        <li>brand3</li>
        <li>brand4</li>
        <li>brand5</li>
      </ul>
      <style jsx>{`
        section {
          padding-top: 4rem;
          padding-bottom: 4rem;
          background-color: var(--c-background-light);
        }

        ul {
          margin: 0;
          padding: 0;
          display: flex;
          overflow-x: auto;
        }

        li {
          list-style: none;
          color: var(--c-background-pale);
          font-weight: bold;
          font-size: 1.5rem;
          font-family: var(--ff-title);
          text-transform: uppercase;
          padding-left: 2rem;
          padding-right: 2rem;
        }

        @media screen and (min-width: 768px) {
          ul {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}
function AboutUs () {
  return (
    <section>
      <Title size={titleSizes.giant} as={titleTags.h2} spacelessTop>
        Acerca de <span>El Templo</span>
      </Title>
      <Typography size='large'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut felis et elit rhoncus tempor. Mauris nec dolor a urna suscipit luctus. Praesent at arcu egestas eros ultrices dignissim.
      </Typography>

      <Typography size='large'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut felis et elit rhoncus tempor.
      </Typography>

      <style jsx>{`
        section {
          padding-top: 2rem;
          padding-bottom: 2rem;
        }

        span {
          color: var(--c-background-pale);
        }
      `}</style>
    </section>
  )
}

function Benefits () {
  return (
    <section>
      <Container isBoxed>
        <Title size={titleSizes.giant} as={titleTags.h2} spacelessTop>
          Beneficios de <span>El Templo</span>
        </Title>

        <Typography size='large'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut felis et elit rhoncus tempor.
        </Typography>

        <ul>
          <li>
            <Title size={titleSizes.s} as={titleTags.h2} spacelessTop>
              <span>Más comunidad</span>
            </Title>
            <Typography>Más eventos, más gente y más talento. Tu opinión cuenta.</Typography>
          </li>
          <li>
            <Title size={titleSizes.s} as={titleTags.h2} spacelessTop>
              <span>Mejores equipos</span>
            </Title>
            <Typography>Apostamos por equipos de alto rendimiento porque tu experiencia es lo más importante.</Typography>
          </li>
          <li>
            <Title size={titleSizes.s} as={titleTags.h2} spacelessTop>
              <span>Menores precios</span>
            </Title>
            <Typography>Son momentos dificiles. Nosotros te ayudamos con precios más bajos</Typography>
          </li>
        </ul>
      </Container>
      <style jsx>{`
        section {
          padding-top: 2rem;
          padding-bottom: 2rem;
        }

        span {
          color: var(--c-background-pale);
        }

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
    </section>
  )
}
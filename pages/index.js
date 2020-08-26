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
        <AboutUs/>
        <Benefits/>
        <FindUs/>
        <ContactUs/>
			</main>

      <Footer/>
			
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

function HomeSection({children}) {
  return (
    <section>
      {children}
      <style jsx>{`
        section {
          padding-top: 4rem;
          padding-bottom: 4rem;
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
          background-color: var(--c-background-light);
        }
        
        ul {
          margin: 0;
          padding: 4rem 0;
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
    <Container isBoxed>
      <HomeSection>
        <Title size={titleSizes.giant} as={titleTags.h2} spacelessTop>
          Acerca de <br/>El Templo Gaming
        </Title>
        <Typography size='large'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut felis et elit rhoncus tempor. Mauris nec dolor a urna suscipit luctus. Praesent at arcu egestas eros ultrices dignissim.
        </Typography>

        <Typography size='large'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut felis et elit rhoncus tempor.
        </Typography>
      </HomeSection>    
    </Container>
  )
}

function Benefits () {
  return (
    <HomeSection>
      <Container isBoxed>
        <Title size={titleSizes.giant} as={titleTags.h2} spacelessTop>
          ¿Qué encontrarás <br/> en El Templo?
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

function FindUs() {
  return (
    <HomeSection>
      <Container isBoxed>
        <Title size={titleSizes.giant} as={titleTags.h2} spacelessTop>
          Como encontrarnos
        </Title>

        <Typography size='large'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut felis et elit rhoncus tempor. Mauris nec dolor a urna suscipit luctus. Praesent at arcu egestas eros ultrices dignissim.
        </Typography>

        <Typography size='large'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut felis et elit rhoncus tempor.
        </Typography>

        <Title size={titleSizes.l} as={titleTags.h4}>Cuando estamos abiertos</Title>
        <div className='schedule'>
          <Typography size='large' spacelessTop spacelessBottom>
            De lunes a jueves <time>10:00h</time> - <time>24:00h</time>
          </Typography>
          <Typography size='large' spacelessTop spacelessBottom>
            De viernes a sábado <time>10:00h</time> - <time>02:00h</time>
          </Typography>
        </div>

        <Title size={titleSizes.l} as={titleTags.h4}>Donde estamos</Title>

        <div id='map'></div>

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
          width: 100%;
          height: 300px;
          background-color: var(--c-background-pale);
          border-radius: 10px;
        }
      `}</style>
    </HomeSection>
  )
}

function ContactUs() {
  return (
    <HomeSection>
      <Container isBoxed>
        <Title size={titleSizes.giant} as={titleTags.h2} spacelessTop>
          ¿Alguna duda? <br/> Contacta con nosotros
        </Title>

        <Typography size='large'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut felis et elit rhoncus tempor. Mauris nec dolor a urna suscipit luctus. Praesent at arcu egestas eros ultrices dignissim. it amet, conhgfh ispata ghalou tripacius.
        </Typography>

        <Typography size='large'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut felis et elit rhoncus tempor. Mauris nec dolor a urna suscipit luctus. Praesent at .
        </Typography>

        <form>
          <div className='ContactUs-field'>
            <label>Tu nombre</label>
            <input placeholder='Ej: victor' />
          </div>

          <div className='ContactUs-field'>
            <label>Tu correo electrónico</label>
            <input placeholder='Ej: victor@eltemplo.com' />
          </div>

          <div className='ContactUs-field'>
            <label>¿Que quieres decirnos?</label>
            <textarea placeholder="Muy buen trabajo chicos! Muchas felicidades!"/>
          </div>

          <Button type='submit' theme='accent' size='large'>Enviar mi mensaje</Button>
        </form>
      </Container>
      <style jsx>{`
        form {
          margin-top: 2rem; 
        }

        .ContactUs-field {margin-bottom: 1.5rem;}
        .ContactUs-field:last-child {margin-bottom: 3rem;}

        label {
          font-weight: 600;
          font-family: var(--ff-title);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          display: block;
        }

        input {
          min-height: 60px;
        }

        textarea {
          min-height: 150px;
        }

        input, textarea {
          border: none;
          display: block;
          width: 100%;
          border-radius: 5px;
          padding: 0.5rem 1rem;
          box-sizing: border-box;
          background-color: var(--c-background-light);
          
          color: var(--c-background-pale);
          font-weight: 500;
          font-size: 1rem;
        }

        input::placeholder,
        textarea::placeholder {
          color: var(--c-background-pale);
          font-weight: 500;
          font-size: 1rem;
          opacity: 0.75;
          font-family: var(--ff-text);
        }
      `}</style>
    </HomeSection>
  )
}

function Footer() {
  return (
    <footer>
      <Container isBoxed>
        <section>
          <Title size={titleSizes.s} as={titleTags.h5}>Nuestras redes sociales</Title>
          <ul>
            <li><a>Instagram</a></li>
            <li><a>Twitter</a></li>
            <li><a>Discord</a></li>
          </ul>

        </section>
      </Container>
      <style jsx>{`
        footer {
          background-color: var(--c-background-dark);
        }
        
        section {
          padding: 4rem 0;
        }

        @media screen and (min-width: 768px) {
        }
      `}</style>
    </footer>
  )
}
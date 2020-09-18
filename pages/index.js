import {useState} from 'react'
import {Layout} from "../client/components/ui/Organism/Layout"
import {Button} from "../client/components/ui/Atom/Button"
import {LinkButton} from "../client/components/ui/Atom/LinkButton"
import {Typography} from "../client/components/ui/Atom/Typography"
import {Container} from "../client/components/ui/Atom/Container"
import {Title, titleSizes, titleTags} from "../client/components/ui/Atom/Title"
import {RiInstagramLine, RiTwitterLine, RiMessage2Line} from 'react-icons/ri'
import axios from 'axios'
import Map from '../client/components/ui/Molecule/Map'

const COORDINATES_EL_TEMPLO_GAMING =  [41.383494, 2.158061]

function Home () {
	return (
		<Layout>
      <HomeHeader />
      {/* <OurBrands/> */}
			<main>
        <FindUs/>
        <AboutUs/>
        {/* <Benefits/> */}
        <ContactUs/>
			</main>

      <Footer/>
			
      <style jsx>{`
         main {
          padding-top: 3rem;
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
  const scrollToSelector = elementSelector => {
    var element = document.querySelector(elementSelector);
    element.scrollIntoView({ behavior: 'smooth', block: 'start'});
  }

  const handleClick = (e, selector) => {
    e.preventDefault()
    scrollToSelector(selector)
  }

  return (
    <section>
      <div className="home-hero-overlay"/>
      <Container>
        <div className='HomeHeader-inner'>
          <Title
            size={titleSizes.giant}
            as={titleTags.h1}
            spacelessTop>
            El Templo Gaming
          </Title>
          <p>¡Estamos en fase BETA abierta! Pásate por el centro y danos tu opinión</p>
          <p>¡Disfruta de equipos de alto rendimiento y de un centro gaming pensado para la comunidad!</p>
          <div className='HomeHeader-buttons'>
            <LinkButton
              href='#find-us'
              onClick={e => handleClick(e, '#find-us')}
              theme='primary'
              size='large'
              style={{marginRight: '0.5rem'}}>
              Donde estamos
            </LinkButton>
            <LinkButton
              href='#contact'
              onClick={e => handleClick(e, '#contact')}
              theme='accent'
              size='large'>
              Contactanos
            </LinkButton>
          </div>
          
          <div className='HomeHeader-tags'>
            <HomeTagContact
              icon={<RiInstagramLine size={16}/>}
              href='https://www.instagram.com/temploesports/'>
              temploesports
            </HomeTagContact>
            <HomeTagContact
              icon={<RiTwitterLine size={16}/>}
              href='https://twitter.com/TemploEsports'>
              temploesports
            </HomeTagContact>
            <HomeTagContact
              icon={<RiMessage2Line size={16}/>}
              href='asdasdasdasd'>
              650311541
            </HomeTagContact>
          </div>
        </div>
      </Container>
      <style jsx>{`
        section {
          position: relative;
          display: flex;
          align-items: center;
          min-height: 60vh;
          padding-top: calc(3rem + 75px);
          padding-bottom: 4rem;
          box-sizing: border-box;
        }
 
        .home-hero-overlay {
          background-image: url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
          background-image: linear-gradient(180deg, rgba(26,26,46,1), rgba(26,26,46,0.5)), url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
          background-size: cover;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
          animation: blurIn 1s ease-in;
        }

        @keyframes blurIn {
          from {
            filter: blur(20px);
          }
          to {
            filter: blur(0);
          }
        }
        
        .HomeHeader-inner {
          box-sizing: border-box;
          animation: fromBottom 0.5s ease-in, fadein 0.75s ease-in;
          animation-delay: 0.25s;
          animation-fill-mode: forwards;
          opacity: 0;
        }

        @keyframes fromBottom {
          from {
            transform: translateY(10px);
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

        p {
          color: #e0e1e2;
          font-size: 1.25rem;
          line-height: 1.5;
          margin-top: 0;
        }

        .HomeHeader-buttons {
          margin-top: 2rem;
        }

        .HomeHeader-tags {
          margin-top: 0.5rem;
          display: flex;
        }

        @media screen and (min-width: 768px) {
          section {
            min-height: 70vh;
          }

          .HomeHeader-inner {
            max-width: 550px;
          }
        }

        @media screen and (min-width: 992px) {
          section {
            min-height: 95vh;
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

function HomeTagContact({icon, href, children}) {
  return (
    <a href={href}>
      <span>
        {icon}
      </span>
      {children}

      <style jsx>{`
        a {
          align-items: center;
          border-radius: 5px;
          background-color: rgba(255,255,255, 0.1);
          display: flex;
          font-size: 0.75rem;
          padding: 0.35rem 0.5rem;
          text-decoration: none;
          color: #f2f2f2;
          transition: background-color 0.15s ease;
        }

        
        a:not(:first-child) {
          margin-left: 0.35rem;
        }
        
        a:hover {
          background-color: rgba(255,255,255, 0.2);
        }
        
        span {
          display: flex;
          align-items: center;
          margin-right: 0.25rem;
        }
        
        @media screen and (min-width: 768px) {
          a {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </a>
  )
}

function HomeSection({id, children}) {
  return (
    <section id={id}>
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
      <HomeSection id='about-us'>
        <Title size={titleSizes.giant} as={titleTags.h2} spacelessTop>
          Acerca de <br/>Templo Gaming
        </Title>
        <Typography size='large'>
          El Templo Gaming es un centro de alto rendimiento eSports que tiene como objetivo ofrecer un espacio competitivo y pensado al más mínimo detalle para aquellos que lo quieran disfrutar gracias a las instalaciones pensadas para la mejor experiencia de usuario, ambiente gaming y enfocados a crear comunidad.
        </Typography>

        <Typography size='large'>
          El centro está pensado para tus necesidades y comodidad independientemente de si quieres venir a pasarlo bien solo, con los amigos o a competir.
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
          ¿Qué encontrarás <br/> en Templo Gaming?
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
    <HomeSection id='find-us'>
      <Container isBoxed>
        <Title size={titleSizes.giant} as={titleTags.h2} spacelessTop>
          Como encontrarnos
        </Title>

        <Typography size='large'>
          <strong>El Templo Gaming</strong> se encuentra en Calle Diputació 160, barrio de la Eixample (Barcelona).
        </Typography>

        <Title size={titleSizes.l} as={titleTags.h4}>Cuando estamos abiertos</Title>
        <div className='schedule'>
          <Typography size='large' spacelessTop spacelessBottom>
            De lunes a domingo <time>09:00h</time> a <time>22:30h</time>
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

        #map-wrapper {
          border-radius: 10px;
          border: 10px solid var(--c-background);
          box-shadow: 0 10px 15px 5px var(--c-background-dark);
        }

        #map {
          position: relative;
          width: 100%;
          height: 400px;
          border-radius: 10px;
          background-color: var(--c-background-pale);
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

function ContactUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [hasFieldsWrong, setHasFieldsWrong] = useState(false)
  const [hasContacted, setHasContacted] = useState(false)
  const [hasGeneralError, setHasGeneralError] = useState(false)
  
  const handleSubmit = e => {
    e.preventDefault()

    if (!name || !email || !message) {
      setHasFieldsWrong(true)
      return
    }

    axios
      .post('/api/contact', {name, email, message})
      .then(response => {
        console.log(response)
        setHasContacted(true)
        setHasGeneralError(false)
        setHasFieldsWrong(false)
        console.log('ok')
        console.log(response)
      })
      .catch(error => {
        console.log('KO')
        console.error(error)
        setHasGeneralError(true)
      })
  }



  return (
    <HomeSection id='contact'>
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

        {!hasContacted && (
          <form onSubmit={handleSubmit}>
            <div className='ContactUs-field'>
              <label htmlFor='name'>Tu nombre</label>
              <input
                id='name'
                value={name}
                placeholder='¿Cuál es tu nombre?'
                required
                onChange={e => setName(e.target.value)}/>
            </div>

            <div className='ContactUs-field'>
              <label htmlFor='email'>Tu correo electrónico</label>
              <input
                id='email'
                type='email'
                value={email}
                placeholder='¿Cuál es tu correo?'
                required
                onChange={e => setEmail(e.target.value)}/>
            </div>

            <div className='ContactUs-field'>
              <label htmlFor='message'>¿Que quieres decirnos?</label>
              <textarea
                id='message'
                value={message}
                required
                placeholder="Escribe tu mensaje..."
                onChange={e => setMessage(e.target.value)}/>
            </div>
            {hasFieldsWrong && (
              <div className='messageHasContacted messageHasContacted--error'>
                Algunos de los campos no tiene un formato correcto. Por favor revísalos.
              </div>
            )}
            {hasGeneralError && (
              <div className='messageHasContacted messageHasContacted--error'>
                Algo no ha ido como esperabamos. Por favor intentalo más tarde.
              </div>
            )}
            <Button type='submit' theme='accent' size='large'>Enviar mi mensaje</Button>
          </form>
        )}
        {hasContacted && (
          <div className='messageHasContacted'>
            Tu mensaje se ha enviado a "El Templo Gaming" correctamente.
          </div>
        )}
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

        .messageHasContacted {
          border-left: 5px solid var(--c-background-pale);
          border-radius: 5px;
          padding-left: 2rem;
          box-sizing: border-box;
          background-color: var(--c-background-light);
          color: var(--c-background-pale);
          font-weight: 500;
          font-size: 1.125rem;
          min-height: 100px;
          display: flex;
          align-items: center;
          line-height: 1.35;
          letter-spacing: 0;
        }

        .messageHasContacted.messageHasContacted--error {
          min-height: 75px;
          margin-bottom: 1.25rem;
          background-color: #381d1d;
          color: #f1a2a2;
          border-color: #f1a2a2;
        }

        input,
        textarea {
          font-size: 1rem;
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
          padding: 1rem 1rem;
          box-sizing: border-box;
          background-color: var(--c-background-light);
          
          color: var(--c-background-pale);
          font-weight: 500;
          font-size: 1rem;
          max-width: 100%;
        }

        input,
        textarea,
        input::placeholder,
        textarea::placeholder {
          color: var(--c-background-pale);
          font-weight: 500;
          font-size: 16px;
          opacity: 0.95;
          font-family: var(--ff-text);
        }

        input::placeholder,
        textarea::placeholder {
          color: var(--c-background-pale);
          font-weight: 500;
          font-size: 16px;
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
          font-weight: 500;
          text-decoration: none;
          font-family: var(--ff-title);
          font-variant: all-small-caps;
          padding: 0.5rem 0;
          font-size: 1.15rem;
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
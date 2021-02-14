import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { Button } from 'client/components/ui/Atom/Button'
import { HomeSection } from '../section'
import { Container } from 'client/components/ui/Atom/Container'
import { Title, titleSizes, titleTags } from 'client/components/ui/Atom/Title'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
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
      .post('/api/contact', {name, email, subject, message})
      .then(response => {
        setHasContacted(true)
        setHasGeneralError(false)
        setHasFieldsWrong(false)
      })
      .catch(error => {
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

        {!hasContacted && (
          <form onSubmit={handleSubmit}>
            <div className='ContactUs-field'>
              <label htmlFor='name'>Tu nombre</label>
              <input
                id='name'
                value={name}
                placeholder='Ej: Alex'
                required
                onChange={e => setName(e.target.value)}/>
            </div>

            <div className='ContactUs-field'>
              <label htmlFor='email'>Tu correo electrónico</label>
              <input
                id='email'
                type='email'
                value={email}
                placeholder='Ej: empleado@eltemploesports.com'
                required
                onChange={e => setEmail(e.target.value)}/>
            </div>

            <div className='ContactUs-field'>
              <label htmlFor='subject'>Asunto</label>
              <input
                id='subject'
                value={subject}
                placeholder='Ej: Quiero reservar un ordenador, tengo una duda...'
                required
                onChange={e => setSubject(e.target.value)}/>
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
            <Button type='submit' theme='accent' size='large'>
              Enviar mi mensaje
            </Button>
          </form>
        )}
        {hasContacted && (
          <div className='messageHasContacted'>
            Tu mensaje se ha enviado a "El Templo eSports" correctamente.
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
          font-weight: 500;
          font-family: var(--ff-title);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          display: block;
          letter-spacing: 1.5px;
          font-size: 1rem;
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
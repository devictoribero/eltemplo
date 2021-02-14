import React from 'react'

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
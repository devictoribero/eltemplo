import React from 'react'

export function HomeSection({id, children}) {
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
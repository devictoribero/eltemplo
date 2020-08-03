import React from "react"
import Link from "next/link"

export function Logo() {
	return (
		<>
			<Link href='/'>
				<a>El templo</a>
			</Link>

			<style jsx>{`
      a {
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        color: white;
        font-family: var(--ff-title);
        letter-spacing: 2px;
        font-size: 1.5rem;
        font-weight: 500;
        font-variant: all-small-caps;
      }
    `}</style>
		</>
	)
}

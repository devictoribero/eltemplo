import React from "react"
import Link from "next/link"

export function Logo() {
	return (
		<>
			<Link href='/'>
				<a>
          <img src='/images/logo-minimal.png' />
          <span>BETA</span>
        </a>
			</Link>

			<style jsx>{`
      a {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        color: white;
        font-family: var(--ff-title);
        letter-spacing: 2px;
        font-size: 1.5rem;
        font-weight: 500;
        font-variant: all-small-caps;
      }

      span {
        font-size: 0.8rem;
        font-variant: all-small-caps;
        font-weight: bold;
        letter-spacing: 10px;
        font-family: var(--ff-title);
        margin-left: 0.45rem;
      }

      img {
        width: 60px;
      }
    `}</style>
		</>
	)
}

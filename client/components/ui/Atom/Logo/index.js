import React from "react"
import Link from "next/link"

export function Logo() {
	return (
		<>
			<Link href='/'>
				<a>
          <img src='/images/logo-minimal.png' />
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
        animation: fromLeft 0.5s ease-in, fadein 0.5s ease-in;
      }

      img {
        width: 60px;
      }

      @keyframes fromLeft {
        from {
          transform: translateX(-10px);
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
    `}</style>
		</>
	)
}

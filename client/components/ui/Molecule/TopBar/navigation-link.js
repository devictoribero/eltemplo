import NextLink from 'next/link'
import PropTypes from 'prop-types'

export const NavigationLink = ({
  href,
  icon,
  children,
  ...rest
}) => {
  const classnames = [
    icon ? `has--icon` : '',
  ].join(' ')

	return (
		<NextLink href={href}>
			<a className={classnames} {...rest}>
        {icon && <span className='icon'>{icon}</span>}
				<span className='text'>{children}</span>
				<style jsx>{`
        a {
          position: relative;
          display: flex;
          align-items: center;
          cursor: pointer;
          color: white;
          font-weight: 500;
          mine-height: 48px;
          text-decoration: none;
          letter-spacing: 2px;
          border-radius: 3px;
          font-family: var(--ff-title);
          font-variant: all-small-caps;
          padding: 1rem;
          font-size: 1.5rem;
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

        .icon {
          margin-right: 0.75rem;
          display: flex;
          align-items: center;
        }
        

        @media screen and (min-width: 768px) {
          a {
            margin-right: 0.15rem;
            padding: 0.5rem 0.75rem;
          }
        }
        `}</style>
			</a>
		</NextLink>
	)
}

NavigationLink.propTypes = {
	href: PropTypes.string.isRequired,
	isHighlight: PropTypes.bool,
	children: PropTypes.node.isRequired,
}
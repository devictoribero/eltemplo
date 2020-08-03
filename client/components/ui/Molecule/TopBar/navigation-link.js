import NextLink from 'next/link'
import PropTypes from 'prop-types'

export const NavigationLink = ({
  href,
  size = 'medium',
  icon,
  children,
  ...rest
}) => {
  const classnames = [
    `is--size-${size}`,
    icon ? `has--icon` : '',
  ].join(' ')

	return (
		<NextLink href={href}>
			<a className='link' className={classnames} {...rest}>
        {icon && <span className='icon'>{icon}</span>}
				<span className='text'>{children}</span>
				<style jsx>{`
        a {
          display: flex;
          align-items: center;
          cursor: pointer;
          color: white;
          font-weight: 500;
          text-decoration: none;
          font-variant: all-small-caps;
          letter-spacing: 2px;
          border-radius: 3px;
        }

        .is--size-medium {
          padding: 1rem;
          font-size: 1.25rem;
        }
        .is--size-small {
          font-size: 1rem;
          padding: 0.75rem 1rem;
        }

        .icon {
          margin-right: 0.75rem;
          display: flex;
          align-items: center;
        }
        
        a:hover,
        a:focus {
          background-color: #382039;
        }
        a:focus {outline: none;}

        @media screen and (min-width: 768px) {
          a {
            margin-right: 0.15rem;
          }
          
          .is--size-medium {
            padding: 0.5rem 0.75rem;
            font-size: 1.25rem;
          }
          .is--size-small {
            padding: 0.25rem;
            padding: 0.25rem 0.5rem;
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
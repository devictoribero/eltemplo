
import React from "react"
import PropTypes from "prop-types"
import Link from "next/link"

const THEMES = {
	DEFAULT: "default",
	PRIMARY: "primary"
}

const SIZES = {
	XSMALL: "xsmall",
	SMALL: "small",
	MEDIUM: "medium",
	LARGE: "large",
	GIANT: "giant",
}

const SHAPES = {
	SQUARE: "square",
	ROUNDED: "rounded",
	CIRCLE: "circle"
}

export function LinkButton({
	href,
	onClick,
	theme = THEMES.DEFAULT,
	size = SIZES.MEDIUM,
	shape = SHAPES.ROUNDED,
	isOneLine = true,
	ghost = false,
	elevation = true,
	border = true,
	isFullWidth = false,
	className,
	children,
	iconRight,
	...rest
}) {
	let classNames = [
		`is--${theme}`,
		`is--${size}`,
		`is--${shape}`,
		`${isOneLine ? "is--isOneLine" : ""}`,
		`${elevation ? "is--elevation" : ""}`,
		`${ghost ? "is--ghost" : ""}`,
		`${border ? "" : "is--borderless"}`,
		`${isFullWidth ? "is--full-width" : ""}`,
		className
	].join(" ")


	return(
		<>
			<Link href={href} >
				<a className={classNames} onClick={onClick} {...rest}>
					{children}
					{iconRight && <span className='icon is--icon-right'>{iconRight}</span>}
				</a>
			</Link>  

			<style jsx>{`
          a {
            color: var(--grey-dark);
            font-weight: 600;
            font-family: var(--ff-text);
            letter-spacing: 0.25px;
            text-decoration: none;
            
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: 3px;
            border-width: 2px;
            border-style: solid;
            box-sizing: border-box;
            
            cursor: pointer;
            transition: box-shadow ease 0.25s, background-color ease 0.15s;
          }

          .icon {
            display: flex;
            align-items: center;
          }
          .is--icon-right {
            margin-left: 0.25rem;
          }

          .is--isOneLine {
            white-space: nowrap;
          }
          
          
          .is--primary {
            border-color: var(--c-primary);
            background-color: var(--c-primary);
            color: white;
          }
          .is--primary:hover {
            border-color: var(--c-primary-dark);
            background-color: var(--c-primary-dark);
            color: white;
          }
  
          .is--primary.is--ghost {
            border-color: var(--c-primary);
            background-color: transparent;
            color: var(--c-primary);
          }
          .is--primary.is--ghost:hover {
            border-color: var(--c-primary);
            background-color: var(--c-primary);
            color: white;
          }
  
          .is--default {
            background-color: var(--c-grey-light);
            border-color: var(--c-grey-light);
            color: var(--c-light-dark);
          }
          .is--default:hover {
            background-color: var(--c-grey-lightest);
            border-color: var(--c-grey-lightest);
            color: var(--c-light-dark);
          }
  
          .is--default.is--ghost {
            background-color: transparent;
            border-color: var(--c-grey-light);
            color: var(--c-light-dark);
          }
          .is--default.is--ghost:hover {
            background-color: var(--c-grey-light);
            border-color: var(--c-grey-light);
            color: var(--c-light-dark);
          }
  
          .is--primary svg { color: white; }
          
          .is--xsmall { padding: 0.2rem 0.5rem; font-size: 0.75rem; }
          .is--small { padding: 0.4rem 0.75rem; font-size: 0.8rem; }
          .is--medium { padding: 0.5rem 1rem; font-size: 1rem; }
          .is--large { padding: 0.75rem 1.25rem; font-size: 1.1rem; }
          .is--giant { padding: 1rem 2rem; font-size: 1.25rem; }
  
          .is--square { border-radius: 0px; }
          .is--rounded { border-radius: 5px; }
          .is--pill { border-radius: 999px; }
          
          .is--elevation:hover { box-shadow: 0 4px 8px -3px rgba(1, 1, 1, 0.15); }
          .is--borderless { border: none; }
          .is--full-width {width: 100%;}
        `}</style>
		</>
	)
}
LinkButton.propTypes = {
	href: PropTypes.string,
	onClick: PropTypes.func,
	theme: PropTypes.oneOf(["default", "primary"]),
	size: PropTypes.oneOf(["xsmall", "small", "medium", "large", "giant"]),
	isExternalLink: PropTypes.bool,
	shape: PropTypes.oneOf(["square", "rounded", "pill"]),
	isOneLine: PropTypes.bool,
	reverse: PropTypes.bool,
	elevation: PropTypes.bool,
	border: PropTypes.bool,
	icon: PropTypes.node,
	isFullWidth: PropTypes.bool,
	ghost: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node,
}

import React from "react"
import PropTypes from "prop-types"

const THEMES = {
	PRIMARY: "primary",
	ACCENT: "accent",
	WHITE: "white"
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

export function Button({
	role = "button",
	onClick = () => {},
	label,
	theme = THEMES.PRIMARY,
	size = SIZES.MEDIUM,
	shape = SHAPES.ROUNDED,
	ghost = false,
	elevation = true,
	border = true,
	fullWidth,
	className,
	children,
	leftIcon,
	...other
}) {
	const classNames = [
		`is--${theme}`,
		`is--${size}`,
		`is--${shape}`,
		`${elevation ? "is--elevation" : ""}`,
		`${ghost ? "is--ghost" : ""}`,
		`${fullWidth ? "is--full-width" : ""}`,
		`${border ? "" : "is--borderless"}`,
		className
	].join(" ")

	return (
		<button
			className={classNames}
			role={role}
			aria-label={label}
			onClick={onClick}
			{...other}>
			{leftIcon && <span className='icon is--icon-left'>{leftIcon}</span>}
			{children}

			<style jsx>{`
        button {
          
          display: inline-flex;
          justify-content: center;
          align-items: center;
          border-radius: 5px;
          border: 2px solid transparent;
          white-space: nowrap;
          box-sizing: border-box;

          text-transform: uppercase;
          font-family: var(--ff-title);
          font-weight: bold;
          
          cursor: pointer;
          transition: box-shadow ease-out 0.15s, background-color ease-out 0.15s, border-color ease-out 0.15s;
        }

        button svg { color: currentColor; }
        
        .is--primary {
          border-color: var(--c-primary);
          background-color: var(--c-primary);
          color: white;
        }
        .is--primary:hover,
        .is--primary:focus {
          border-color: var(--c-primary-dark);
          background-color: var(--c-primary-dark);
          color: white;
        }
        .is--primary:focus {outline-color: var(--c-primary-darkest);}
        
        .is--accent {
          border-color: var(--c-accent);
          background-color: var(--c-accent);
          color: white;
        }
        .is--accent:hover,
        .is--accent:focus {
          border-color: var(--c-accent-dark);
          background-color: var(--c-accent-dark);
          color: white;
        }
        .is--accent:focus {outline-color: var(--c-accent-darkest);}

        .is--white {
          border-color: white;
          background-color: white;
          color: var(--c-grey-dark);
        }
        .is--white:hover,
        .is--white:focus {
          border-color: var(--c-grey-lightest);
          background-color: var(--c-grey-lightest);
        }
        .is--white:focus {outline-color: var(--c-grey);}

        .is--primary.is--ghost {
          border-color: var(--c-primary);
          background-color: transparent;
          color: var(--c-primary);
        }
        .is--primary.is--ghost:hover,
        .is--primary.is--ghost:focus {
          border-color: var(--c-primary);
          background-color: var(--c-primary);
          color: white;
        }

        .is--accent.is--ghost {
          border-color: var(--c-accent);
          background-color: transparent;
          color: var(--c-accent);
        }
        .is--accent.is--ghost:hover,
        .is--accent.is--ghost:focus {
          border-color: var(--c-accent);
          background-color: var(--c-accent);
          color: white;
        }
        .is--accent:focus {outline-color: var(--c-accent-dark);}

        .is--white.is--ghost {
          border-color: white;
          background-color: transparent;
          color: white;
        }
        .is--white.is--ghost:hover,
        .is--white.is--ghost:focus {
          border-color: var(--c-white);
          background-color: var(--c-white);
          color: #e0e1e2;
        }

        .is--small { padding: 0.4rem 0.75rem; font-size: 0.8rem; }
        .is--medium { padding: 0.5rem 1rem; font-size: 1rem; }
        .is--large { padding: 0.75rem 1.25rem; font-size: 1.1rem; }
        .is--giant { padding: 1rem 2rem; font-size: 1.25rem; }

        .is--square { border-radius: 0px; }
        .is--rounded { border-radius: 5px; }
        .is--pill { border-radius: 999px; }
        
        .is--elevation:hover,
        .is--elevation:focus { box-shadow: 0 4px 8px -3px rgba(1, 1, 1, 0.15); }
        .is--borderless { border: none; }
        .is--full-width {width: 100%;}

        .icon {
          display: inline-flex;
          align-items: center;
        }
        .is--icon-left {
          margin-right: 0.25rem;
        }
      `}</style>
		</button>
	)
}
Button.propTypes = {
	theme: PropTypes.oneOf(Object.values(THEMES)),
	size: PropTypes.oneOf(Object.values(SIZES)),
	shape: PropTypes.oneOf(Object.values(SHAPES)),
	ghost: PropTypes.bool,
	className: PropTypes.string,
	role: PropTypes.string,
	onClick: PropTypes.func,
	label: PropTypes.string,
	fullWidth: PropTypes.bool,
	elevation: PropTypes.bool,
	border: PropTypes.bool,
	leftIcon: PropTypes.node,
	children: PropTypes.node,
}

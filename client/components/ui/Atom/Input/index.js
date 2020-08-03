import React from "react"
import PropTypes from "prop-types"

export function Input({
	role = "textbox",
	type = "text",
	size = "medium",
	elevation = true,
	value,
	placeholder,
	onChange,
	hasError,
	...rest
}) {
	const styles = [
		`is--${size}`,
		`${elevation ? "is--elevation" : ""}`,
		`${hasError ? "has--error" : ""}`,
	].join(" ")
	
	return(
		<>
			<input
				className={styles}
				type={type}
				role={role}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				data-testid='input'
				{...rest}/>

			<style jsx>{`
        input {
          color: var(--c-grey-dark);
          font-weight: 500;
          font-size: 1rem;
          font-family: var(--ff-text);
					letter-spacing: 0.25px;
          
          display: inline-flex;
          width: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1rem 1.25rem;
          background-color: var(--c-grey-lightest);
					border: 1px solid transparent;
          border-radius: 3px;
          box-sizing: border-box;
          
          cursor: pointer;
          transition: box-shadow ease-out 0.25s, background-color ease-out 0.25s;
        }
        input:hover { background-color: var(--c-grey-lightest); }
        input:focus { outline-color: var(--c-primary-dark); }

        .is--small {padding: 0.5rem 0.75rem; font-size: 0.9rem;}
        .is--medium {padding: 0.75rem 1rem; font-size: 1rem;}
        .is--large {padding: 1rem 1.25rem; font-size: 1rem;}
        .is--giant {padding: 1.5rem 2rem; font-size: 1.25rem;}

				.is--elevation:hover { box-shadow: 0 4px 8px -3px rgba(1, 1, 1, 0.15); }
				.has--error {
					border-color: red;
				}
      `}</style>
		</>
	)
}
Input.propTypes = {
	type: PropTypes.string,
	role: PropTypes.string,
	onChange: PropTypes.func,
	size: PropTypes.oneOf(["small", "medium", "large"]),
	placeholder: PropTypes.string,
	elevation:  PropTypes.bool,
	value:  PropTypes.string,
	children: PropTypes.string,
	hasError: PropTypes.bool,
}
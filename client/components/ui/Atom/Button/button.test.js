import React from "react"
import {render, fireEvent} from "@testing-library/react"
import {Button} from "./index"

describe("Atom / Button", () => {
	test("The user can see the button", () => {
		const {getByText} = render(<Button>click me</Button>)
    
		expect(getByText(/click me/i)).toBeInTheDocument()
	})
  
	test("Users with disabilities can use the button", () => {
		const {getByRole} = render(
			<Button
				label='accessible text for the button'
				role='submit'
			>
        click me
			</Button>
		)
    
		expect(getByRole("submit")).toHaveAttribute("aria-label", "accessible text for the button")
	})
  
	test("The user can interact with the button", () => {
		const mockOnclick = jest.fn(() => {})
    
		const {getByText} = render(<Button onClick={mockOnclick}>click me</Button>)
		const buttonElement = getByText(/click me/i)
		fireEvent.click(buttonElement)
    
		expect(mockOnclick).toBeCalledTimes(1)
		fireEvent.click(buttonElement)
		expect(mockOnclick).toBeCalledTimes(2)
	})
})
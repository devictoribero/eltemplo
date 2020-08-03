import React from "react"
import { render } from "@testing-library/react"
import {Box} from "./index"

describe("Atom / Box", () => {
	test("The user can thee content inside the box", () => {
		const { queryByText } = render(<Box>works fine!</Box>)
		const childrenElement = queryByText(/works fine!/i)

		expect(childrenElement).toBeInTheDocument()
	})

	test("The user can see different boxes with different sizes", () => {
		const {getByText} = render(
			<div>
				<Box padding='none'>no padding</Box>
				<Box padding='medium'>medium padding</Box>
				<Box padding='large'>large padding</Box>
			</div>
		)

		expect(getByText(/no padding/i)).toHaveStyle("padding: 0;")
		expect(getByText(/medium padding/i)).toHaveStyle("padding: 1rem;")
		expect(getByText(/large padding/i)).toHaveStyle("padding: 1.25rem;")
	})

	test("The user can see an elevated box", () => {
		const {getByText} = render(<Box hasShadow>with shadow</Box>)
		const boxElement = getByText(/with shadow/i)

		expect(boxElement).toHaveStyle("box-shadow: 0 20px 70px 0 rgba(0,0,0,0.1);")
	})

	test("The user can see different the box with different shapes", () => {
		const {getByText} = render(
			<div>
				<Box shape='square'>squared box</Box>
				<Box shape='rounded'>rounded box</Box>
				<Box shape='circle'>circle box</Box>
			</div>
		)

		expect(getByText(/squared box/i)).toHaveStyle("border-radius: 0;")
		expect(getByText(/rounded box/i)).toHaveStyle("border-radius: 3px;")
		expect(getByText(/circle box/i)).toHaveStyle("border-radius: 10px;")
	})
})

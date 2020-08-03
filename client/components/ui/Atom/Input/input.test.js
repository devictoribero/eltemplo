import React from "react"
import { render } from "@testing-library/react"
import {Input} from "./index"

describe("Atom / Input", () => {
	test("The user can see the component", () => {
		const { getByTestId } = render(<Input value='' onChange={() => {}}/>)
		expect(getByTestId("input")).toBeInTheDocument()
	})
})

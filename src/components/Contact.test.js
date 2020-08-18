import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import ContactForm from "./ContactForm";
import {act} from "react-dom/test-utils"

it("Input validation error is rendering", async() => {
    const mockOnSubmit = jest.fn();
   const {getByTestId, container} = render(<ContactForm />)
   
   await act(async () => {
   fireEvent.change(getByTestId("nameInput"), { target: { value: "invali name"}})
   fireEvent.blur(getByTestId("nameInput"))
   })
   
   expect(container.innerHTML).not.toMatch("Looks like there was an error:")
})
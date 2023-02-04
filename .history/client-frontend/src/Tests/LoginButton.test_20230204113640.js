import { render, screen} from "@testing-library/react"
import Dashboard from "../Pages/Dashboard"
test("on initial render, the login button is disabled", () => {
    render(<Dashboard />) 

    screen.getByRole("button")
    
})
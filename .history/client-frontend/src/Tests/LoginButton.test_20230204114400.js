import { render, screen} from "@testing-library/react"
import Login from "../Components/Login"
test("on initial render, the login button is disabled", () => {
    render(<Dashboard />) 

    screen.getByRole("button")
    
})
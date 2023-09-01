import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Gig from "../src/components/Gig";

describe("Gig", () => {
    it("Should render the correct event details", () => {
        render(<Gig 
            name="Infected Mushroom"
            details="UK Tour"
        />)
        expect(screen.getByText("Infected Mushroom"))
        expect(document.querySelector('.eventDetails').textContent).toContain("UK Tour")
    });

})
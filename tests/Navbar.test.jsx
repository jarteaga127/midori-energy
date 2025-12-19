import { render, screen } from "@testing-library/react";
import NavBar from "../src/components/Navbar";
import { MemoryRouter } from "react-router-dom";
import {describe, it, expect} from "vitest";


describe ('Navbar', () => {
    it('should have five links in the navbar', () => {
        render(
        <MemoryRouter>
        <NavBar/>
    </MemoryRouter>
    );
        const navLinks = screen.getAllByRole('link');
        expect(navLinks).toHaveLength(5);

    }); 
});
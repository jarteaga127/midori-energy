import { fireEvent, render, screen } from "@testing-library/react";
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

it('should have links that goes to the home page', () => {
     render(
        <MemoryRouter>
        <NavBar/>
    </MemoryRouter>
    );
    const allLinks = screen.getAllByRole('link');
    const homeLink = allLinks.find(link => link.getAttribute('href') === '/');
    expect(homeLink).toBeTruthy();
})

it('should toggle the side menu when the hamburger button is clicked', () => {
        const mockToggle = vi.fn();
        render(
            <MemoryRouter>
        <NavBar toggle={mockToggle} isOpen={false}/>
    </MemoryRouter>
        )
        const sideMenuBtn = screen.getByTestId('side-menu-toggle');
        fireEvent.click(sideMenuBtn);
        expect(mockToggle).toHaveBeenCalledTimes(1);
    })
    
});
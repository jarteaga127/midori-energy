import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "../src/components/Footer";
import { MemoryRouter } from "react-router-dom";
import {describe, it, expect} from "vitest";

describe('Footer', () => {
    it('Should have links that go to the home page', () => {
        render(
            <MemoryRouter>
                <Footer/>
            </MemoryRouter>
        );
        const allLinks = screen.getAllByRole('link');
    const homeLink = allLinks.find(link => link.getAttribute('href') === '/');
    expect(homeLink).toBeTruthy();
    })
})
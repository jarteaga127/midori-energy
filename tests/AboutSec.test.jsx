import AboutSec from "../src/components/AboutSec";
import { describe, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

describe('AboutSec', () => {
    it('Should have a header', () => {
        render(
            <MemoryRouter>
                <AboutSec/>
            </MemoryRouter>
        );
        const header = screen.getByRole('heading', {level: 2, name: /about us/i});
        expect(header).toBeTruthy();
    });
    
    it('Should have a link that goes to the about page', () => {
        render(
            <MemoryRouter>
                <AboutSec/>
            </MemoryRouter>
        );
        const readMorelink = screen.getByRole('link', {name: /read more about our story here/i});
expect(readMorelink.getAttribute('href')).toBe('/about-us');
    })
})
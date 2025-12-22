import { MemoryRouter } from "react-router-dom";
import { describe, expect } from "vitest";
import Features from "../src/components/Features";
import { render, screen } from "@testing-library/react";



describe('Features', () => {
    it('Should have a header', () => {
        render(
        <MemoryRouter>
            <Features/>
        </MemoryRouter>
        );
        const header = screen.getByRole('heading', {level: 2, name: /what drinking midori green tea can do for you?/i});
        expect(header).toBeTruthy();
    })
})
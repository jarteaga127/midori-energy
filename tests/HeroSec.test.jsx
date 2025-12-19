import { describe } from "vitest";
import HeroSec from "../src/components/HeroSec";
import { MemoryRouter } from "react-router-dom";
import {render, screen} from "@testing-library/react";

describe('HeroSec', () => {
    it('Should render the button', () => {
render(
    <MemoryRouter>
        <HeroSec/>
    </MemoryRouter>
);

        const button = screen.getAllByRole('button', {name: /Shop now/i});
        expect(button).toBeTruthy();
    });
});
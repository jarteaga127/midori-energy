import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import CartPage from '../src/pages/CartPage';
import { describe } from 'vitest';

describe("Cartpage", () => {
    it("Should display a message when the cart is empty", () => {
        render(
            <MemoryRouter>
                <CartPage cart={[]}/>
            </MemoryRouter>
        );

        expect(screen.getByText(/looks like your cart is empty/i)).toBeTruthy();
    })
});
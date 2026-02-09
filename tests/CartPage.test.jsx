import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import CartPage from '../src/pages/CartPage';
import { describe, expect, vi } from 'vitest';

describe("Cartpage", () => {
    it("Should display a message when the cart is empty", () => {
        render(
            <MemoryRouter>
                <CartPage cart={[]}/>
            </MemoryRouter>
        );

        expect(screen.getByText(/looks like your cart is empty/i)).toBeTruthy();
    });

    it("Should display items and calculate the total cost", () => {
        const mockCart = [
 {id: 1,
        item: "canned green tea unsweetened",
        price: 199,

    },
    {id: 2,
        item: "canned green tea Mint",
        price: 199,

    }           
        ];
        render(
            <MemoryRouter>
                <CartPage cart={mockCart}/>
            </MemoryRouter>
        );
        expect(screen.getByText(/canned green tea unsweetened/i)).toBeTruthy();
expect(screen.getByText(/canned green tea mint/i)).toBeTruthy();    
expect(screen.getByText(/398/i)).toBeTruthy();    
    });

    it("Should call the removeFromCart function when the remove button is clicked", () => {
const mockRemove = vi.fn();

const mockCart = [
    {
        id: 1,
        item: "canned green tea unsweetened",
        price: 199
    }
];

render(
<MemoryRouter>
      <CartPage cart={mockCart} removeFromCart={mockRemove} />
    </MemoryRouter>    
);

const removeButton = screen.getByText(/remove from cart/i);
fireEvent.click(removeButton);

expect(mockRemove).toHaveBeenCalled();
expect(mockRemove).toHaveBeenCalledWith(0);


    })
});
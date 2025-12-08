import { vi, describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar'; 

// 1. --- TOP-LEVEL MOCKS ---
// Use a common pattern for mocking icon libraries
vi.mock('react-icons/fa6', async (importOriginal) => {
  const original = await importOriginal();
  return {
    ...original,
    FaBars: () => <svg data-testid="fa-bars" />,
  };
});

vi.mock('react-icons/ri', async (importOriginal) => {
  const original = await importOriginal();
  return {
    ...original,
    RiCloseLargeFill: () => <svg data-testid="ri-close" />,
  };
});

// If the above is too complex, try the simplest direct replacement (less robust but often works):
// vi.mock('react-icons/fa6', () => ({ FaBars: 'FaBarsMock' }));
// vi.mock('react-icons/ri', () => ({ RiCloseLargeFill: 'RiCloseLargeFillMock' }));

// Helper function to wrap the component in a Router context
const renderWithRouter = (ui) => {
    return render(ui, { wrapper: BrowserRouter });
};

describe('Navbar Component', () => {

    // Mock the toggle function to track user interaction
    const mockToggle = vi.fn(); 

    // --- TEST 1: INITIAL CLOSED STATE (isOpen=false) ---
    test('1. Renders all links and shows the closed icon (FaBars)', () => {
        // ARRANGE: Render the Navbar in the default closed state
        renderWithRouter(<Navbar toggle={mockToggle} isOpen={false} />);

        // ASSERT: Check for key elements and state
        
        // Check main links (using text content)
        expect(screen.getByText('Midori')).toBeInTheDocument();
        expect(screen.getByText('Shop')).toBeInTheDocument();
        expect(screen.getByText('Subscribe')).toBeInTheDocument();
        
        // Check for the correct icon
        expect(screen.getByTestId('fa-bars')).toBeInTheDocument();
        expect(screen.queryByTestId('ri-close')).not.toBeInTheDocument();
    });


    // --- TEST 2: OPEN STATE (isOpen=true) ---
    test('2. Renders open state and shows the RiCloseLargeFill icon', () => {
        // ARRANGE: Render the Navbar in the open state
        renderWithRouter(<Navbar toggle={mockToggle} isOpen={true} />);

        // ASSERT: Check for the icon switch
        expect(screen.getByTestId('ri-close')).toBeInTheDocument();
        expect(screen.queryByTestId('fa-bars')).not.toBeInTheDocument();
        
        // OPTIONAL ASSERTION: Check the side menu container class
        // const sideMenu = screen.getByRole('generic', { name: /side-menu-cont/i }); // Would need to add aria-label
        // If you added data-testid="side-menu-container" to the side menu div, you could use:
        // expect(screen.getByTestId('side-menu-container')).toHaveClass('open');
    });


    // --- TEST 3: USER INTERACTION ---
    test('3. Calls the toggle prop when the side menu button is clicked', () => {
        // ARRANGE: Render the Navbar (state doesn't matter for this test)
        renderWithRouter(<Navbar toggle={mockToggle} isOpen={false} />);

        // ACT: Find the toggle button using the new data-testid and click it
        const toggleButton = screen.getByTestId('side-menu-toggle');
        fireEvent.click(toggleButton);

        // ASSERT: Verify the mock function was executed
        expect(mockToggle).toHaveBeenCalledOnce();
    });


    // --- TEST 4: ROUTING AND LINKS ---
    test('4. All Link components have the correct "to" attributes', () => {
        // ARRANGE: Render the Navbar
        renderWithRouter(<Navbar toggle={mockToggle} isOpen={false} />);

        // ACT/ASSERT: Check specific links
        
        // Check the Logo link
        const logoLink = screen.getByRole('link', { name: /Midori/i });
        expect(logoLink).toHaveAttribute('href', '/');

        // Check "About us" links (should be two, one in nav and one in side menu)
        const aboutUsLinks = screen.getAllByRole('link', { name: /About us/i });
        expect(aboutUsLinks).toHaveLength(2); 
        aboutUsLinks.forEach(link => {
            expect(link).toHaveAttribute('href', '/about-us');
        });
    });
});
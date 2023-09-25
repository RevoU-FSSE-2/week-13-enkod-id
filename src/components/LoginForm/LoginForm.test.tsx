import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'
import LoginForm from '.';

describe('test login form', () => {
    const mockProps = jest.fn();
    it('title render correctly', async () => {
        render(<LoginForm onSubmit={mockProps}/>)
        const title = screen.getByText('Login Page')
        expect(title).toBeDefined();
    })

    it('label username render correctly', async () => {
        render(<LoginForm onSubmit={mockProps}/>)
        const title = screen.getByText('Username')
        expect(title).toBeDefined();
    })

    it('label password render correctly', async () => {
        render(<LoginForm onSubmit={mockProps}/>)
        const title = screen.getByText('Password')
        expect(title).toBeDefined();
    })

    it('button submit render correctly', async () => {
        render(<LoginForm onSubmit={mockProps}/>)
        const title = screen.getByText('Submit')
        expect(title).toBeDefined();
    })

    // it('onSubmit works correctly', async () => {
    //     render(<LoginForm onSubmit={mockProps}/>)
    //     const usernameInput = screen.getByPlaceholderText('Enter username');
    //     const passwordInput = screen.getByPlaceholderText('Enter password');
    //     const submitButton = screen.getByText('Submit')

    //     fireEvent.change(usernameInput, { target: { value: 'testuser'}})
    //     fireEvent.change(passwordInput, { target: { value: 'testpassword'}})

    //     fireEvent.click(submitButton)

    //     expect(usernameInput).toHaveBeenCalledWith({
    //         username: 'testuser',
    //         password: 'testpassword'
    //     })
    // })
})
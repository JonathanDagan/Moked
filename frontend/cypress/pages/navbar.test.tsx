import React from 'react'
import { mount } from '@cypress/react'
import NavBar from '../../components/Navbar/Navbar'

it('Renders page component', () => {
  mount(<NavBar />)
  cy.contains('HaMoked')
})
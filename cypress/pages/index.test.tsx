import React from 'react'
import { mount } from '@cypress/react'
import IndexPage from '../../pages/index'

it('Renders page component', () => {
  mount(<IndexPage />)
  cy.contains('Welcome to Next.js')
})
import React from 'react';
import { render, screen } from '@testing-library/react'
import Resty from './Resty';

describe('RESTy', () => {
   it('preforms HTTP requests', async () => {
      render(<Resty />)
      
      
      await screen.findByText('RESTy');
   })
})
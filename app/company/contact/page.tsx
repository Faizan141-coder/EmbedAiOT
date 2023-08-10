'use client'

import React from 'react'
import { NewsletterForm } from '@/components/newsletter-form';

const page: React.FC = () => {

  return (
    <div>
          <div className='my-10 flex px-52'>
            <div className='text-justify'>
                <div>
                  <NewsletterForm />
                </div>
            </div>
          </div>
    </div>
  )
}

export default page
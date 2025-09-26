'use client'
import React from 'react'
import ScrollStack, { ScrollStackItem } from './ScrollStack'
import Card from './Card'

export default function Portfolio() {
  return (
    <div className=''>
      <ScrollStack useWindowScroll itemDistance={200} stackPosition='20%' itemStackDistance={10} baseScale={1} rotationAmount={0}>
        <ScrollStackItem>
          <Card imageUrl='/images/portfolio/1.png' title='Card 1' description='This is the first card in the stack' />
        </ScrollStackItem>
        <ScrollStackItem>
          <Card imageUrl='/images/portfolio/1.png' title='Card 2' description='This is the second card in the stack' />
        </ScrollStackItem>
        <ScrollStackItem>
          <Card imageUrl='/images/portfolio/1.png' title='Card 3' description='This is the third card in the stack' />
        </ScrollStackItem>
      </ScrollStack>
    </div>
  )
}

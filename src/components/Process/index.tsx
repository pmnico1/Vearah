import React from 'react'
import ProcessCard from './ProcessCard'
import { processSteps } from './data'

export default function Process() {
  return (
    <div className='flex flex-col justify-center items-center w-full text-center my-40'>
      <p>Our Process</p>
      <p className='text-[40px] max-w-[500px] mx-auto px-10'>We created Vearah to
        be naturally ahead</p>
      <p className='text-[20px] max-w-[600px] mx-auto py-5'>We created Vearah to help visionary companies design the future. We don`t just make things look good we craft clarity, trust, and growth into every product.</p>

      {processSteps.map((step) => (
        <ProcessCard
          key={step.stepNumber}
          title={step.title}
          description={step.description}
          stepNumber={step.stepNumber}
          imageSrc={step.imageSrc}
          imageAlt={step.imageAlt}
        />
      ))}
    </div>
  )
}

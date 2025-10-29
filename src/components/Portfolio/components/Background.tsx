import React from 'react'

export default function Background() {
  return (
    <div
      className="text-zinc-500 p-8 opacity-30 text-lg"
      style={{
        contain: 'layout style paint', // Isolate rendering
        willChange: 'auto', // Remove if not animating
      }}
    >

      <div className="max-w-6xl mx-auto relative z-20 bg-none">
        <div className="grid grid-cols-2 gap-16">

          <div className="space-y-16">
            <div className="space-y-4 leading-relaxed">
              <p>
                At our agency, we believe that every great solution begins with a spark of possibility. Your ideas, challenges, and ambitions form the foundation of that spark, and our role is to nurture it into something powerful. We don’t see websites or digital platforms as isolated products; we see them as living expressions of your brand’s vision and purpose. Every project is an opportunity to transform goals into experiences that not only look beautiful but also perform with impact, guiding your business toward meaningful growth.
              </p>
            </div>

            <div className="space-y-4 leading-relaxed">
              <p>
                Design and development, to us, is not simply about aesthetics or functionality—it is about discovery. We take the time to understand your audience, your challenges, and the outcomes you want to achieve. Through research, strategy, and collaboration, we uncover insights that shape our creative direction. Each decision, from the flow of a user journey to the details of visual design, is intentional. By weaving strategy and creativity together, we ensure that the solutions we build are not only elegant but also effective, aligning seamlessly with your broader business goals.
              </p>
            </div>
          </div>


          <div className="space-y-16">
            <div className="space-y-4 leading-relaxed">
              <p>
                As your ideas evolve, we guide them through a process of refinement and innovation. Every iteration adds depth and clarity, shaping a solution that truly resonates. Whether it’s a responsive website, a custom platform, or a digital ecosystem that connects multiple touchpoints, we focus on creating experiences that engage your audience and build trust. We believe in solutions that are not only visually captivating but also intuitive, scalable, and built to adapt to your future needs—because digital success is never static, it grows with you.
              </p>
            </div>

            <div className="space-y-4 leading-relaxed">
              <p>
                Ultimately, our mission is to help you achieve lasting results. We measure success not by the delivery of a product alone, but by the value it brings to your business and the connections it fosters with your audience. Every choice we make, every detail we refine, is about empowering your brand to move forward with confidence. Together, we transform vision into reality—building not just websites, but digital solutions that embody your goals, amplify your message, and pave the way for your next chapter of growth.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 max-w-6xl mx-auto" style={{
        background: 'radial-gradient(32.24% 32.24% at 50% 50%, rgba(0, 0, 0, 0) 0%, #010101 100%)',
      }} />
    </div>
  )
}

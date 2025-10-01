import DecorativeGradient from '@/assets/svgs/DecorativeGradient'

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex flex-col justify-end items-start w-full max-w-[530px] min-h-[450px] h-full rounded-[40px] relative overflow-hidden group pb-10 px-10"
      style={{
        background: 'radial-gradient(72.32% 44% at 51.71% 0%, rgba(129, 187, 255, 0.3) 0%, rgba(25, 25, 25, 0) 100%)'
      }}
    >
      <div className="absolute bottom-0 left-0 w-full group-hover:opacity-100 opacity-0 transition-opacity duration-1000">
        <DecorativeGradient width="100%" height="96" />
      </div>

      {children}
    </div>
  )
}

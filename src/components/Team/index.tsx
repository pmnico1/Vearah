import TeamCard from './TeamCard'

const teamMembers = [
  {
    id: 1,
    name: "Ryan Faulkner",
    title: "CEO",
    company: "InnovateTech",
    quote: "We're committed to long-term partnerships, optimizing and scaling products to deliver lasting value and a strong return on investment for our clients.",
    avatar: "/images/feedback/1.jpg",
  },
  {
    id: 2,
    name: "Sophia Chang",
    title: "Product Director",
    company: "Digital Solutions Pro",
    quote: "Their expertise in building scalable products and their partnership approach has transformed how we deliver value to our customers.",
    avatar: "/images/feedback/2.jpg",
  },
  {
    id: 3,
    name: "Liam Torres",
    title: "CTO",
    company: "Future Dynamics",
    quote: "Working with this team means getting both exceptional technical execution and strategic vision. They've become an extension of our team.",
    avatar: "/images/feedback/3.jpg",
  },
  {
    id: 4,
    name: "Ryan Faulkner",
    title: "CEO",
    company: "InnovateTech",
    quote: "We're committed to long-term partnerships, optimizing and scaling products to deliver lasting value and a strong return on investment for our clients.",
    avatar: "/images/feedback/1.jpg",
  },
  {
    id: 5,
    name: "Sophia Chang",
    title: "Product Director",
    company: "Digital Solutions Pro",
    quote: "Their expertise in building scalable products and their partnership approach has transformed how we deliver value to our customers.",
    avatar: "/images/feedback/2.jpg",
  },
  {
    id: 6,
    name: "Liam Torres",
    title: "CTO",
    company: "Future Dynamics",
    quote: "Working with this team means getting both exceptional technical execution and strategic vision. They've become an extension of our team.",
    avatar: "/images/feedback/3.jpg",
  },
]

export default function Team() {
  return (
    <div className='flex flex-col justify-center items-center w-full text-white text-center my-40 px-4'>
      <p className="text-sm font-medium mb-4">What people say about us</p>
      <p className='text-[40px] max-w-[500px] mx-auto px-2 mb-16 font-medium'>
        Here is what people are saying about us
      </p>
      <div className='flex flex-wrap justify-center items-center gap-10 my-20 lg:mx-32'>
        {teamMembers.map((member) => (
          <TeamCard
            key={member.id}
            name={member.name}
            title={member.title}
            company={member.company}
            quote={member.quote}
            avatar={member.avatar}
          />
        ))}
      </div>
    </div>
  )
}

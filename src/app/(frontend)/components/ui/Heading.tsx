interface HeadingProps {
  text: string
  className?: string
}

export const Heading: React.FC<HeadingProps> = ({ text, className }) => {
  return (
    <h2
      className={`md:text-3xl text-2xl md:text-start text-center font-bold text-black ${className || ''}`}
    >
      {text}
    </h2>
  )
}

import { ReactNode } from "react"

type CardProps = {
  children: ReactNode
  className?: string
}

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg overflow-hidden border-px border-linear-to-b from-neutral-400 to-transparent ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
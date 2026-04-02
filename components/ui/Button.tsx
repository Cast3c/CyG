import { ReactNode } from "react"

type CardProps = {
  children: ReactNode
  className?: string
}

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg overflow-hidden ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
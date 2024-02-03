import { FC } from 'react'
import ReactHtmlParser from 'react-html-parser'
import ContainerFluid from './ContainerFluid'

interface Content {
  content: string
  isPrimary?: boolean
}

interface TitleProps {
  content: Content[]
}

export const SectionTitle: FC<TitleProps> = ({ content }) => {
  return (
    <div className="container mt-[60px] mx-auto max-w-6xl">
      <ContainerFluid>
        <h3 className="overflow-hidden text-center uppercase font-title text-[28px] leading-[42px] font-normal">
          {content.map((item, index) => (
            <span
              key={index}
              className={`inline-block ${item.isPrimary ? 'text-primary' : ''}`}
            >
              {ReactHtmlParser(item.content)}
            </span>
          ))}
        </h3>
      </ContainerFluid>
    </div>
  )
}

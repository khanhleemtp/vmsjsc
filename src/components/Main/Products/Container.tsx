import ContainerFluid from '@/components/shared/ContainerFluid'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { FC } from 'react'

interface ProductItem {
  src: string
  title: string
}

const listProducts: ProductItem[] = [
  {
    src: '	https://livedemo00.template-help.com/wt_prod-12465/images/product-01-370x300.jpg',
    title: 'Product 1'
  },
  {
    src: '	https://livedemo00.template-help.com/wt_prod-12465/images/product-02-370x300.jpg',
    title: 'Product 2'
  },
  {
    src: '	https://livedemo00.template-help.com/wt_prod-12465/images/product-03-370x300.jpg',
    title: 'Product 3'
  }
]

const ProductItemContainer: FC<ProductItem> = ({ src, title }) => {
  return (
    <div
      className="flex flex-col items-center space-y-[15px] w-full shadow-lg rounded-lg"
      css={{
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)'
        }
      }}
    >
      <div className="w-full flex justify-center items-center border-t rounded-lg shadow-inner">
        <img src={src} alt={title} />
      </div>
      <h4 className="text-center text-[20px] font-bold">{title}</h4>
      <span></span>
    </div>
  )
}

const ProductsContainer = () => {
  return (
    <ContainerFluid>
      <SectionTitle
        content={[
          { content: 'our  &nbsp;' },
          { content: 'products', isPrimary: true }
        ]}
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-[30px]">
        {listProducts.map((product, index) => (
          <ProductItemContainer key={index} {...product} />
        ))}
      </div>
    </ContainerFluid>
  )
}

export default ProductsContainer

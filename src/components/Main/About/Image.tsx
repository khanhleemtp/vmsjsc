const listImage = [
  {
    alt: 'Image 1',
    src: 'https://livedemo00.template-help.com/wt_prod-12465/images/about-01-639x480.jpg'
  },
  {
    alt: 'Image 2',
    src: 'https://livedemo00.template-help.com/wt_prod-12465/images/about-02-639x480.jpg'
  },
  {
    alt: 'Image 3',
    src: 'https://livedemo00.template-help.com/wt_prod-12465/images/about-03-639x480.jpg'
  }
]

const Image = () => {
  return (
    <div className="w-full px-4 md:px-0 mt-[60px]">
      <div className="flex flex-wrap">
        {listImage.map((item, index) => (
          <div key={index} className="w-full md:w-1/3">
            <div className="w-full relative">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Image

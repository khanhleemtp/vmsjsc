import ContainerFluid from '@/components/shared/ContainerFluid'

const Title = () => {
  return (
    <div className="mx-auto container max-w-6xl">
      <ContainerFluid>
        <h3 className="uppercase text-[28px] leading-[1.5] font-title text-heading text-center">
          Who we are
        </h3>
        <p className="text-center text-xs leading-[18px] font-[300]">
          Team of alternative energy specialists
        </p>
        <hr className="mt-[45px] h-[1px] bg-[#eee] border-none" />
        <div className="mt-[40px] flex flex-wrap leading-[27px]">
          <p className="text-[17px] leading-[25.5px] text-heading text-center">
            Our company is an end-to-end, customer oriented alternative energy
            company that is centered on marketing, trading, transportation, and
            distribution of solar panels in the US and around the world...
            Firstly, we’re an environmentally friendly renewable energy company
            offering a broad portfolio of technologies, products & solutions to
            our clients globally!
          </p>
        </div>
      </ContainerFluid>
    </div>
  )
}

export default Title

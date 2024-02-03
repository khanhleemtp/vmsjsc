import ContainerFluid from '@/components/shared/ContainerFluid'
import { SectionTitle } from '@/components/shared/SectionTitle'

const link =
  'https://livedemo00.template-help.com/wt_prod-12465/images/home-08-270x180.jpg'

const ContactsContainer = () => {
  return (
    <ContainerFluid>
      <SectionTitle content={[{ content: 'Contact us' }]} />
      <div className="md:flex justify-center items-center md:gap-4">
        <div className="flex items-center justify-center mt-[60px]">
          <img
            className=" h-auto inline-block align-middle max-w-full rounded-md"
            src={link}
            alt="Contact"
          />
        </div>
        <div className="text-center md:text-left">
          <h6 className="text-[20px] font-bold mt-[30px] mb-[15px]">
            Thôn Thịnh Nội
          </h6>
          <p>
            Xã Mỹ Thắng
            <br />
            Huyện Mỹ Lộc, Tỉnh Nam Định
          </p>
          <dl className="md:flex md:items-center">
            <dt className="font-bold text-sm">Email:&nbsp; </dt>
            <dd>@info.vmsjsc.com</dd>
          </dl>
        </div>
      </div>
    </ContainerFluid>
  )
}

export default ContactsContainer

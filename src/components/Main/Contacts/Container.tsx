import ContainerFluid from '@/components/shared/ContainerFluid'
import { SectionTitle } from '@/components/shared/SectionTitle'

const link =
  'https://livedemo00.template-help.com/wt_prod-12465/images/home-08-270x180.jpg'

const ContactsContainer = () => {
  return (
    <ContainerFluid>
      <SectionTitle content={[{ content: 'Contact us' }]} />
      <div className="flex items-center justify-center mt-[60px]">
        <img
          className=" h-auto inline-block align-middle max-w-full rounded-md"
          src={link}
          alt="Contact"
        />
      </div>
      <div className="text-center">
        <h6 className="text-[20px] font-bold text-center mt-[30px] mb-[15px]">
          HQ Office (Boston, MA, USA)
        </h6>
        <p>
          8949 Kenamar Drive, Suite 101
          <br />
          San Diego, CA 92121
        </p>
        <dl>
          <dt className="font-bold text-sm">Phone: </dt>
          <dd>+1 (800) 123 1234</dd>
        </dl>
      </div>
    </ContainerFluid>
  )
}

export default ContactsContainer

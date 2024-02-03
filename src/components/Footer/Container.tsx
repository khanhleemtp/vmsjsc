const FooterContainer = () => {
  return (
    <footer className="bg-[#131313] mt-[60px] pt-[60px] pb-[15px] text-white text-center">
      <div className="container mx-auto space-y-8">
        <div className="flex items-center justify-center">
          <img
            src="vms-logo.png"
            alt="VMS"
            width={52}
            className="h-auto inline-block object-cover"
          />
        </div>
        <div className="text-center">
          <p className="text-[14px]">© 2021 VMS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterContainer

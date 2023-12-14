import LineDivider from 'components/atoms/LineDivider'
import Image from 'next/image'
import React from 'react'

const LogoList = () => {
  return (
    <>
      <section className="py-8 m-0 flex flex-row flex-wrap place-items-center justify-around gap-4 md:gap-0 border-y border-borderLight" data-aos='fade-left'>
        <div className="">
          <Image
            src={'/images/github-logo.svg'}
            width={120}
            height="36"
            alt="github logo"
          />
        </div>
        <div className="">
          <Image
            src={'/images/amazon_Web_Services_Logo.svg'}
            width={120}
            height="36"
            alt="aws logo"
          />
        </div>
        <div className="">
          <Image
            src={'/images/azure.svg'}
            width={120}
            height="36"
            alt="azure logo"
          />
        </div>
        <div className="">
          <Image
            src={'/images/gcp.svg'}
            width={120}
            height="36"
            alt="gcp logo"
          />
        </div>
        <div className="">
          <Image
            src={'/images/kubernetes_logo.svg'}
            width={120}
            height="36"
            alt="kubernetes logo"
          />
        </div>
      </section>
    </>
  )
}

export default LogoList

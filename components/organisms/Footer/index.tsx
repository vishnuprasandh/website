
import React from 'react'
import LineDivider from 'components/atoms/LineDivider'
import NavBrand from 'components/atoms/NavBrand'
import NavLink from 'components/atoms/NavLink'
import Text from 'components/atoms/Text'
import IconList from '../../molecules/IconList';
import { SiFacebook, SiWhatsapp, SiLinkedin, SiInstagram, SiGmail, SiYoutube} from 'react-icons/si'
import {BiSolidPhoneCall} from 'react-icons/bi'
import IconListItem from 'components/molecules/IconListItem'


const Footer = () => {
  return (
    <>
     <LineDivider />
     <footer className="mt-4 pb-2 sm:flex sm:flex-row md:flex-col md:items-center ">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-32 xl:gap-16">
          <div className="space-y-4 pl-4">
          <Text value="CONTACT" textStyle="FooterLinkGroupTitle"  />
            <div className="space-y-[3px] ">
              <div className="flex items-center">
                <IconListItem icon={<SiGmail />} label=''value="info@goprimetechnologies.com" />
                </div>
              
              <div className="flex items-center">
             
              <IconListItem icon={<BiSolidPhoneCall/>} label=''value="+91 7845234856" />
           
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-7 sm:grid-cols-3 lg:gap-32 xl:gap-[12px] leading-9">
            <div className="space-y-5">
              <Text value="SERVICES" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[1px]">
                <NavLink 
                  value="Web Development"
                  href="/service/detail"
                />
                <br />
                <NavLink
                  value="App Development"
                  href="/service/detail"
                />
                <br />
                <NavLink value="UI Design" href="/service/detail" />
                <br />
                <NavLink value="Consultation" href="/service/detail" />
                <br />
                <NavLink value="Maintenance" href="/service/detail" />
              </div>
            </div>
            <div className="space-y-5">
              <Text value="COMPANY" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[1px]">
                <NavLink value="About" href="/about" />
                <br />
                <NavLink value="Contact" href="/contact" />
                <br />
                <NavLink value="Terms & Conditions" href="/Terms-and-Conditions-of-Service" />
                <br />
                <NavLink value="Privacy Policy" href="/Privacy-Policy" />
                <br />
                <NavLink value="Refund Policy" href="/refund-policy" />
                <br />
                {/* <NavLink value="Cookies Policy" href="/Cookies-Policy" /> */}
              </div>
            </div>
            <div className="space-y-5">
              <Text value="FOLLOW US" textStyle="FooterLinkGroupTitle" />
              
              <div className="space-y-[-4px]leading-10 ">
              <div className="space-y-[3px] ">
                <div className="flex items-center">
                   <IconListItem icon={<SiWhatsapp />} value='Whatsapp' href="https://wa.me/917845234856"/>
                </div>

                <div className="flex items-center">
                   <IconListItem icon={<SiInstagram />} value='Instagram' href="https://www.instagram.com/goprimeofficial/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="/>
                </div>
                
                <div className="flex items-center">
                   <IconListItem icon={<SiLinkedin  />} value='Linkedin' href="https://www.linkedin.com/company/go-prime-technologies/?viewAsMember=true"/>
                </div>
                
                <div className="flex items-center">
                  <IconListItem icon={<SiYoutube />} value='Youtube' href="https://www.youtube.com/@goprime-tech"/>
                </div>
                </div>
             </div>

            

          </div>
          </div>
        </div>
      </footer>
      <LineDivider />

      <footer className="mt0 pb-4 sm:flex sm:flex-col md:flex-col md:items-center ">
  <div className="flex flex-col gap-2 lg:flex-row lg:gap-[32px] xl:gap-[16px]">
    <div className="flex-auto space-y-5">
    
    </div>
    <div className="flex-auto space-y-5">
      <div className="flex flex-col gap-8 pl-5 lg:flex-row lg:gap-[44px] xl:gap-[16px]">
        <Text value={`Copyright © ${new Date().getFullYear()} Go Prime Technologies`} textStyle="SectionParagraph" />
      </div>
    </div>
  </div>
</footer>
    </>
  );
};

export default Footer;

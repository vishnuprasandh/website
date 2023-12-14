import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <PageTemplate>
      <section className="space-y-6 text-center" data-aos="zoom-in-up">
        <PageSentence  badge="Privacy Policy" title={`Go Prime Technologies Privacy Policy`} />
        <Text textStyle="BlogMeta" value={`Updated at ${new Date().toISOString().split('T')[0]}`} />
      </section>
      <LineDivider />
      <section className="grid place-items-center" data-aos="fade-up">
        <div className="w-full sm:w-10/12 md:w-8/12 space-y-10">
          <Text
            textStyle="PageContent"
            value={`
            This privacy policy sets out how Go Prime Technologies uses and protects any information that you give Go Prime Technologies when you use this website.
Go Prime Technologies is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, and then you can be assured that it will only be used in accordance with this privacy statement.
Go Prime Technologies may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.

<br> <br>

<b>We may collect the following information:</b>

<br>

Name and job title
Contact information including email address
Demographic information such as postcode, preferences and interests
Other information relevant to customer surveys and/or offers

<br> <br>

<b>What we do with the information we gather:</b>

<br><br>

We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:

<br><br>

Internal record keeping.
We may use the information to improve our products and services.
We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.
<br>
From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customise the website according to your interests.
<br>
We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure we have put in suitable measures.

<br> <br>
<b>How we use cookies:</b>
<br><br>

A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyses web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.
We use traffic log cookies to identify which pages are being used. This helps us analyses data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
<br><br>
<strong>Controlling your personal information</strong>
<br><br>

You may choose to restrict the collection or use of your personal information in the following ways:
whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes
if you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at
We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, at the above address. We will promptly correct any information found to be incorrect.

<br><br>          
<b>Contact Information</b>
<br><br>
If you have any questions or concerns about this Privacy Policy, please contact us at <strong>info@goprimetechnologies.com</strong>.
            
            `}
          />
        </div>
      </section>
    </PageTemplate>
  )
}

export default PrivacyPolicy;


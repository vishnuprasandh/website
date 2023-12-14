import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'

const RefundPolicy = () => {
  return (
    <PageTemplate>
      <section className="space-y-1.5 text-center" data-aos="zoom-in-up">
        <PageSentence badge="Refund Policy" title={`Go Prime Technologies Refund Policy`} />
        <Text textStyle="BlogMeta" value={`Updated at 2023-10-29`} />
      </section>
      <LineDivider />
      <section className="grid place-items-center" data-aos="fade-up">
        <div className="w-full sm:w-10/12 md:w-8/12 space-y-10">
          <Text
            textStyle="PageContent"
            value={`
            Thank you for choosing our software development and training services. We strive to provide you with top-notch solutions and training experiences. However, we understand that circumstances may arise where a refund or exchange is necessary. Please read our cancellation and refund policy carefully.
            <br><br>
            <b>Returns and Exchanges:</b>
            <br><br>
            Software Development Services: Our software development services are typically project-based. If you wish to cancel a project or discuss a refund, please contact us within 7 days of the project start date. Refunds will be considered on a case-by-case basis, taking into account the project's progress and incurred costs.
            Software Training: For training services, you can request a refund within 7 days of the training program's commencement. If you find that the training is not meeting your expectations, please reach out to us promptly.
            <br><br>
            <b>Initiating a Return or Exchange:</b>
            <br><br>
            To initiate a return or exchange, please send an email to <b>info@goprimetechnologies.com</b> with the subject line "Refund/Exchange Request." In the email, include your name, contact information, the service you are seeking a refund or exchange for, and a brief explanation of the reason for the request. Our customer support team will respond promptly to guide you through the process.
            <br><br>
            <b>Refund Processing Time:</b>
            <br><br>
            Once your refund or exchange request is approved, we will process it within 7 business days. The actual time it takes for the funds to appear in your account may vary depending on your bank or credit card provider.
              `}
          />
        </div>
      </section>

    </PageTemplate>
  )
}

export default RefundPolicy

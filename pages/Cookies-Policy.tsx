
import React from 'react';

import LineDivider from 'components/atoms/LineDivider';
import Text from 'components/atoms/Text';
import PageSentence from 'components/molecules/PageSentence';
import PageTemplate from 'components/templates/PageTemplate';

const CookiesPolicy = () => {
  return (
    <PageTemplate>
      <section className="space-y-1.5 text-center" data-aos="zoom-in-up">
        <PageSentence badge="Cookies Policy" title={`Go Prime Technologies Cookies Policy`} />
        <Text textStyle="BlogMeta" value={`Updated at 2023-10-29`} />
      </section>
      <LineDivider />
      <section className="grid place-items-center" data-aos="fade-up">
        <div className="w-full sm:w-10/12 md:w-8/12 space-y-10">
        <Text
  textStyle="PageContent"
  value={`
    1. What Are Cookies?
    Cookies are small text files that are stored on your device when you visit a website.
    They are widely used to enhance your browsing experience, personalize content,
    and provide insights into how the website is used.
    <br><br>
    2. Types of Cookies We Use
    <br><br>
    2.1 Essential Cookies
    These cookies are necessary for the proper functioning of our website. They enable you to navigate the site and use essential features.
    <br><br>
    2.2 Analytics Cookies
    We use analytics cookies to collect information about how visitors interact with our website. This helps us analyze and improve the performance of our site.
    <br><br>
    2.3 Marketing Cookies
    Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.
    <br><br>
    3.Session Cookies
    <br><br>
    3.1Session cookies are temporary and are deleted when you close your browser. 
    They help us recognize you during a single visit.
    <br><br>
    3.2 Persistent Cookies
    Persistent cookies remain on your device for a specified period or until you manually delete them. They store information such as your preferences for future visits.
    We may use third-party services that also use cookies. These services include but are not limited to analytics tools and advertising networks. Please note that third parties may also use their own cookies.
    <br><br>
    4. Third-Party Cookies
    We may use third-party services that also use cookies. These services include but are not limited to analytics tools and advertising networks. Please note that third parties may also use their own cookies.
    <br><br>
    5.Browser Settings
    You can control and manage cookies through your browser settings. 
    <br><br>
    5.1Most browsers allow you to refuse or accept cookies and to delete them.
    <br><br>
    5.2 Opt-Out
    You can opt-out of targeted advertising by adjusting your preferences through industry opt-out mechanisms or by visiting the third-party websites directly.
    We reserve the right to update or modify this Cookie Policy at any time. Any changes will be reflected on this page, and you are encouraged to review this policy periodically.
    If you have any questions or concerns about our Cookie Policy, please contact us at info@goprimetechnologies.com.
    <br><br>
    6. Changes to this Cookie Policy
    We reserve the right to update or modify this Cookie Policy at any time. Any changes will be reflected on this page, and you are encouraged to review this policy periodically.
    <br><br>
    7. Contact Information
    If you have any questions or concerns about our Cookie Policy, please contact us at info@goprimetechnologies.com.
  `}
          />
        </div>
      </section>
    </PageTemplate>
  );
};

export default CookiesPolicy;

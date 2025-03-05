import React from "react";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-[150px]">
      <h1 className="text-4xl font-fanwood text-center text-darkblue mb-6">
        Terms of Service
      </h1>
      <p className="text-center font-lato font-light text-gray-600 mb-8">
        Effective Date: 5 May 2025
      </p>

      <div className="space-y-12">
        {/* 1. Introduction & Acceptance */}
        <section>
          <h2 className="font-lato text-xl md:text-xl text-left text-darkblue mb-4 font-normal mt-20">1. Introduction & Acceptance</h2>
          <p className="font-lato font-light text-gray-600 leading-relaxed">
          This agreement outlines the terms and conditions for using the services provided by Clare, a company specializing in AI-powered skin analysis and personalized skincare recommendations. By accessing or using Clare’s Platform, you are entering into a legally binding agreement with Clare. This agreement governs your use of Clare’s Platform, the AI-powered skin analysis services, and any related features provided through the Platform. It is important that you carefully read and understand these Terms before using Clare’s services, as they affect your legal rights and obligations. Clare reserves the right to modify or update these Terms from time to time, and it is your responsibility to check for any changes. If you do not agree with any part of these Terms, you should immediately stop using Clare’s services.
          </p>

          <div className="mt-6">
            <h3 className="font-lato text-xl text-darkblue font-medium mb-3">1.1 Effective Date</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            The effective date of these Terms is March 2025. By accessing or using Clare's platform and services, you agree to be bound by the terms outlined in this agreement, starting from this date. These Terms supersede and replace any prior agreements or versions of terms that may have applied to your use of the Services. Clare reserves the right to update, modify, or amend these Terms at any time, and any changes will be posted on the Platform. The updated Terms will be effective once they are made available on the Platform, and continued use of the Services constitutes acceptance of the revised Terms. If you do not agree with the updated Terms, you are required to cease using Clare’s Platform and Services immediately.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-lato text-xl text-darkblue font-medium mb-3">1.2 Parties</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            This agreement is made between Clare, a company providing AI-powered skin analysis and skincare services, and you, the User. By using Clare’s platform, you acknowledge and agree that these Terms form a binding legal agreement between you and Clare. If you are accessing the Platform on behalf of an organization, you confirm that you have the legal authority to enter into these Terms on behalf of that organization. In such instances, the term "you" refers to the organization, and you, personally, guarantee that the organization will adhere to and comply with these Terms. Should the organization fail to comply with these Terms, you, as the individual representative, will be held accountable for the breach.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-lato text-xl text-darkblue font-medium mb-3">1.3 Binding Agreement</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            By clicking "Start," "Agree," or taking any similar action to use Clare’s Platform, or by accessing any of the Services offered, you indicate your acceptance of these Terms. This action constitutes a legal agreement between you and Clare. If you do not agree to any part of these Terms, you must discontinue use of the Platform immediately. Clare reserves the right to amend these Terms at any time, and by continuing to use the Services, you consent to be bound by the updated Terms. You acknowledge that it is your responsibility to review these Terms periodically to stay informed of any changes that may occur.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-lato text-xl text-darkblue mb-5 font-normal">2. Service Overview</h2>
          <p className="font-lato font-light text-gray-600 leading-relaxed">
          Clare offers a suite of services designed to enhance the way individuals understand and care for their skin. The core of Clare’s offering is its AI-powered skin analysis, which evaluates your skin condition by analyzing images you upload to the platform. Based on this analysis, Clare provides personalized skincare recommendations that are tailored to meet your skin’s specific needs, helping you select the most suitable skincare products. Through this process, Clare combines advanced artificial intelligence with dermatological insights to deliver highly customized advice. While Clare aims to empower users to take charge of their skin health, it’s important to note that these recommendations are based on AI analysis and not on professional medical advice. The Platform is designed to give you the tools to make informed decisions about your skincare routine. Clare also offers the opportunity to purchase skincare products recommended through the AI analysis, though it does so in partnership with third-party retailers rather than as a direct vendor.
          </p>

          <div className="mt-6">
            <h3 className="font-lato text-xl text-darkblue font-medium mb-3">2.1 Core Functionality</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            The primary feature of Clare’s platform is its AI-powered skin analysis, which allows users to upload images of their skin to receive personalized feedback and product recommendations. The analysis is designed to assess various aspects of your skin, including hydration levels, texture, tone, and other factors, to generate insights about your skin's overall health. Based on the results, Clare’s platform provides tailored skincare advice, recommending specific products that are best suited to address the concerns identified through the analysis. In addition to the analysis, Clare also provides educational content, expert tips, and wellness advice to further support users in achieving optimal skin health. Through this comprehensive service, Clare aims to offer a holistic approach to skincare, combining technology with expert knowledge to guide users toward making better-informed decisions about their skin care regimen.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-lato text-xl text-darkblue font-medium mb-3">2.2 Limitations</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            It is important to understand that while Clare’s AI-powered skin analysis provides valuable insights into your skin’s condition, it is not a substitute for professional medical advice, diagnosis, or treatment. Clare does not claim to diagnose or treat any skin conditions, nor should the recommendations provided by the AI be considered medical treatment. Users should consult a licensed healthcare professional or dermatologist for any medical concerns regarding their skin health. Additionally, Clare does not serve as a retail or delivery platform. While users may be directed to third-party retailers to purchase recommended products, Clare itself does not sell or fulfill product orders. Clare is not responsible for the quality, availability, or compliance of products sold through third-party vendors, and users are encouraged to review the vendor’s terms of service and privacy policies before making any purchases.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-lato text-xl text-darkblue font-medium mb-3">2.3 No Subscription Model</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            Clare’s platform operates without a subscription model. Users only pay for the services they choose to use or the products they decide to purchase, on a one-time basis. There are no recurring charges, automatic renewals, or hidden fees associated with Clare’s services. This straightforward, pay-per-use approach ensures that users only incur charges for the specific features and products they opt for. Clare does not impose subscription-based commitments, and any future introduction of subscription-based services will be clearly communicated to users. Users will have the opportunity to review and opt-in to any such services, with a clear understanding of the terms and costs associated with them.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-lato text-darkblue text-xl mb-5 font-normal">3. Eligibility & Registration</h2>
          <p className="font-lato font-light text-gray-600 leading-relaxed">
          To access the full range of Clare’s services, users must meet certain eligibility requirements and complete the registration process. Clare is committed to ensuring that its platform is accessible and beneficial to a wide range of users, but it also places restrictions on who can access its services to ensure compliance with applicable laws and regulations. By creating an account and using the Clare platform, you agree to comply with these eligibility requirements and the terms of this agreement. Clare takes its users’ privacy and security seriously, requiring accurate and up-to-date information during the registration process to ensure the effective use of the Platform.
          </p>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">3.1 Eligibility</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            Clare’s services are intended for use by individuals who are at least 18 years of age. If you are under the age of 18, you may not use Clare’s Platform without the explicit consent of a parent or legal guardian. Clare reserves the right to verify the age and identity of users and may suspend or terminate accounts that do not meet these eligibility criteria. It is the user’s responsibility to ensure they comply with these age-related requirements. Additionally, Clare prohibits users from certain jurisdictions, specifically those in countries subject to international sanctions or export restrictions. Clare adheres to all applicable laws and regulations and reserves the right to refuse access to the platform if a user’s location or status violates these laws. You are responsible for ensuring that your use of the platform is compliant with the laws of your jurisdiction.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">3.2 Account Creation</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            In order to fully access the services provided by Clare, you must create an account by providing accurate and truthful information during the registration process. This may include details such as your name, email address, and skin-related information that will help Clare provide personalized skin analysis. You are responsible for maintaining the accuracy of the information you provide and for promptly updating it if it changes. Clare cannot be held liable for any issues or complications arising from inaccurate or outdated information. You will also be required to set up login credentials, including a username and password, which you must keep confidential. You agree to notify Clare immediately if you suspect any unauthorized access or use of your account. Clare is not responsible for any unauthorized activity on your account unless caused by Clare’s own negligence.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-lato text-darkblue text-xl mb-5 font-normal">4. License & Usage</h2>
          <p className="font-lato font-light text-gray-600 leading-relaxed">
          Clare provides users with a non-exclusive, non-transferable, and revocable license to access and use the Platform and Services for personal, non-commercial purposes. This license grants you the ability to upload skin images, receive personalized AI-powered skin analysis, view product recommendations, and make purchases. However, you are not permitted to sell, lease, sublicense, or distribute any part of the Platform, nor reverse engineer or modify its functionality. The intellectual property rights related to the Platform, its content, and the underlying technology remain solely with Clare or its licensors, and this license does not confer any ownership over those assets. Clare maintains the exclusive rights to the Platform’s intellectual property, and your usage is limited to the rights explicitly outlined in these Terms.
          </p>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">4.1 License Grant</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            Clare grants you the right to access and use the Platform for your personal, non-commercial use. This includes uploading your skin photos, receiving AI-driven analysis, viewing customized skincare recommendations, and purchasing products based on these insights. However, you may not engage in any activities such as reselling, sublicensing, or modifying the Platform’s content or functionality. The ownership of the Platform, its content, and the associated intellectual property remains with Clare or its licensors. By using the Platform, you acknowledge that you do not acquire any ownership rights over it.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">4.2 Restrictions</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            While Clare provides access to its services, there are restrictions on how you can use the Platform. You agree not to modify, copy, distribute, or exploit any part of the Platform for commercial purposes without prior written consent from Clare. Additionally, you are prohibited from reverse engineering, decompiling, disassembling, or attempting to access the source code of any part of the Platform. Engaging in unlawful, fraudulent, or harmful activities while using the Platform, including the collection or processing of personal data from other users without consent, is also prohibited. Clare reserves the right to suspend or terminate your access to the Platform if you violate these restrictions.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">4.3 Service Updates</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            Clare may periodically update or modify the Platform to enhance functionality, introduce new features, or resolve technical issues. Clare will make reasonable efforts to notify users about significant updates, although some updates may occur without prior notice. While Clare strives to minimize disruptions, some minor changes may impact the user experience. If an update negatively affects your use of the Platform, Clare will address the issue promptly, but no guarantee is made regarding the consistency or continuity of service performance.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-lato text-darkblue text-xl mb-5 font-normal">5. Payment Terms</h2>
          <p className="font-lato font-light text-gray-600 leading-relaxed">
            Clare offers users the ability to purchase skincare products that are recommended based on their AI-powered skin analysis. All payments for products or services are processed securely through third-party payment processors. The transaction for any purchase will be a one-time payment, and Clare will provide clear information on the costs involved before completing the transaction.
          </p>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">5.1 Purchasing Products</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              When purchasing products through the Clare Platform, payments are processed by third-party services such as credit card providers or secure payment gateways. You must provide accurate and valid payment information for the transaction to be completed successfully. Once a payment is made, it is final, and Clare will not be responsible for any errors resulting from incorrect payment information provided by you.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">5.2 Refunds</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              Clare offers a refund policy for defective or damaged products purchased via the Platform. If you receive a product that is defective or does not match the description, you may request a refund within 30 days of receiving the product. To request a refund, you must provide proof of purchase and the product’s condition. Refunds will be processed back to the original payment method, and Clare reserves the right to deny refund requests that do not meet the required criteria or are made after the 30-day period.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">5.3 Fee Changes</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            Clare reserves the right to modify the pricing for products and services available on the Platform at its discretion. Any such changes will be communicated to users in advance, either via email or through notifications displayed on the Platform. Before completing any purchase, you will have the opportunity to review the updated pricing. By continuing to use the Platform after the price changes have been implemented, you acknowledge and accept the revised pricing terms. Clare strives to ensure transparency in its pricing structure and will provide users with sufficient notice regarding any adjustments.            </p>
          </div>
        </section>

        {/* 6. Service Availability & Uptime */}
        <section>
          <h2 className="font-lato text-darkblue text-xl mb-5 font-normal">6. Service Availability & Uptime</h2>
          <p className="font-lato font-light text-gray-600 leading-relaxed">
          Clare strives to offer its users a reliable and accessible service with minimal disruptions. While Clare works diligently to ensure the continuous availability of the Platform and its Services, we cannot guarantee that the Platform will always be accessible without interruptions. Various factors, such as scheduled or emergency maintenance, technical issues, or unforeseen external circumstances, may lead to temporary service interruptions or outages. These interruptions could be caused by issues within Clare’s infrastructure or may arise due to factors outside of Clare’s control, including internet connectivity problems or disruptions in third-party services that the Platform depends on. While Clare endeavors to minimize these disruptions, users should understand that there may be periods of unavailability, and Clare is not liable for any inconvenience or losses resulting from these service interruptions.          </p>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">6.1 Uptime Commitment</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            Clare aims to maintain an uptime availability rate of 99.5%, meaning that, in general, users can expect the Platform to be operational and accessible for the majority of the time. However, this is a target rather than a guarantee, and no warranty is provided that the service will be available continuously. In the event of service disruptions or outages, Clare will make commercially reasonable efforts to restore normal service operation as promptly as possible. The Platform's availability may be affected by factors such as system updates, maintenance activities, or technical difficulties. Users should be aware that temporary interruptions in service are a normal part of operating complex digital platforms, and Clare is not liable for any damages, losses, or inconveniences caused by these interruptions. While Clare will always strive to resolve issues swiftly, service continuity cannot be assured at all times.            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">6.2 Third-Party Dependencies</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            Clare’s Platform and Services may depend on external factors and third-party services, such as internet service providers, cloud hosting services, and payment processors. As a result, Clare is not responsible for any downtime, performance issues, or disruptions caused by these external dependencies. Service interruptions that occur due to issues with internet connectivity, third-party service failures, or events beyond Clare's control, such as force majeure events (e.g., natural disasters, government actions, or widespread power outages), may lead to unanticipated outages. Clare cannot be held accountable for disruptions originating from these external sources and users should understand that such circumstances are outside of Clare’s influence. In such cases, Clare will work with third-party providers to restore service as quickly as possible but makes no guarantees regarding the resolution timeline.            </p>
          </div>
        </section>

        {/* 7. User Responsibilities & Conduct */}
        <section>
          <h2 className="font-lato text-darkblue text-xl mb-5 font-normal">7. User Responsibilities & Conduct</h2>
          <p className="font-lato font-light text-gray-600 leading-relaxed">
          This section outlines your obligations and expectations when using Clare's Platform. By agreeing to these terms, you commit to using the services responsibly and ethically, ensuring that your actions do not harm the platform, other users, or Clare’s intellectual property. Clare reserves the right to enforce these responsibilities and take action if you fail to comply.
          </p>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">7.1 Responsible Use</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            As a user of Clare's Platform, you agree to use the services in a manner that is lawful, ethical, and respectful of other users and Clare’s intellectual property. You are responsible for ensuring that your activities on the Platform comply with all applicable laws and regulations, including but not limited to privacy, intellectual property, and consumer protection laws.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-3">
            You agree not to engage in any behavior that may damage, impair, or interfere with the proper functioning of the Platform, or disrupt the experience of other users. You must not upload content that contains viruses, malware, or other malicious code intended to harm Clare’s systems or other users. Additionally, you must not attempt to use the Platform for any unlawful purposes or in any manner that could cause damage to Clare’s reputation, business, or services.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">7.2 Content Submission</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            While using the Platform, you may upload images, data, or other content for the purpose of receiving skin analysis or interacting with Clare’s services. You are responsible for ensuring that any content you submit does not infringe upon the intellectual property or privacy rights of third parties. By uploading content to Clare, you grant Clare a non-exclusive, royalty-free, worldwide license to use, display, modify, and distribute that content for the purpose of providing the requested services, improving the Platform, and for promotional purposes related to Clare’s business.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-3">
            Clare does not claim ownership of the content you upload, but you acknowledge and agree that Clare may retain, in its sole discretion, content and data as part of the operation and enhancement of the Services. You represent and warrant that the content you submit is accurate, truthful, and does not violate any applicable laws, including but not limited to laws concerning intellectual property and privacy.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">7.3 Prohibited Activities</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            In addition to the general conduct outlined above, you agree not to engage in any of the following activities while using the Platform:
            </p>
            <ul className="list-disc pl-5 font-lato font-light text-gray-600 leading-relaxed mt-3">
              <li> <strong>Impersonation:</strong> Pretend to be someone you are not, or mislead others by providing false information about your identity or affiliation.</li>
              <li> <strong>Harmful Content:</strong> Post or transmit content that is abusive, defamatory, offensive, or harassing in nature.</li>
              <li> <strong>Fraudulent Activity:</strong> Attempt to defraud Clare or other users, including using stolen or fraudulent payment methods.</li>
              <li> <strong>Circumventing Security Measures:</strong> Engage in activities designed to circumvent security or technological measures implemented by Clare or other third parties to protect the integrity of the Platform.</li>
            </ul>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-3">
            Failure to adhere to these responsibilities and prohibited activities may result in the suspension or termination of your account, along with potential legal action.
            </p>
          </div>
        </section>

        {/* 8. Privacy & Data Protection */}
        <section>
          <h2 className="font-lato text-darkblue text-xl mb-5 font-normal">8. Privacy & Data Protection</h2>
          <p className="font-lato font-light text-gray-600 leading-relaxed">
          Clare is committed to protecting your privacy and personal data. This section describes how your data is collected, used, and shared, ensuring transparency about Clare’s data handling practices. By using the Platform, you consent to the collection and use of your personal information in accordance with the Privacy Policy. Clare strives to protect your data but also provides clarity on how your information may be used and retained.
          </p>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">8.1 Data Collection</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            Clare values your privacy and is committed to handling your personal data responsibly. By using the Platform, you consent to the collection, use, and sharing of your data in accordance with Clare’s Privacy Policy. The data collected may include, but is not limited to, personal information, skin-related details, payment information, and usage statistics. This data helps Clare personalize your experience, improve the Services, and provide you with relevant skincare recommendations.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-3">
            Clare may also collect data through your interactions with the Platform, including information about the devices you use, your IP address, browser type, and operating system. This information is used to analyze how you use the Platform, ensure its functionality, and improve its features. You are responsible for ensuring that any personal data you provide to Clare is accurate and up-to-date.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">8.2 Data Usage & Sharing</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            Clare uses your personal data solely for the purposes outlined in these Terms and the Privacy Policy. This includes providing services, processing payments, and improving the Platform. Clare does not sell or rent your personal data to third parties, but it may share your data with trusted partners for the purpose of delivering services or processing transactions on Clare’s behalf. These partners are required to use your data in compliance with Clare’s Privacy Policy and to protect it in a manner consistent with industry standards.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-3">
            Clare may also share your data if required by law or in response to a legal request. Additionally, Clare may use anonymized data for statistical and research purposes to improve its products and services.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">8.3 Data Retention</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            Clare retains your personal data only for as long as necessary to provide services or fulfill legal obligations. If you wish to request the deletion of your personal data or inquire about its retention, you can contact Clare’s support team through the channels outlined in the Privacy Policy. However, Clare may need to retain certain data for regulatory or legal reasons, even after the termination of your account or cessation of use of the Platform.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-3">
            Clare takes reasonable steps to protect your data from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and Clare cannot guarantee absolute security of your data. 
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">8.4 User Rights & Regional Compliance</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            Under data protection laws like the GDPR and CCPA, users have rights to access, correct, update, or delete their personal data. You can manage your data through your account settings or by contacting Clare at <a href="mailto:contact@clare.ai" className="text-blue-600 hover:underline">contact@clare.ai</a>. Clare processes biometric data, such as skin images, only with your explicit consent, and ensures its secure storage using AES-256 encryption. You have the right to withdraw your consent at any time, after which Clare will promptly delete or remove the biometric data in compliance with privacy regulations. Clare is committed to safeguarding your data and ensuring transparency in its management.            </p>
          </div>
        </section>
        
        {/* 9. Disclaimers & Limitation of Liability */}
        <section>
          <h2 className="font-lato text-darkblue text-xl mb-5 font-normal">9. Disclaimers & Limitation of Liability</h2>
          <p className="font-lato font-light text-gray-600 leading-relaxed">
          This section explains the limitations of Clare’s liability and the disclaimers that apply to the use of its Platform and Services. It outlines that Clare provides the Platform "as is" and makes no guarantees regarding performance or results. By using the Platform, you accept these terms, and Clare’s liability is limited to the extent permitted by applicable law.
          </p>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">9.1 Disclaimers</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            Clare’s Services are provided "as is" and without any warranties of any kind, either express or implied. Clare does not warrant that the Platform will meet your expectations or be free of errors, interruptions, or bugs. While Clare strives to ensure that the Platform functions optimally, there are inherent limitations to any technology platform, and Clare does not guarantee uninterrupted access or performance.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-3">
            Clare makes no claims or representations regarding the effectiveness of the skincare recommendations provided through the AI analysis. Results may vary based on individual skin conditions, lifestyle factors, and other variables. Any skincare advice given should be used as a guide and not as a definitive solution for skin health concerns.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">9.2 Limitation of Liability</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            To the fullest extent permitted by applicable law, Clare shall not be liable for any indirect, incidental, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising from or in connection with your use of the Platform or Services. Clare’s liability for any direct damages shall be limited to the amount you paid for the specific service or product that caused the damage.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-3">
            In no event shall Clare be responsible for any damages arising out of the use, inability to use, or reliance on the Platform, except where the damages result from Clare’s willful misconduct or gross negligence.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">9.3 Indemnification</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            You agree to indemnify, defend, and hold harmless Clare, its affiliates, officers, employees, agents, and licensors from any claims, liabilities, damages, losses, or expenses (including legal fees) arising out of your use of the Platform, your violation of these Terms, or your infringement of any rights of any third party. Clare reserves the right to assume the exclusive defense of any matter subject to indemnification by you, in which case you agree to cooperate fully with Clare in asserting any available defenses.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">9.4 Medical Disclaimer</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            Clare’s AI analysis is informational only—not a diagnostic tool. Always consult a dermatologist for medical concerns. Results may vary based on skin type, environment, or image quality.
            </p>
          </div>
        </section>

        {/* 10. Termination */}
        <section>
          <h2 className="font-lato text-darkblue text-xl mb-5 font-normal">10. Termination</h2>
          <p className="font-lato font-light text-gray-600 leading-relaxed">
          This section outlines how Clare or the user may end access to the Platform and its services, including actions Clare may take for violations of the Terms, and the implications of termination.
          </p>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">10.1 Termination by Clare</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            Clare may suspend or permanently terminate access to the Platform if it determines, at its discretion, that you have violated the Terms, engaged in fraudulent behavior, or disrupted the Platform’s security or functionality. In such cases, you will not receive a refund for unused services, and your account will be deactivated. Data linked to your account may be deleted or retained according to Clare’s Privacy Policy. Clare may also take legal action to enforce these Terms. Clare’s decision to terminate is final. However, Clare will provide notice for terminations not related to a violation, including instructions for retrieving data if applicable.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">10.2 Termination by User</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            You may terminate your account at any time via account settings or customer support. Access to the Platform and its services will end immediately. You will remain responsible for any financial obligations incurred before termination. Clare may retain some account data for business, legal, or regulatory purposes as detailed in its Privacy Policy. If you request deletion of personal information post-termination, Clare will comply with data privacy regulations, though some data may be retained for administrative reasons.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">10.3 Survival of Provisions</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            Even after the termination of your account or cessation of your use of the Platform, certain provisions of these Terms will remain in effect. These include but are not limited to:
            </p>
            <ul className="list-disc pl-5 font-lato font-light text-gray-600 leading-relaxed mt-3">
              <li> <strong>Payment Obligations:</strong> You are still required to fulfill any outstanding payments or obligations related to products or services purchased before termination.</li>
              <li> <strong>Indemnification:</strong> Your obligation to indemnify Clare for any claims, damages, or liabilities arising from your use of the Services will continue to apply after termination.</li>
              <li> <strong>Liability Limitations:</strong> Clare's liability limitations, including the caps on damages and exclusions for indirect or consequential damages, will remain enforceable even after account termination.</li>
              <li> <strong>Confidentiality:</strong> Any confidentiality obligations regarding sensitive information will survive termination. This includes the handling of proprietary or confidential data.</li>
              <li> <strong>Legal Compliance:</strong> Both parties will continue to adhere to applicable legal requirements related to data retention, privacy laws, and other regulatory obligations after termination.</li>
            </ul>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-3">
            Additionally, any disputes or unresolved claims arising before termination or in connection with the termination will remain subject to the dispute resolution provisions outlined in these Terms. Both parties retain the right to pursue their claims in accordance with the arbitration or legal processes described herein.
            </p>
          </div>
        </section>

        {/* 11. Warranties & Indemnification */}
        <section>
          <h2 className="font-lato text-darkblue text-xl mb-5 font-normal">11. Warranties & Indemnification</h2>
          <p className="font-lato font-light text-gray-600 leading-relaxed">
          This section details the warranties and representations made by both Clare and the user. It emphasizes the user’s responsibilities regarding the accuracy and legality of the content they upload, as well as their obligations to indemnify Clare in certain situations. The section also clarifies Clare’s liability in the event of claims or damages arising from the user’s actions.
          </p>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">11.1 User Warranties</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            By using the Platform, you represent and warrant that:
            </p>
            <ul className="list-disc pl-5 font-lato font-light text-gray-600 leading-relaxed mt-3">
              <li> You are at least 18 years of age, possess the legal capacity to enter into these Terms, and agree to be bound by them.</li>
              <li> Any content that you upload to the Platform, including images, videos, and other materials, does not violate any intellectual property rights, privacy rights, or any other legal obligations. You retain all rights to any content you upload, but by doing so, you grant Clare a non-exclusive, royalty-free, worldwide license to use, display, and distribute such content in connection with providing the Services.</li>
              <li> You will provide accurate and truthful information during account registration and in any communications with Clare. You agree to keep your account information up-to-date and notify Clare promptly if there are any changes to your details.</li>
              <li> You will comply with all applicable local, state, national, and international laws while using the Services and Platform. This includes respecting all privacy laws, consumer protection laws, and intellectual property rights.</li>
              <li> You are solely responsible for ensuring the accuracy and legality of any personal health data or biometric information shared with Clare, especially if you use the AI-powered skincare analysis feature. You are also responsible for obtaining any necessary consents or permissions from third parties for the collection and processing of such data.</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">11.2 Indemnification</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            You agree to indemnify, defend, and hold harmless Clare, its affiliates, employees, agents, and partners from any and all claims, damages, losses, liabilities, costs, or expenses (including reasonable legal fees) arising from or in connection with:
            </p>
            <ul className="list-disc pl-5 font-lato font-light text-gray-600 leading-relaxed mt-3">
              <li> Your use or misuse of the Platform, Services, or any of Clare’s products.</li>
              <li> Your violation of these Terms, including any intellectual property or privacy rights of others.</li>
              <li> Any breach of your warranties or representations under these Terms.</li>
              <li> Any claims arising from third-party use of your account or your failure to adequately protect your account credentials.</li>
              <li> Any legal claims related to your use of AI-driven skin analysis, including but not limited to any medical or health-related issues arising from the use of the skin care recommendations.</li>
            </ul>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-3">
            Clare reserves the right to assume the exclusive defense of any such claim or legal action at your expense, and you agree to cooperate fully in the defense of such claims.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">11.3 Limitation of Liability</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            To the fullest extent permitted by law, Clare’s liability, whether in contract, tort, or otherwise, shall be limited to the amount you paid Clare during the 3-month period preceding the event giving rise to the claim, or $1,000, whichever is lower. Under no circumstances will Clare be liable for any indirect, incidental, special, punitive, or consequential damages, including but not limited to loss of profits, loss of data, or damage to your reputation, even if Clare was advised of the possibility of such damages.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-3">
            This limitation of liability applies regardless of the form of action, whether based on contract, tort, or other legal theory, and will remain enforceable even if any limited remedy provided under these Terms fails of its essential purpose.
            </p>
          </div>
        </section>

        {/* 12. Disclaimers */}
        <section>
          <h2 className="font-lato text-darkblue text-xl mb-5 font-normal">12. Disclaimers</h2>
          <p className="font-lato font-light text-gray-600 leading-relaxed">
          Clare provides important disclaimers regarding the services it offers, including the limitations of liability and the absence of guarantees related to the effectiveness of certain features like the AI-powered skin analysis. This section also highlights the presence of third-party content and services within the Platform, making users aware of the risks involved.
          </p>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">12.1 General Disclaimer</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            The Services provided by Clare, including the skin analysis and skincare recommendations, are offered "AS-IS" without any representations or warranties of any kind, either express or implied. Clare does not warrant that the Platform will be uninterrupted or error-free, that defects will be corrected, or that the Platform will meet your requirements or expectations. Clare makes no warranty of any kind regarding the results of using the skin analysis tools or the efficacy of skincare products recommended through the Platform.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-3">
            You understand that the AI-powered skin analysis provided by Clare is based on machine learning and algorithmic processing and should not be considered a substitute for professional medical advice. The results provided by the Platform are for informational purposes only, and Clare does not guarantee the accuracy, completeness, or effectiveness of any recommendations provided. You should always consult a healthcare professional before following any advice or recommendations regarding skincare or health.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">12.2 Third-Party Content</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            The Platform may include content, services, or products provided by third parties, including links to third-party websites. Clare does not endorse, control, or assume responsibility for any third-party content or services. You acknowledge and agree that Clare is not responsible for the accuracy, legality, or availability of any third-party content or services, and any use of such third-party offerings is at your own risk.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">12.3 Exclusions</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            Certain jurisdictions may not allow the exclusion of specific warranties or limitations of liability. As a result, some of the exclusions or limitations outlined above may not be applicable to you. In such cases, Clare's liability will be limited to the maximum extent allowed by the relevant laws in your jurisdiction. This means that Clare's responsibilities will be subject to any statutory rights or consumer protection laws in your location, which may provide additional protections beyond the limitations set forth in these Terms.            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">12.4 Force Majeure</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            Clare will not be held responsible for any delays or failures in fulfilling its obligations under these Terms if such delays or failures arise from unforeseen circumstances or events beyond its reasonable control. These events include, but are not limited to, natural disasters (e.g., earthquakes, floods), cyberattacks, government actions, strikes, pandemics, or any other situation that may disrupt or prevent the timely delivery of the Platform or its Services. Clare will make reasonable efforts to mitigate the impact of such events, but is not liable for any disruption in service caused by these uncontrollable factors. This clause is intended to protect Clare from liability when external events significantly impact its ability to deliver the Platform’s services.            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">12.5 Severability</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            If any provision of these Terms is determined to be invalid, illegal, or unenforceable by a court or competent authority, that provision will be severed from the rest of the Terms. The removal of such a provision will not affect the validity and enforceability of the remaining provisions, which will continue to be in full force and effect as if the invalid provision had never been included. This ensures that even if one part of the agreement is invalidated, the rest of the agreement remains operational and enforceable, providing clarity and continuity for both parties.            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">12.6 Entire Agreement</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
            These Terms constitute the entire and exclusive agreement between you and Clare regarding your use of the Platform and Services. They supersede all prior agreements, representations, or understandings, whether written or oral, that may have been made in relation to the Platform or Services. Any updates or modifications to these Terms will replace and void any previous versions, making them the sole applicable terms governing your use of the services moving forward. By continuing to use the Platform, you agree to be bound by the most current version of the Terms, which may be updated periodically.
            </p>
          </div>
        </section>

      </div>

      <button
        onClick={() => navigate("/camera")}
        className="font-lato text-sm sm:text-lg font-light bg-[#14213D] text-white py-3 px-12 rounded-full transition-colors duration-300 hover:opacity-80 mt-16 mx-auto block"
      >
        Back to Upload Your Photo
      </button>
    </div>
  );
}
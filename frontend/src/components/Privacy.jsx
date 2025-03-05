import React from "react";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-[150px]">
      <h1 className="text-4xl font-fanwood text-center text-darkblue mb-6">
        Privacy Policy
      </h1>
      <p className="text-center font-lato font-light text-gray-600 mb-8">
        Effective Date: 5 May 2025
      </p>

      <div className="space-y-12">
        {/* Title Section */}
        <section className="space-y-4">
          <h1 className="font-lato text-xl md:text-xl text-left text-darkblue mb-4 font-normal mt-20">Privacy Policy</h1>
          <p className="font-lato font-light text-gray-600 leading-relaxed">
          At Clare, we prioritize the privacy of our users and are deeply committed to maintaining the safety and security of the personal information you share with us. This Privacy Policy explains the various types of personal data we collect, how we use it, and the measures we take to protect your privacy when you interact with our platform. By using Clare’s services, you are consenting to the collection, use, and disclosure of your information as described in this policy.
          </p>
          <p className="font-lato font-light text-gray-600 leading-relaxed">
          This policy applies to all users who access or use Clare’s services, whether through our website, mobile application, or other digital interfaces. We encourage you to thoroughly read and understand this policy so you can be fully informed about how we handle your data and your rights related to your personal information.
          </p>
        </section>

        {/* 1. Information We Collect */}
        <section>
          <h2 className="font-lato text-xl mb-5 text-darkblue  font-normal">1. Information We Collect</h2>
          <p className="font-lato font-light text-gray-600 leading-relaxed mb-6">
          To provide and enhance our services, Clare collects a variety of personal data from our users. The information we gather helps us to deliver personalized experiences, improve our offerings, and ensure your safety when interacting with our platform. Below are the main categories of data we collect:
          </p>

          {/* 1.1 Personal Information */}
          <div className="mb-8">
            <h3 className="font-lato text-xl text-darkblue  font-medium mb-3">1.1 Personal Information</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              When you create an account, sign up for our newsletter, or engage with our platform in any way, we collect basic personal information. This may include:
            </p>
            <div className="font-lato font-light text-gray-600 space-y-2 pl-4">
              <p>• <strong>Name:</strong> Used to personalize your account and for communication purposes.</p>
              <p>• <strong>Email address:</strong> Needed to communicate important updates, newsletters, and transactional information.</p>
              <p>• <strong>Phone number:</strong> May be used for customer support, security verification, or personalized communication.</p>
              <p>• <strong>Mailing address:</strong> Used for any physical correspondence or, if applicable, product delivery services.</p>
              <p>• <strong>Demographic information:</strong> This could include age, gender, and other traits that help us provide more personalized services or promotional offers.</p>
            </div>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-4">
              This data is essential for creating your account, providing services, and delivering relevant content. You are not required to provide all information immediately, but doing so enables us to tailor the platform to suit your needs better. By registering and using our services, you agree to the collection and use of this personal data.
            </p>
          </div>

          {/* 1.2 Biometric Data */}
          <div className="mb-8">
            <h3 className="font-lato text-xl text-darkblue  font-medium mb-3">1.2 Biometric Data</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              In the course of offering our skin analysis and other health-related services, we may collect biometric data. This data is crucial for providing more precise, customized insights into your skin's health. Biometric data may include:
            </p>
            <div className="font-lato font-light text-gray-600 space-y-2 pl-4">
              <p>• <strong>Facial recognition data:</strong> Captured via photos or video feeds, this is used to analyze your skin condition and provide recommendations.</p>
              <p>• <strong>Body measurements:</strong> These could include weight, body fat percentage, and other relevant health indicators, helping to personalize wellness and skincare solutions.</p>
              <p>• <strong>Other relevant body metrics:</strong> Any other physiological data that helps us to offer an enhanced user experience in terms of wellness and skincare.</p>
            </div>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-4">
              We understand the sensitive nature of biometric data, so we take extra precautions in ensuring its protection. This data is used solely to enhance the accuracy of our services, including skincare product recommendations and personalized health routines. We adhere strictly to privacy standards to anonymize this data whenever possible and ensure that it is stored securely.
            </p>
          </div>

          {/* 1.3 Usage Data */}
          <div className="mb-8">
            <h3 className="font-lato text-darkblue  text-xl font-medium mb-3">1.3 Usage Data</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              To improve the functionality and performance of our platform, Clare collects information regarding how users interact with our services. This includes:
            </p>
            <div className="font-lato font-light text-gray-600 space-y-2 pl-4">
              <p>• <strong>Browsing behavior:</strong> Information on pages you visit, time spent on the platform, and how you interact with the site's features.</p>
              <p>• <strong>Device information:</strong> Details such as your browser type, operating system, and device model are collected to optimize your experience across different devices.</p>
              <p>• <strong>IP addresses:</strong> We collect your IP address to identify the location of your device, protect against unauthorized access, and enhance security.</p>
              <p>• <strong>User activity logs:</strong> This includes information like clicks, navigation, search terms, and pages visited during your use of our platform.</p>
            </div>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-4">
              This data helps us understand usage patterns, monitor site performance, and optimize content delivery. By tracking these behaviors, we can refine our offerings and improve the overall user experience, making the platform more intuitive and user-friendly.
            </p>
          </div>

          {/* 1.4 Transactional Data */}
          <div className="mb-8">
            <h3 className="font-lato text-darkblue  text-xl font-medium mb-3">1.4 Transactional Data</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              Whenever you make a purchase or transaction via Clare's platform, we collect details related to the transaction, which may include:
            </p>
            <div className="font-lato font-light text-gray-600 space-y-2 pl-4">
              <p>• <strong>Payment method:</strong> Information about how you made the payment, whether by credit card, debit card, or other forms of payment.</p>
              <p>• <strong>Transaction history:</strong> A record of your past purchases, including items bought, dates of purchase, and amounts spent.</p>
              <p>• <strong>Items purchased:</strong> Specific details about the products or services you buy on our platform.</p>
              <p>• <strong>Billing details:</strong> This includes your billing address, shipping address (if different), and any other information required to process the transaction and deliver products or services.</p>
            </div>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-4">
              We collect this data primarily to process payments, track your transaction history, and provide support in case of any issues with your purchases. All payment details are processed through secure channels, and we implement measures to protect your financial information. We may also use this data to tailor offers and promotions based on your purchasing history.
            </p>
          </div>
        </section>

        {/* 2. Data Usage */}
        <section>
          <h2 className="font-lato text-darkblue  text-xl mb-5 font-normal">2. Data Usage</h2>
          <p className="font-lato font-light text-gray-600 leading-relaxed mb-6">
            The data we collect serves multiple important functions, which include enabling us to offer the services you expect and improve your experience on our platform. We take your privacy seriously, and every use of your data is aligned with the following purposes:
          </p>

          {/* 2.1 Providing Services */}
          <div className="mb-8">
            <h3 className="font-lato text-darkblue  text-xl font-medium mb-3">2.1 Providing Services</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              We use your personal and biometric data to deliver our core services effectively. This includes:
            </p>
            <div className="font-lato font-light text-gray-600 space-y-2 pl-4">
              <p>• Offering personalized skin analyses, wellness reports, and product recommendations.</p>
              <p>• Customizing your account experience based on your specific needs, preferences, and usage patterns.</p>
              <p>• Assisting you with customer service requests, resolving technical issues, or answering questions you may have about our platform.</p>
            </div>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-4">
              We use the information we collect to ensure that you receive the best possible service and make your interactions with our platform as smooth and efficient as possible.
            </p>
          </div>

          {/* 2.2 Improving Services */}
          <div className="mb-8">
            <h3 className="font-lato text-darkblue  text-xl font-medium mb-3">2.2 Improving Our Services</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              The data we gather is essential for improving the performance and functionality of our platform. This includes:
            </p>
            <div className="font-lato font-light text-gray-600 space-y-2 pl-4">
              <p>• Identifying areas of our service that need improvement based on how users interact with the platform.</p>
              <p>• Developing new features or services that address user demands or pain points.</p>
              <p>• Monitoring the performance of the website or app to ensure that users have a seamless experience across devices.</p>
            </div>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-4">
              The goal of collecting this data is to continuously improve Clare's offerings and enhance user satisfaction by ensuring our platform is responsive, user-friendly, and provides meaningful benefits.
            </p>
          </div>

          {/* 2.3 Marketing */}
          <div className="mb-8">
            <h3 className="font-lato text-darkblue  text-xl font-medium mb-3">2.3 Marketing and Communications</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              We may use your personal information to send you marketing communications, such as:
            </p>
            <div className="font-lato font-light text-gray-600 space-y-2 pl-4">
              <p>• <strong>Promotional offers:</strong> These may include discounts, special offers, or other incentives to encourage you to explore new services or products.</p>
              <p>• <strong>Product updates:</strong> Information about new features, tools, or services we've launched that may interest you.</p>
              <p>• <strong>Newsletters</strong> Periodic updates on trends, skin care, and other relevant topics that align with your interests.</p>
            </div>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-4">
              These communications help keep you informed about relevant offers and updates. If you no longer wish to receive marketing communications, you can easily unsubscribe by adjusting your preferences in your account settings or using the unsubscribe link in any email we send.
            </p>
          </div>

          {/* 2.4 Security */}
          <div className="mb-8">
            <h3 className="font-lato text-darkblue  text-xl font-medium mb-3">2.4 Security and Fraud Prevention</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              The safety of your personal and financial information is a top priority. We use the data collected to protect against unauthorized access, fraud, and other security risks. This may involve:
            </p>
            <div className="font-lato font-light text-gray-600 space-y-2 pl-4">
              <p>• Verifying your identity when logging into your account or making a purchase.</p>
              <p>• Monitoring account activity to detect any suspicious transactions or behavior.</p>
              <p>• Using security protocols such as encryption to safeguard data during transmission and storage.</p>
            </div>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-4">
              These measures help ensure that our platform is secure, protecting your personal and financial information from theft or misuse.
            </p>
          </div>

          {/* 2.5 Legal */}
          <div className="mb-8">
            <h3 className="font-lato text-darkblue  text-xl font-medium mb-3">2.5 Legal Obligations</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              We may be required to use your personal data to comply with various legal obligations, such as:
            </p>
            <div className="font-lato font-light text-gray-600 space-y-2 pl-4">
              <p>• Responding to government requests, subpoenas, or court orders.</p>
              <p>• Complying with tax regulations and fulfilling reporting requirements.</p>
              <p>• Defending against legal claims, lawsuits, or disputes.</p>
            </div>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-4">
              In these cases, your personal data may be disclosed in a manner that is consistent with applicable legal requirements. We will make every effort to ensure that any disclosure of your data is necessary and proportional to the situation.
            </p>
          </div>
        </section>

        {/* 3. Legal and Regulatory Compliance */}
        <section>
          <h2 className="font-lato text-darkblue  text-xl mb-5 font-normal">3. Legal and Regulatory Compliance</h2>
          <p className="font-lato font-light text-gray-600 leading-relaxed">
            At Clare, we are committed to ensuring that our data collection, processing, and storage practices comply with all applicable data protection laws. This includes adhering to:
          </p>
          <ul className="list-disc pl-5 font-lato font-light text-gray-600 leading-relaxed">
            <li>Data protection laws: We comply with relevant regulations, such as the General Data Protection Regulation (GDPR) for users in the EU and other privacy laws around the world.</li>
            <li>Data security standards: We adopt industry-leading practices to ensure that your data is protected against unauthorized access, loss, or theft.</li>
          </ul>

          {/* 3.1 Legal Requirements */}
          <div className="mt-6">
            <h3 className="font-lato text-darkblue  text-xl font-medium mb-3">3.1 Legal Requirements</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              There may be instances where we are legally required to disclose your personal data. For example:
            </p>
            <ul className="list-disc pl-5 font-lato font-light text-gray-600 leading-relaxed">
              <li>Responding to lawful government or regulatory requests for information.</li>
              <li>Cooperating with law enforcement authorities during criminal investigations or legal proceedings.</li>
              <li>Fulfilling our obligations under tax laws or other statutory requirements.</li>
            </ul>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-4">
              We will only disclose your personal data in compliance with the law and after assessing the necessity and proportionality of the disclosure. Any sharing of personal information in such situations will be carried out in a manner that respects your privacy rights.
            </p>
          </div>

          {/* 3.2 Governmental Investigations */}
          <div className="mt-6">
            <h3 className="font-lato text-darkblue  text-xl font-medium mb-3">3.2 Governmental Investigations and Law Enforcement</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              As part of our commitment to legal compliance, Clare may be required to cooperate with investigations conducted by government agencies or law enforcement authorities. This may involve:
            </p>
            <ul className="list-disc pl-5 font-lato font-light text-gray-600 leading-relaxed">
              <li>Disclosing personal data to assist in criminal investigations, fraud prevention, or national security inquiries.</li>
              <li>Complying with court orders or subpoenas that compel us to provide user information in legal cases.</li>
            </ul>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-4">
              While we will always aim to protect your privacy, we understand that, in certain cases, cooperation with legal or regulatory bodies is necessary to uphold public safety and the rule of law.
            </p>
          </div>
        </section>

        {/* 4. Business Transfers */}
        <section>
          <h2 className="font-lato text-darkblue  text-xl mb-5 font-normal">4. Business Transfers</h2>
          <p className="font-lato font-light text-gray-600 leading-relaxed">
            In the event of significant business transitions such as a merger, acquisition, sale of assets, or any similar corporate restructuring, your personal data may be transferred as part of the transaction. At Clare, we take privacy seriously, and we are committed to ensuring that your personal data remains protected even in these circumstances. We will take reasonable and appropriate steps to secure your information during such transfers and ensure that any successor entity complies with the same privacy practices outlined in this Privacy Policy.
          </p>

          {/* 4.1 Mergers and Acquisitions */}
          <div className="mt-6">
            <h3 className="font-lato text-darkblue  text-xl font-medium mb-3">4.1 Mergers and Acquisitions</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              If Clare is involved in a merger, acquisition, or sale of all or part of its assets, personal data, including your information, may be transferred to the new entity as part of the transaction. This could occur if we are acquired by, or merge with, another company, or if our business is sold or reorganized.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-4">
              In such cases, the acquiring company or entity will be obligated to protect your personal data in accordance with this Privacy Policy. We will work to ensure that the privacy standards and protections you rely on continue to be upheld after the transfer of your data. The new entity will be expected to follow the same data protection practices, and we will ensure that they are aware of and compliant with the terms of this Privacy Policy.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-4">
              In the event that your personal data is being transferred as part of a merger, acquisition, or sale, Clare will inform you about the change and how your data will be handled under the new ownership or control. This notification will be provided in a timely manner to ensure that you are well informed of any changes to your data processing or storage practices.
            </p>
          </div>

          {/* 4.2 Notification */}
          <div className="mt-6">
            <h3 className="font-lato text-darkblue  text-xl font-medium mb-3">4.2 Notification of Changes</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              As part of our commitment to transparency, Clare will notify you in advance about any significant changes to how your personal data will be managed in the event of a business transfer. We understand the importance of keeping our users informed, and we will make every effort to ensure that you are aware of how your data will be handled in the future.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-4">
              If the business transfer involves changes to the terms and conditions of this Privacy Policy, or if the new entity wishes to modify how your personal data is processed or shared, we will update this Privacy Policy to reflect these changes. You will be notified of any material revisions made to the document, which may include a summary of the updates along with a notification through our platform or other means of communication.
            </p>
          </div>
        </section>

        {/* 5. Cookies */}
        <section>
          <h2 className="font-lato text-darkblue  text-xl mb-5 font-normal">5. Cookies and Tracking Technologies</h2>
          <p className="font-lato font-light text-gray-600 leading-relaxed">
            Clare uses cookies and similar tracking technologies to improve the functionality of our platform, personalize your experience, and better understand how users engage with the site.
          </p>

          {/* 5.1 Types of Cookies */}
          <div className="mt-6">
            <h3 className="font-lato text-darkblue  text-xl font-medium mb-3">5.1 Types of Cookies Used</h3>
            <div className="font-lato font-light text-gray-600 space-y-2 pl-4">
              <p>• <strong>Essential Cookies:</strong> These cookies are necessary for the basic functioning of our platform, such as enabling secure logins and maintaining session information.</p>
              <p>• <strong>Performance and Analytics Cookies:</strong> These cookies gather data about how users interact with our platform, which allows us to improve its performance and usability.</p>
              <p>• <strong>Functional Cookies:</strong> These cookies remember your preferences and personalize your experience, such as your language selection.</p>
              <p>• <strong>Advertising and Marketing Cookies:</strong> These cookies track your browsing behavior to serve you targeted ads based on your interests.</p>
            </div>
          </div>

          {/* 5.2 Managing Cookies */}
          <div className="mt-6">
            <h3 className="font-lato text-darkblue  text-xl font-medium mb-3">5.2 Managing Cookie Preferences</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              You can manage your cookie preferences through your browser settings. Most browsers allow you to disable cookies or delete stored cookies. However, disabling certain cookies may impact the functionality of our platform and limit your experience. For more detailed information, please refer to our Cookie Policy.
            </p>
          </div>
        </section>

        {/* 6. Data Security */}
        <section>
          <h2 className="font-lato text-darkblue  text-xl mb-5 font-normal">6. Data Security</h2>
          <p className="font-lato font-light text-gray-600 leading-relaxed">
            At Clare, we take data security very seriously and are dedicated to implementing a comprehensive suite of measures to protect your personal data from unauthorized access, misuse, alteration, or destruction. We understand the importance of privacy and confidentiality in today’s digital landscape and remain committed to employing the latest and most effective security technologies and practices to ensure your data is secure at all times.
          </p>

          {/* 6.1 Encryption */}
          <div className="mt-6">
            <h3 className="font-lato text-darkblue  text-xl font-medium mb-3">6.1 Encryption</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              To ensure the highest level of protection for your personal and biometric data, Clare employs advanced encryption technologies during both data transmission and storage. Encryption is one of the most reliable ways to protect sensitive information, as it transforms your data into unreadable code, which can only be decrypted by authorized parties with the correct keys.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-4">
              During data transmission, we use secure protocols such as HTTPS and TLS (Transport Layer Security) to protect data as it moves between your device and our servers. This ensures that any personal information shared with Clare is securely encrypted while in transit, preventing unauthorized individuals from intercepting or accessing it.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-4">
              For data at rest (i.e., data stored in Clare’s databases), we employ encryption algorithms that keep your information safe even if unauthorized access to our storage systems were ever to occur. These encryption practices are continuously updated and reviewed to ensure they meet industry standards and regulatory requirements.
            </p>
          </div>

          {/* 6.2 Access Controls */}
          <div className="mt-6">
            <h3 className="font-lato text-darkblue  text-xl font-medium mb-3">6.2 Access Controls</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              Access to personal and biometric data within Clare is tightly controlled to ensure that only authorized personnel have access. We employ role-based access control (RBAC) policies, meaning that employees or contractors are granted access to sensitive information based on their role and the level of responsibility required for their duties.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-4">
              Additionally, we enforce strong authentication protocols, including multi-factor authentication (MFA), for employees and partners accessing critical data systems. This ensures that access is granted only after verifying the identity of the user through multiple security layers, reducing the risk of unauthorized access.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-4">
              To further bolster the integrity of our security practices, Clare regularly trains staff on security protocols, data protection regulations, and emerging cyber threats. This training ensures that all employees understand the importance of safeguarding user data and follow best practices in data security.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-4">
              We also conduct regular audits and assessments of access logs to monitor who is accessing sensitive data and ensure compliance with our internal policies. Any suspicious activity is flagged and investigated promptly, minimizing the risk of internal or external breaches.
            </p>
          </div>

          {/* 6.3 Audits */}
          <div className="mt-6">
            <h3 className="font-lato text-darkblue  text-xl font-medium mb-3">6.3 Regular Audits and Assessments</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              At Clare, we are committed to the ongoing evaluation of our security infrastructure. To this end, we conduct regular internal and external audits of our systems, networks, and security protocols. These audits are performed by both in-house security experts and third-party professionals who are independent of our organization. This dual approach ensures that we receive a comprehensive and unbiased evaluation of our security posture.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-4">
              We also conduct vulnerability assessments and penetration testing on a periodic basis. These tests simulate potential cyberattacks on our systems to identify weaknesses before malicious actors can exploit them. Based on the findings from these assessments, we take immediate corrective actions to patch vulnerabilities, enhance security measures, and update systems to address new threats.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-4">
              In addition to technical audits, we also review and update our security policies to ensure they remain aligned with the latest industry standards, legal requirements, and technological advancements. This proactive approach helps us maintain a secure environment and keeps us ahead of evolving security challenges.
            </p>
          </div>

          {/* 6.4 Breach Response */}
          <div className="mt-6">
            <h3 className="font-lato text-darkblue  text-xl font-medium mb-3">6.4 Data Breach Response</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              While we make every effort to prevent data breaches, we understand that no system is entirely immune to risk. In the unlikely event of a data breach, Clare has developed a comprehensive incident response plan to contain, assess, and mitigate any damage quickly. This plan is regularly reviewed and tested to ensure it is effective and up-to-date.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-4">
              Our response protocol includes immediate containment measures, such as isolating affected systems and stopping any further unauthorized access. We prioritize investigating the breach to understand its scope, determine the cause, and assess the impact on affected users.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-4">
              If your data is compromised in a breach, Clare will notify you promptly, in accordance with applicable data protection regulations. This notification will include a description of the breach, the type of data that was affected, the steps Clare has taken to resolve the issue, and recommendations for actions you can take to protect yourself (e.g., resetting your password, monitoring accounts for suspicious activity, or other precautionary measures).
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-4">
              In addition to notifying affected users, Clare works with relevant authorities and regulatory bodies to ensure compliance with legal requirements. We also review and strengthen our security measures to prevent similar incidents from occurring in the future.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-4">
              Our commitment to data security and transparency ensures that we take all possible steps to safeguard your data, minimize the impact of any security incidents, and maintain your trust in our services.
            </p>
          </div>
        </section>

                {/* 7. Access & Correction */}
                <section>
          <h2 className="font-lato text-xl text-darkblue  mb-5 font-normal">7. Access and Correction of Your Information</h2>
          <p className="font-lato font-light text-gray-600 leading-relaxed">
            At Clare, we believe in empowering our users with control over their personal data. You have the right to access the personal data we store about you, and to request corrections or deletions of inaccurate, outdated, or unnecessary information. We value transparency and strive to make the process of accessing, correcting, or deleting your data as straightforward and user-friendly as possible.
          </p>

          {/* 7.1 Access */}
          <div className="mt-6">
            <h3 className="font-lato text-darkblue  text-xl font-medium mb-3">7.1 Access to Your Data</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              You have the right to request a copy of the personal data we have collected and stored about you. If you wish to access your data, you can contact our support team directly. Once we receive your request, we will process it promptly, ensuring that we respond within the timeframes established by applicable privacy laws, including the General Data Protection Regulation (GDPR) where applicable.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-3">
              To request access, you may be asked to verify your identity to ensure that we are providing your data to the correct person. This helps us protect your privacy and avoid unauthorized disclosure. Upon successful verification, you will receive a copy of your personal data in a structured, commonly used, and machine-readable format.
            </p>
          </div>

          {/* 7.2 Updating */}
          <div className="mt-6">
            <h3 className="font-lato text-darkblue  text-xl font-medium mb-3">7.2 Updating Your Information</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              If you find that your personal information is incorrect or has changed, you have the ability to update or correct it. You can update your data by logging into your account directly, where you will find options to manage and edit your personal details. Alternatively, you can reach out to our customer support team, who will assist you with making any necessary corrections.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-3">
              We encourage you to keep your personal information up to date to ensure that we can continue offering personalized and accurate services. Timely updates of information, such as changes to your email, shipping address, or preferences, help us enhance your user experience and improve our communication with you.
            </p>
          </div>

          {/* 7.3 Deletion */}
          <div className="mt-6">
            <h3 className="font-lato text-darkblue  text-xl font-medium mb-3">7.3 Deleting Your Information</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              If you no longer wish to use Clare's services, or if you prefer that we no longer retain your personal data, you have the option to request the deletion of your information. In such cases, please contact our support team to initiate the deletion process. We will assess the request and delete your data, subject to the requirements of applicable law.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-3">
              However, please note that certain types of personal data may need to be retained for legal, contractual, or operational purposes. For example, transaction records or tax-related data may need to be stored for a specified period to comply with financial regulations or resolve potential disputes. When data is no longer needed for such purposes, we will take appropriate measures to delete it securely.
            </p>
          </div>
        </section>

        {/* 8. Biometric Protections */}
        <section>
          <h2 className="font-lato text-xl text-darkblue  mb-5 font-normal">8. Biometric Data Protections</h2>
          <p className="font-lato font-light text-gray-600 leading-relaxed">
            Biometric data is highly sensitive and must be treated with the utmost care and security. Clare is fully committed to ensuring that any biometric data collected from our users is processed, stored, and protected in accordance with the highest standards in data protection and privacy.
          </p>

          {/* 8.1 Purpose */}
          <div className="mt-6">
            <h3 className="font-lato text-darkblue  text-xl font-medium mb-3">8.1 Purpose of Biometric Data Use</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              Clare collects biometric data primarily for the purpose of providing personalized skin analysis and optimizing the services we offer. This data allows us to deliver more accurate recommendations for skin care products, treatments, and routines tailored to your individual needs. Biometric data may include facial recognition, skin health analysis, or body measurements.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-3">
              We do not share biometric data with third parties except when explicitly required by law or when you have provided your consent. This may include scenarios where we need to cooperate with legal authorities or respond to judicial requests. Outside of these situations, we are committed to safeguarding the privacy and confidentiality of your biometric data.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-3">
              Biometric data may also be used to improve our platform and services over time. This includes utilizing the data to refine our algorithms, enhance skin analysis accuracy, and develop new features that benefit our users. We ensure that the data collected is used exclusively for these specific, well-defined purposes and that any processing is done transparently.
            </p>
          </div>

          {/* 8.2 Minimization */}
          <div className="mt-6">
            <h3 className="font-lato text-darkblue  text-xl font-medium mb-3">8.2 Data Minimization</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              In line with data protection best practices, we adhere to the principle of data minimization. This means that we collect only the minimum amount of biometric data necessary to fulfill the purposes of our services. By limiting the data collected to what is essential, we reduce the risk of exposure and ensure that we do not store or use unnecessary information.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-3">
              For example, when collecting facial data for skin analysis, we capture only the images needed to assess your skin health and improve our recommendations. We do not store unnecessary details that might compromise your privacy. This practice of data minimization ensures that your biometric data is handled with care and that we are not keeping information for longer than necessary.
            </p>
          </div>
        </section>

        {/* 9. International Transfers */}
        <section>
          <h2 className="font-lato text-darkblue  text-xl mb-5 font-normal">9. International Data Transfers</h2>
          <p className="font-lato font-light text-gray-600 leading-relaxed">
            As a global company, Clare operates across different jurisdictions, and may transfer personal data to countries outside your home country or the European Economic Area (EEA). We understand that international data transfers can raise concerns about data security and privacy. We are committed to ensuring that your personal data remains protected, regardless of where it is processed or stored.
          </p>

          {/* 9.1 Safeguards */}
          <div className="mt-6">
            <h3 className="font-lato text-darkblue  text-xl font-medium mb-3">9.1 Safeguards for International Transfers</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              To safeguard your data during international transfers, Clare implements a variety of security measures, including the use of standard contractual clauses and data protection agreements. These legal mechanisms ensure that personal data transferred outside the EEA is subject to the same level of protection as required by European data protection laws, such as the GDPR.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-3">
              In addition to legal safeguards, we use encryption, secure communication protocols, and other technical measures to ensure that your data remains safe while in transit. These measures are designed to prevent unauthorized access, disclosure, or tampering with your personal data during international transfers.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-3">
              If you are located in a country with specific data protection laws, we will ensure that any transfer of your data complies with those regulations and that your privacy rights are respected.
            </p>
          </div>

          {/* 9.2 Jurisdiction */}
          <div className="mt-6">
            <h3 className="font-lato text-darkblue  text-xl font-medium mb-3">9.2 Jurisdiction-Specific Regulations</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              Clare operates in multiple countries, each with its own laws and regulations regarding data privacy. We make every effort to comply with local privacy laws and adapt our data practices to meet or exceed international standards for data protection.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-3">
              Where applicable, Clare ensures that your data is treated in accordance with the relevant privacy regulations in your jurisdiction. For example, in jurisdictions governed by the GDPR, we apply the principles and requirements of the GDPR to all personal data, including data that is transferred across borders.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-3">
              We also provide information about your privacy rights under specific regional laws, and how you can exercise those rights to manage your personal data in accordance with local data protection standards.
            </p>
          </div>
        </section>

        {/* 10. Data Retention */}
        <section>
          <h2 className="font-lato text-darkblue  text-xl mb-5 font-normal">10. Data Retention</h2>
          <p className="font-lato font-light text-gray-600 leading-relaxed">
            Clare retains personal data only for as long as is necessary to fulfill the purposes outlined in this Privacy Policy, and in accordance with applicable legal, regulatory, or operational requirements. Our data retention practices are designed to ensure that we do not keep your personal information for longer than is needed for legitimate business purposes.
          </p>

          {/* 10.1 Periods */}
          <div className="mt-6">
            <h3 className="font-lato text-darkblue  text-xl font-medium mb-3">10.1 Retention Period</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              The length of time we retain your personal data depends on the type of data and its intended use. The following outlines the retention periods for key types of data:
            </p>
            <ul className="font-lato font-light text-gray-600 leading-relaxed list-disc pl-6 mt-3">
              <li><strong>Biometric Data:</strong> For purposes such as skin analysis, progress tracking, and service improvement, biometric data (e.g., facial recognition data) is retained for a period of 12 months. After this period, the data will be securely deleted or anonymized unless you request continued storage or if it is required for legal or operational purposes.</li>
              <li><strong>Transactional Data:</strong> Data related to transactions, such as payment information and order details, will typically be retained for 7 years to comply with financial reporting, tax regulations, and other legal requirements. Once these obligations have been fulfilled, the data will be securely deleted.</li>
            </ul>
          </div>

          {/* 10.2 Deletion */}
          <div className="mt-6">
            <h3 className="font-lato text-darkblue  text-xl font-medium mb-3">10.2 Data Deletion Requests</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              Under privacy laws such as the GDPR, you have the right to request the deletion of your personal data. If you would like us to delete your data, please contact our support team with your request. We will process your deletion request in accordance with applicable laws, ensuring that we handle your data deletion request efficiently and securely.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-3">
              However, please be aware that certain types of data may need to be retained for legal or compliance purposes, such as resolving disputes, complying with financial regulations, or fulfilling tax obligations. In such cases, we will retain your data only for as long as necessary to meet these obligations. Once these legal requirements have been satisfied, we will delete or anonymize your data in a secure manner.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-3">
              We are committed to ensuring that your personal information is handled responsibly and in accordance with your rights under relevant privacy laws.
            </p>
          </div>
        </section>

        {/* 11. Policy Updates */}
        <section>
          <h2 className="font-lato text-darkblue  text-xl mb-5 font-normal">11. Policy Updates</h2>
          <p className="font-lato font-light text-gray-600 leading-relaxed">
            Clare may update this Privacy Policy periodically to reflect changes in our practices, new services, or legal requirements. Any significant updates will be communicated to you through our website or other communication channels.
          </p>

          {/* 11.1 Review */}
          <div className="mt-6">
            <h3 className="font-lato text-darkblue  text-xl font-medium mb-3">11.1 Review of Policy</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              You retain the right to access and review the most current version of our Privacy Policy at any time. The latest version will be readily available on our platform, ensuring that you can stay informed about any updates. We recommend that you periodically review this policy, as it may be updated to reflect changes in legal, regulatory, or operational requirements, including those arising from corporate transactions such as mergers, acquisitions, or restructurings.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-3">
              Furthermore, in the event of a business transition, Clare will provide direct notification if there are any significant changes to how your personal data is managed. This ensures that you are fully informed and can make well-informed decisions regarding your personal data.
            </p>
          </div>
        </section>

        {/* 12. Dispute Resolution */}
        <section>
          <h2 className="font-lato text-darkblue  text-xl mb-5 font-normal">12. Dispute Resolution</h2>
          <p className="font-lato font-light text-gray-600 leading-relaxed">
            At Clare, we are committed to addressing any concerns or complaints regarding the handling of your personal data. We aim to resolve privacy-related issues in a transparent, timely, and fair manner. If you feel that your privacy rights have been violated or if you have any questions about how your personal data is managed, we encourage you to reach out to us directly. We take all concerns seriously and will work diligently to ensure that your issue is resolved to your satisfaction.
          </p>

          {/* 12.1 Contact */}
          <div className="mt-6">
            <h3 className="font-lato text-darkblue text-xl font-medium mb-3">12.1 Contact Us</h3>
            <p className="font-lato font-light text-gray-600 leading-relaxed">
              If you have any questions, concerns, or complaints regarding this Privacy Policy or how your personal data is processed, please contact us at <a href="mailto:contact@clare.ai" className="text-blue-600 hover:underline">contact@clare.ai</a>. Our team is available to assist you with any inquiries and will respond promptly to ensure your concerns are addressed in a comprehensive and respectful manner.
            </p>
            <p className="font-lato font-light text-gray-600 leading-relaxed mt-3">
              To facilitate a thorough investigation and resolution, please include as much detail as possible when contacting us, such as the nature of your concern, relevant dates, and any supporting information that can assist in resolving the matter effectively. We will acknowledge your inquiry and provide you with a detailed response within a reasonable timeframe.
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

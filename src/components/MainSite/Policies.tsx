import React from 'react'
// import { PrivacyPolicies } from '../constants/PrivacyPolicies'
import { Link } from 'react-router-dom'

const PrivacyPolicies = [
  {
      title1: "Trivecta Digital Solutions Pvt Ltd (Trivecta)",
      title2: "Privacy Policy",
      title3: "Understanding Your Costs",
      status: "Updated : Jan 30 2024",
      intro: "Trivecta is committed to protecting the privacy of our clients and their uses when utilizing our Whatsapp integration service.This privacy policy outlines the types of information we collect, how we use it, and the measures we take to safeguard it.",
      content: "In the context of WhatsApp Tech Provider Services, Trivecta may collect the following information:",
      section: {
          1: [
              {title: "Client Information", content: "Contact details such as names, email addresses, and phone numbers of your authorized technical personnel involved in the project."},
              {title: "Technical Data", content: "Technical information related to the integration process, such as API keys, connection logs, and diagnostic data."},
              {title: "WhatsApp User Data", content: "When using specific features, we may access limited user data like phone numbers and message timestamps on your behalf, but we do not access the content of messages themselves."},
          ],
          2: [
              {title: "Providing and maintaining WhatsApp Tech provider services", content: "To set up, manage, and troubleshoot your WhatsApp services."},
              {title: "Technical support", content: "To assist you with any technical issues related to your Whatsapp service."},
          ],
          3: [
              {title: "With your consent", content: "We will only share your information with third-parties after obtaining your explicit consent."},
              {title: "Service providers", content: "We may share your information with trusted service providers who assist us in operating our platform, such as cloud hosting providers. These providers are contractually obligated to protect your information."},
          ],
          4: [
              {title: "Data encryption", content: "We use industry-standard encryption practices to protect your information while in transit and at rest."},
              {title: "Access Controls", content: "We restrict access to your information to authorized personnel only."},
              {title: "Security Reviews", content: "We regularly review our security practices to ensure they are effective."},
              {title: "Your Rights", content: "You have the right to access, update, delete, or restrict the processing of your personal information. You can also withdraw your consent for the use of your information at any time."},
              {title: "Changes to this Policy", content: "We may update this privacy policy from time to time. We will notify you of any changes by posting the updated policy on our website. Please review the policy periodically for any updates."},
          ],
          5: [
              {title: "Our Development Services", content: "At Trivecta, we're dedicated to providing seamless and efficient WhatsApp messaging for your business. Our expert team will handle the entire process, from customizing messages and managing ongoing maintenance."},
              {title: "WhatsApp Usage Fees", content: "Meta charges separate fees for using their WhatsApp Business API platform. These fees are based on a conversation-based model and vary depending on the type of conversation and user's location. For example, sending promotional messages carries a different cost than handling customer service inquiries."}
          ]
      },
      subtitle: {
          1: {title: "Use of Information", content: "The information we collect is used for various purposes, including:"},
          2: {title: "Sharing of Information", content: ""},
          3: {title: "We will not share your information with any third-party except", content: ""},
          4: {title: "Data Security", content: "We implement and maintain reasonable security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. These measures include:"}
      },
  }
]

const Section = ({datas}) => {
  return (
    <div className='mt-4 space-y-2'>
      {
        datas.map((data, index) => (
          <div key={index}>
            <span className='font-semibold text-lg'>{data.title}</span>: <span>{data.content}</span>
          </div>
        ))
      }
    </div>
  )
}

const Subtitle = ({datas}) => {
  return (
    <div className='mt-2'>
      <p className='font-semibold text-xl underline'>{datas.title}:</p>
      <p>{datas.content}</p>
    </div>
  )
}

const Policies = () => {
  return (
    <>
        {
          PrivacyPolicies.map((policy, index) => (
            <div key={index} className=''>
              <div className='mb-4'>
                <p className='font-bold text-3xl'>{policy.title1}</p>
                <p className='font-bold text-3xl'>{policy.title2}</p>
              </div>
              <p className='font-semibold text-base mb-2'>{policy.status}</p>
              <p className='mb-2'>{policy.intro}</p>
              <p className=''>{policy.content}</p>
              <Section datas={PrivacyPolicies[0].section[1]} />
              <Subtitle datas={PrivacyPolicies[0].subtitle[1]} />
              <Section datas={PrivacyPolicies[0].section[2]} />
              <Subtitle datas={PrivacyPolicies[0].subtitle[2]} />
              <Subtitle datas={PrivacyPolicies[0].subtitle[3]} />
              <Section datas={PrivacyPolicies[0].section[3]} />
              <Subtitle datas={PrivacyPolicies[0].subtitle[4]} />
              <Section datas={PrivacyPolicies[0].section[4]} />
              <p className='font-semibold text-xl underline mt-4'>{policy.title3}:</p>
              <Section datas={PrivacyPolicies[0].section[5]} />
              <div>
                <p className='font-semibold text-lg mt-4'>Complete Price Picture:</p>
                <p>
                  {"To ensure full transparency, we encourage you to familiarize yourself with Meta's pricing structure before finalizing your project. You can find detailed information on their website here: "} 
                  <Link to={"https://developers.facebook.com/docs/whatsapp/pricing"} target='_blank' className='underline text-blue-500'>https://developers.facebook.com/docs/whatsapp/pricing</Link>
                </p>
                <p className='font-semibold text-lg mt-4'>Contact Us: <Link to={"https://www.trivectadigital.com/contact"} target='_blank' className='underline font-normal text-base text-blue-500'>Click Here</Link></p>
              </div>
            </div>
          ))
        }
    </>
  )
}

export default Policies
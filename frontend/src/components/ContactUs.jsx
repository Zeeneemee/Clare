import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10 pt-40 px-4 mx-8 md:mx-0 md:px-0">
      {/* Content Container */}
      <div className="w-full max-w-2xl lg:max-w-4xl">
        {/* Title Section */}
        <h1 className="font-fanwood text-3xl md:text-4xl text-darkblue mb-6 text-center">
          Get in Touch
        </h1>
        <p className="font-lato font-light text-sm md:text-base text-gray-500 mt-[-10px] mb-12 md:mb-14 text-center">
          Feel free to connect with us anytime. We will get back to you as soon as we can!
        </p>

        {/* Mobile/Tablet Layout */}
        <div className="md:hidden">
          <div className="grid md:grid-cols-2 gap-8 w-full">
            {/* Contact Info Card */}
            <div className="bg-[#14213D] text-white p-6 rounded-lg shadow-lg h-fit">
              <h2 className="font-lato text-sm mb-4 text-left">Contact Information</h2>
              <div className="space-y-4">
                {contactItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <img src={item.icon} alt={item.alt} className="w-5 h-5" />
                    <p className="font-lato font-light text-xs">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <FormSection formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} isMobile={true} />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex gap-10 w-full">
          {/* Contact Info Card */}
          <div className="flex-1 bg-[#14213D] text-white p-8 rounded-lg shadow-lg flex flex-col">
            <h2 className="font-lato text-lg ml-3 mt-4 mb-12">Contact Information</h2>
            <div className="space-y-12 ml-3 flex-1">
              {contactItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <img src={item.icon} alt={item.alt} className="w-6 h-6" />
                  <p className="font-lato font-light text-sm">{item.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <FormSection formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} isMobile={false} />
        </div>
      </div>
    </div>
  );
}

const contactItems = [
  { icon: "/assets/mail.png", alt: "Email", content: "claire.bkk@gmail.com" },
  { icon: "/assets/phone.png", alt: "Phone", content: "091-009-0123" },
  { icon: "/assets/ig.png", alt: "Instagram", content: "claire.bkk" },
  { 
    icon: "/assets/location.png", 
    alt: "Location", 
    content: (
      <>
        616/28 Techa-wanit Road, Bang Sue,
        <br />
        Bangkok 10800, Thailand
      </>
    )
  },
];

function FormSection({ formData, handleChange, handleSubmit, isMobile }) {
  return (
    <form onSubmit={handleSubmit} className={`${isMobile ? 'space-y-6' : 'space-y-8 flex flex-col h-full'} flex-1`}>
      <div className={`${isMobile ? 'grid gap-4' : 'flex gap-8'}`}>
        <InputField 
          label="Your Name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Your Name" 
          isMobile={isMobile} 
        />
        <InputField 
          label="Your Email" 
          name="email" 
          value={formData.email} 
          type="email"
          onChange={handleChange} 
          placeholder="Your Email" 
          isMobile={isMobile} 
        />
      </div>

      <InputField 
        label="Subject" 
        name="subject" 
        value={formData.subject}
        onChange={handleChange} 
        placeholder="Enter the subject" 
        isMobile={isMobile} 
      />

      <div>
        <label className={`font-lato font-light block text-gray-500 ${isMobile ? 'text-xs' : 'text-sm'} mb-2`}>
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`font-lato font-light w-full border-b border-gray-400 focus:outline-none py-2 ${
            isMobile ? 'text-xs' : 'text-sm'
          }`}
          placeholder="Write your message here..."
          rows={isMobile ? "4" : "6"}
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className={`w-full ${
          isMobile ? 'py-3 text-xs' : 'px-12 py-4 text-sm'
        } rounded-full bg-[#14213D] font-lato font-light text-white hover:opacity-80 transition-opacity`}
      >
        Send Message
      </button>
    </form>
  );
}

function InputField({ label, name, value, onChange, placeholder, type = "text", isMobile }) {
  return (
    <div className={isMobile ? '' : 'flex-1'}>
      <label className={`font-lato font-light block text-gray-500 ${isMobile ? 'text-xs' : 'text-sm'} mb-2`}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`font-lato font-light w-full border-b border-gray-400 focus:outline-none ${
          isMobile ? 'py-2 text-xs' : 'py-2 text-sm'
        }`}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
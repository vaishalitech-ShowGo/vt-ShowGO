import { FiSend, FiMail, FiPhone, FiMessageCircle } from "react-icons/fi";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center md:px-16 gap-8"
      style={{ paddingTop: "60px" }}
    >
      {/* Title */}
      <h1 className="text-4xl font-bold text-center">Quick Support</h1>
      <p
        className="text-gray-400 text-3xl text-center"
        style={{ paddingBottom: "45px" }}
      >
        Need help? We're here for you 24/7
      </p>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-3 w-full">
        {/* Left - Contact Form */}
        <div
          className="bg-gray-900 p-6 rounded-lg md:w-1/2 h-[700px]"
          style={{
            paddingTop: "30px",
            paddingLeft: "30px",
            paddingRight: "30px",
            marginLeft: "50px",
          }}
        >
          <h2
            className="text-xl font-semibold mb-4"
            style={{ paddingBottom: "15px" }}
          >
            Send us a Message
          </h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-gray-400 text-sm">Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full p-3 mt-1 rounded bg-black text-white focus:outline-none"
                style={{
                  paddingBottom: "8px",
                  paddingLeft: "15px",
                  paddingTop: "8px",
                }}
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm">Message</label>
              <textarea
                rows="4"
                placeholder="How can we help you?"
                className="w-full p-3 mt-1 rounded bg-black text-white focus:outline-none"
                style={{ paddingTop: "4px", paddingLeft: "10px" }}
              />
            </div>
            <button
              className="w-full bg-white text-black py-2 rounded-full font-medium flex items-center justify-center gap-2 cursor-pointer"
              style={{ paddingBottom: "10px", paddingTop: "10px" }}
            >
              <FiSend size={20} /> Send Message
            </button>
          </div>
        </div>

        {/* Right - Support Options */}
        <div
          className="flex flex-col gap-4 w-full md:w-1/2"
          style={{ marginRight: "50px" }}
        >
          {/* Email Support */}
          <div className="bg-gray-900 rounded-lg flex flex-col items-center justify-center text-center h-[222px] gap-3">
            <FiMail size={40} />
            <h3 className="text-lg font-semibold mt-2">Email Support</h3>
            <p className="text-gray-400 text-sm mt-1">
              Get in touch with our support team
            </p>
            <a
              href="mailto:admin@showgo.in"
              className="mt-2 text-white underline"
            >
              admin@showgo.in
            </a>
          </div>

          {/* Phone Support */}
          <div className="bg-gray-900 p-6 rounded-lg flex flex-col items-center justify-center gap-3 h-[222px]">
            <FiPhone size={40} />
            <h3 className="text-lg font-semibold mt-2">Phone Support</h3>
            <p className="text-gray-400 text-sm mt-1">
              Call us for immediate assistance
            </p>
            <a href="tel:+918146331455" className="mt-2 text-white underline">
              +91 81463 31455
            </a>
          </div>

          {/* WhatsApp Support */}
          <div className="bg-gray-900 p-6 rounded-lg flex flex-col items-center justify-center gap-3 h-[222px]">
            <FiMessageCircle size={40} />
            <h3 className="text-lg font-semibold mt-2">WhatsApp Support</h3>
            <p className="text-gray-400 text-sm mt-1">
              Chat with us on WhatsApp
            </p>
            <a
              href="https://wa.me/918146331455"
              className="mt-2 text-white underline"
            >
              Message us
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

import { FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";

export function GetInTouch() {
  return (
    <div className="w-full flex flex-col items-center bg-gray-300">
      {/* Section Title */}
      <div className="text-4xl font-bold text-center mt-60 text-gray-800 pb-4">
        Get In Touch
      </div>
      <div className="text-center text-xl mb-6">★★★★★</div>

      {/* Contact & Form Container */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left: Contact Details */}
        <div className="bg-black text-white p-8 flex flex-col gap-6 md:w-1/2">
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt size={24} />
            <p>
              Mini Bypass Rd, Opp: Sarovaram Bio Park, Kozhikode, Kerala 673006
            </p>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt size={24} />
            <p>+91 495 277 4747, +91 6235996607</p>
          </div>
          <div className="flex items-center gap-4">
            <FaPaperPlane size={24} />
            <p>salesclt@tripenta.com</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="p-8 md:w-1/2">
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Mobile"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-300"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-300 h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="w-full my-2">
        <iframe
          className="w-full h-96 md:h-[500px] lg:h-[600px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8655011804153!2d72.89023277497827!3d19.113555482098764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c92d5e58cdc9%3A0x94c2dec7f68a1d1b!2sBoomerang%20Building!5e0!3m2!1sen!2sin!4v1740981511034!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

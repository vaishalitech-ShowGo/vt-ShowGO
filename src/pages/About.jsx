import Footer from "../components/Footer";

const AboutShowGo = () => {
  return (
    <>
      <div className="bg-black text-white min-h-screen flex flex-col items-center px-4 md:px-8 lg:px-20 py-10">
        {/* About Section */}
        <div className="text-center max-w-[1040px] w-full">
          <h2 className="text-3xl font-bold mb-6">About ShowGo.</h2>
          <p className="text-gray-400 text-[16px] leading-relaxed mb-6">
            ShowGo is a comprehensive ticketing platform designed to streamline the way events are organized, attended, and managed. Whether you're an attendee searching for exciting events or an organizer looking to host your next big show, ShowGo makes the entire process simple, efficient, and enjoyable.
          </p>
        </div>

        {/* Main Description */}
        <div className="text-center max-w-[1040px] w-full mt-4">
          <p className="text-gray-400 text-[16px] leading-relaxed mb-6">
            Our platform is built with the goal of providing seamless and secure ticketing solutions for both attendees and event organizers. From easy event browsing to straightforward ticket booking, ShowGo aims to enhance the way people experience live events.
          </p>
        </div>

        {/* Attendees Section */}
        <div className="max-w-[1180px] w-full text-center mt-10">
          <h3 className="text-2xl font-semibold mb-4">For Attendees</h3>
          <p className="text-gray-400 text-[16px] leading-relaxed mb-4">
            ShowGo makes it easy for attendees to find and book tickets for events they love. Whether it’s a concert, a sports match, or a theatre performance, our platform offers a wide variety of events across different genres.
          </p>
          <p className="text-gray-400 text-[16px] leading-relaxed mb-4">
            We prioritize providing a seamless and user-friendly experience, allowing you to find the best events near you and make bookings effortlessly. Stay updated on new events and offers by subscribing to our newsletter.
          </p>
        </div>

        {/* Event Organizers Section */}
        <div className="max-w-[1190px] w-full text-center mt-10 mb-10">
          <h3 className="text-2xl font-semibold mb-4">For Event Organizers</h3>
          <p className="text-gray-400 text-[16px] leading-relaxed mb-4">
            Organizing an event with ShowGo is straightforward and stress-free. Our platform allows organizers to create, manage, and promote events with ease. You can set up event pages, manage ticket listings, and track sales in real-time.
          </p>
          <p className="text-gray-400 text-[16px] leading-relaxed mb-4">
            ShowGo also provides tools to help you reach a wider audience by offering features like event promotion and social media sharing. We aim to help you build a successful event with maximum attendance.
          </p>
          <p className="text-gray-400 text-[16px] leading-relaxed mb-4">
            With ShowGo, you can focus on the creative and logistical aspects of your event while we take care of the ticketing. Our platform ensures that ticket sales and attendee management are seamless, so you can provide a smooth experience for your audience.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutShowGo;

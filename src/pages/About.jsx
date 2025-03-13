import Footer from "../components/Footer";

const AboutShowGo = () => {
  return (
    <>
      <div
        className="bg-black text-white min-h-screen flex flex-col items-center"
        style={{ padding: "40px 20px" }}
      >
        {/* About Section */}
        <div className="text-center ">
          <h2 className="text-3xl font-bold mb-4">About ShowGo.</h2>
          <p
            className="text-gray-400 text-[17px]"
            style={{ marginTop: "24px" }}
          >
            ShowGo is a comprehensive ticketing platform designed to streamline
            the way events are organized, attended, and managed. Whether you're
            an <br /> attendee searching for exciting events or an organizer
            looking to host your next big show, ShowGo makes the entire process
            simple, efficient, and <br /> enjoyable.
          </p>
        </div>

        {/* Main Description */}
        <div className="text-center " style={{ marginTop: "15px" }}>
          <p className="text-gray-400 text-[17px]">
            Our platform is built with the goal of providing seamless and secure
            ticketing solutions for both attendees and event organizers. From
            easy event <br /> browsing to straightforward ticket booking, ShowGo
            aims to enhance the way people experience live events.
          </p>
        </div>

        <div className="text-center " style={{ marginTop: "15px" }}>
          <p className="text-gray-400 text-[17px]">
            At ShowGo, we believe that every event should be a memorable
            experience. Our team is dedicated to providing the best technology
            to ensure that both <br /> organizers and attendees get the most out
            of every interaction. We strive to create a platform that not only
            simplifies event management but also <br /> fosters a vibrant
            community of event-goers.
          </p>
        </div>

        {/* Attendees Section */}
        <div className=" " style={{ marginBottom: "15px", marginTop: "24px" }}>
          <h3 className="text-2xl font-semibold text-center">For Attendees</h3>
          <p
            className="text-gray-400 text-center text-[17px]"
            style={{ marginTop: "12px" }}
          >
            ShowGo makes it easy for attendees to find and book tickets for
            events they love. Whether it’s a concert, a sports match, or a
            theatre performance, our platform offers <br /> a wide variety of
            events across different genres. You can easily browse events, select
            tickets, and make secure payments all in one place.
          </p>
          <p
            className="text-gray-400 text-center text-[17px]"
            style={{ marginTop: "15px" }}
          >
            We prioritize providing a seamless and user-friendly experience,
            allowing you to find the best events near you and make bookings
            effortlessly. You can also stay <br /> updated on new events and
            offers by subscribing to our newsletter.
          </p>
          <p
            className="text-gray-400  text-center text-[17px]"
            style={{ marginTop: "15px" }}
          >
            ShowGo is more than just a ticketing platform — it’s your personal
            event guide. Enjoy your favorite experiences with peace of mind,
            knowing that your tickets are in safe <br /> hands.
          </p>
        </div>

        {/* Event Organizers Section */}
        <div className="" style={{ marginBottom: "40px" }}>
          <h3 className="text-2xl font-semibold text-center">
            For Event Organizers
          </h3>
          <p
            className="text-gray-400 text-[17px] text-center"
            style={{ marginTop: "15px" }}
          >
            Organizing an event with ShowGo is straightforward and stress-free.
            Our platform allows organizers to create, manage, and promote events
            with ease. You can set up <br /> event pages, manage ticket
            listings, and track sales in real-time.
          </p>
          <p
            className="text-gray-400 text-[17px] text-center"
            style={{ marginTop: "14px" }}
          >
            ShowGo also provides tools to help you reach a wider audience by
            offering features like event promotion and social media sharing. We
            aim to help you build a <br /> successful event with maximum
            attendance.
          </p>
          <p
            className="text-gray-400 text-[17px] text-center"
            style={{ marginTop: "14px" }}
          >
            With ShowGo, you can focus on the creative and logistical aspects of
            your event while we take care of the ticketing. Our platform ensures
            that ticket sales and attendee <br /> management are seamless, so
            you can provide a smooth experience for your audience.
          </p>
        </div>
        <p
          className="border-t border-gray-600 w-full h-[1px]"
          style={{ marginBottom: "-100px", marginTop: "30px" }}
        ></p>
      </div>
      <Footer />
    </>
  );
};

export default AboutShowGo;

import Footer from "../component/Footer";
import "../index.css";

function Contact() {
  function handleSubmit() {}
  return (
    <>
      <div className="text-left md:w-[60%] md:mx-auto m-10">
        <div className="mb-8">
          <h1 className="font-bold text-2xl">Contact Me</h1>
          <p>Hi there, contact me to ask about anything you have in mind.</p>
        </div>

        <form>
          <div className="-mx-2 md:flex">
            <div className="w-full px-2 md:w-1/2">
              <label
                htmlfor="firstname"
                className="block text-gray-700 text-sm mb-2"
              >
                First-Name
              </label>
              <input
                type="text"
                id="firstname"
                placeholder="Enter your first name"
                className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="w-full px-2 md:w-1/2">
              <label
                htmlfor="lastname"
                className="block text-gray-700 text-sm  mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                placeholder="Enter your last name"
                className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <label htmlFor="email" className="block text-gray-700 text-sm  mb-2">
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="yourname@email.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label htmlfor="message" className="block text-gray-700 text-sm mb-2">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="25"
            rows="7"
            placeholder="Send me a message and i'll reply you as soon as possible....."
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
          <div style={{ marginBottom: 10 }}>
            <input type="checkbox" name="" id="check" />
            <label htmlFor="check" style={{ marginLeft: 4 }}>
              You agree to providing your data to M_Roheemoh who contact you.
            </label>
          </div>
          <button
          id="btn__submit"
            className="bg-blue-900 w-full rounded-md text-white text-sm text-center py-2"
            onClick={handleSubmit}
          >
            Message Me
          </button>
        </form>
      </div>
      <div className="border w-full mt-8"></div>
      <Footer />
    </>
  );
}

export default Contact;

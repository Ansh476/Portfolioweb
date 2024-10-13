import React, { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [showMessage, setShowMessage] = useState(false); // State to handle the alert

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eci0rdj",
        "template_gaxcrz4",
        form.current,
        {
          publicKey: 'Lg1iYpsZjKoAfR49R',
        }
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setShowMessage(true); 
          setTimeout(() => {
            setShowMessage(false);
          }, 1000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-gradient-to-r from-homic to-black text-white">
      {showMessage && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 p-2 bg-green-500 text-white rounded-md shadow-md">
          Message sent successfully!
        </div>
      )}
      
      <div className="grid grid-cols-2 gap-8 w-3/4 max-w-[900px] p-8 bg-homic rounded-lg shadow-lg">
        <div className="flex flex-col justify-center items-start text-lg gap-6">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <div className="flex items-center">
            <FaPhone className="text-blue-400 mr-3" />
            <p className="text-blue-400">9136016916</p>
          </div>
          <div className="flex items-center">
            <FaGithub className="text-blue-400 mr-3" />
            <a href="https://github.com/Ansh476" className="text-blue-400" target='_blank' rel="noreferrer">
              Github/Ansh476
            </a>
          </div>
          <div className="flex items-center">
            <FaLinkedin className="text-blue-400 mr-3" />
            <a href="https://www.linkedin.com/in/ansh-sarfare-24a49a204/" className="text-blue-400" target='_blank' rel="noreferrer">
              LinkedIn/Ansh Sarfare
            </a>
          </div>
        </div>


        <div>
          <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <label className="text-lg">Name</label>
            <input
              type="text"
              name="from_name"
              className="p-2 rounded-md bg-white to-black border border-gray-600 focus:border-black outline-none text-black"
            />

            <label className="text-lg">Email</label>
            <input
              type="email"
              name="from_email"
              className="p-2 rounded-md bg-white to-black border border-gray-600 focus:border-black outline-none text-black"
            />

            <label className="text-lg">Message</label>
            <textarea
              name="message"
              className="p-2 rounded-md bg-white to-black border border-gray-600 focus:border-black outline-none text-black h-32"
            />

            <input
              type="submit"
              value="Send"
              className="p-2 bg-gray-400 hover:bg-black rounded-md cursor-pointer text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

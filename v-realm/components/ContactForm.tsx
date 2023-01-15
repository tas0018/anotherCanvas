import React from "react"

const ContactForm = () => {
  return (
    <div className="flex justify-center w-full px-10 lg:px-0">
      <div className="w-full lg:w-[55%] flex flex-col justify-center bg-white px-10 lg:px-0 py-14 z-10">
        <div className="font-Poppins w-full lg:mx-20">
          <h4 className="text-dark-grey font-semibold text-4xl">
            Let's Build Together
          </h4>
          <h5 className="text-dark-grey text-base w-full md:w-3/5 mt-4 mb-12">
            To schedule a Design Meeting / Get a Quote, please fill out the
            following:
          </h5>
        </div>
        <form className="lg:mx-20" id="contact-form">
          <div>
            <div className="flex flex-col lg:flex-row justify-between space-y-3.5 lg:space-y-0 lg:space-x-3.5">
              <div className="relative w-full lg:w-1/2">
                <input
                  className="bg-off-white-two relative pt-5 px-2.5 pb-2.5 text-black tracking-wider font-medium
                              w-full peer outline-none border border-transparent peer-valid:border focus:border valid:border focus:border-blue-shade
                              valid:border-blue-shade transition-all duration-0.5 rounded-sm focus:bg-blue-shade/[.05]
                              valid:bg-blue-shade/[.05]"
                  type={"text"}
                  required
                />
                <span
                  className="text-black absolute left-0 pt-5 px-2.5 pb-2.5 pointer-events-none tracking-wider 
                                peer-valid:text-logo-pink peer-focus:text-logo-pink transition-all duration-0.5 
                                peer-focus:-translate-y-4 peer-focus:text-xs peer-valid:-translate-y-4 peer-valid:text-xs
                                "
                >
                  First Name
                </span>
              </div>

              <div className="relative w-full lg:w-1/2">
                <input
                  className="bg-off-white-two relative pt-5 px-2.5 pb-2.5 text-black tracking-wider font-medium
                              w-full peer outline-none border border-transparent peer-valid:border focus:border valid:border focus:border-blue-shade
                             valid:border-blue-shade transition-all duration-0.5 rounded-sm focus:bg-blue-shade/[.05]
                             valid:bg-blue-shade/[.05]"
                  type={"text"}
                  required
                />
                <span
                  className="text-black absolute left-0 pt-5 px-2.5 pb-2.5 pointer-events-none tracking-wider 
                                peer-valid:text-logo-pink peer-focus:text-logo-pink transition-all duration-0.5 
                                peer-focus:-translate-y-4 peer-focus:text-xs peer-valid:-translate-y-4 peer-valid:text-xs
                                "
                >
                  Last Name
                </span>
              </div>
            </div>
            <div>
              <div className="relative w-full mt-3.5">
                <input
                  className="bg-off-white-two relative pt-5 px-2.5 pb-2.5 text-black tracking-wider font-medium
                              w-full peer outline-none border border-transparent peer-valid:border focus:border valid:border focus:border-blue-shade
                             valid:border-blue-shade transition-all duration-0.5 rounded-sm focus:bg-blue-shade/[.05]
                             valid:bg-blue-shade/[.05]
                             [&:not(:focus)]:[&:not(:placeholder-shown)]:invalid:bg-red-800/[.5]
                             [&:not(:focus)]:[&:not(:placeholder-shown)]:invalid:border
                             [&:not(:focus)]:[&:not(:placeholder-shown)]:invalid:border-red-800
                             "
                  type={"email"}
                  placeholder=" "
                  required
                />
                <span
                  className="text-black absolute left-0 pt-5 px-2.5 pb-2.5 pointer-events-none tracking-wider 
                                peer-valid:text-logo-pink peer-focus:text-logo-pink transition-all duration-0.5 
                                peer-focus:-translate-y-4 peer-focus:text-xs peer-valid:-translate-y-4 peer-valid:text-xs
                                [&:not(:focus)]:peer-placeholder-shown:text-black
                                [&:not(:focus)]:peer-placeholder-shown:text-base
                                [&:not(:focus)]:peer-placeholder-shown:translate-y-0  
                                [&:not(:focus)]:[&:not(:placeholder-shown)]:text-logo-pink
                                [&:not(:focus)]:[&:not(:placeholder-shown)]:text-xs
                                [&:not(:focus)]:[&:not(:placeholder-shown)]:-translate-y-4
                                "
                >
                  Email Address*
                </span>
              </div>

              <div className="relative w-full mt-3.5">
                <textarea
                  className="bg-off-white-two relative pt-5 px-2.5 pb-2.5 h-52 text-black tracking-wider font-medium
                              w-full peer outline-none border border-transparent peer-valid:border focus:border valid:border focus:border-blue-shade
                             valid:border-blue-shade transition-all duration-0.5 rounded-sm focus:bg-blue-shade/[.05]
                             valid:bg-blue-shade/[.05]
                             [&:not(:focus)]:[&:not(:placeholder-shown)]:invalid:bg-red-800/[.5]
                             [&:not(:focus)]:[&:not(:placeholder-shown)]:invalid:border
                             [&:not(:focus)]:[&:not(:placeholder-shown)]:invalid:border-red-800
                             "
                  placeholder=" "
                  required
                />
                <span
                  className="text-black absolute left-0 pt-5 px-2.5 pb-2.5 pointer-events-none tracking-wider 
                                peer-valid:text-logo-pink peer-focus:text-logo-pink transition-all duration-0.5 
                                peer-focus:-translate-y-4 peer-focus:text-xs peer-valid:-translate-y-4 peer-valid:text-xs
                                [&:not(:focus)]:peer-placeholder-shown:text-black
                                [&:not(:focus)]:peer-placeholder-shown:text-base
                                [&:not(:focus)]:peer-placeholder-shown:translate-y-0  
                                [&:not(:focus)]:[&:not(:placeholder-shown)]:text-logo-pink
                                [&:not(:focus)]:[&:not(:placeholder-shown)]:text-xs
                                [&:not(:focus)]:[&:not(:placeholder-shown)]:-translate-y-4
                                "
                >
                  Your Message
                </span>
              </div>
            </div>
          </div>
        </form>
        <div className="flex justify-center md:justify-start lg:px-20">
          <button
            className="bg-blue-shade hover:bg-logo-pink transition ease-in delay-200 h-14 w-44 mt-9 rounded-[28px]"
            type="submit"
            form="contact-form"
            value="Submit"
          >
            Send Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactForm

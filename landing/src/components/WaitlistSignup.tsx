import { useState } from "react";

const WaitlistSignup = () => {
  const [email, setEmail] = useState("");

  return (
    <form
      className="relative my-8 z-30 w-10/12 md:w-auto mx-auto flex justify-center flex-col md:flex-row gap-8"
      action={`/api/waitlist_signup?email=${email}`}
      method="POST"
    >
      <input
        type="text"
        className="rounded-full py-4 border-[1px] px-10 bg-[#17293C] backdrop-blur-xl opacity-75 text-white"
        value={email}
        placeholder="Enter your email"
        onChange={e => setEmail(e.target.value)}
      />
      <button
        type="submit"
        role="link"
        className="hover:scale-90 hover:border-purple transition-all duration-300 text-base md:text-lg text-white font-medium rounded-full px-8 py-4 border-[1px] border-light-green bg-gradient-to-br from-purple to-light-green"
      >
        Join waitlist
      </button>
    </form>
  );
};

export default WaitlistSignup;

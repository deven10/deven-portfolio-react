export const Contact = () => {
  const handleContact = (e) => {
    e.preventDefault();
    console.log("Hello!");
  };
  return (
    <div className="flex justify-between pb-20">
      <div className="w-3/5">
        <h2 className="mb-10 text-[62px] text-left leading-none max-w-min">
          Contact
        </h2>
        <p className="mb-16 text-[15px] leading-relaxed text-wrap tracking-widest text-[#cdcdcd] w-[50%]">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I&apos;ll get back to you as soon as possible.
        </p>
      </div>
      <form
        onSubmit={handleContact}
        className="flex flex-col gap-6 w-2/5 contact-form"
      >
        <input placeholder="NAME" name="name" autoComplete="false" />
        <input placeholder="EMAIL" name="email" autoComplete="off" />
        <textarea placeholder="MESSAGE" name="message" autoComplete="off" />
        <button
          type="submit"
          className="mt-2 self-end py-2 tracking-widest text-[15px] glowing-underline"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

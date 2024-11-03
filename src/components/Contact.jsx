import { Loader } from "./Loader";
import { useForm } from "react-hook-form";
import { generateToast } from "./Toast";

export const Contact = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // console.log("data: ", data);
      const formData = new FormData();
      formData.append("name", data?.name);
      formData.append("email", data?.email);
      formData.append("message", data?.message);
      formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();
      // console.log("responseData: ", responseData);
      if (responseData.success) {
        generateToast("success", "Email sent successfully 🚀");
      } else {
        generateToast("error", "Failed to submit!");
        console.log("Error", data);
      }
    } catch (error) {
      console.log("Error: ", error);
      generateToast("error", "Something went wrong, Please try again later!");
    } finally {
      reset({ name: "", email: "", message: "" });
    }
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
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-2/5 contact-form"
      >
        <div className="flex flex-col gap-3">
          <input
            placeholder="NAME"
            {...register("name", {
              required: "Name is required!",
            })}
          />
          {errors.name && (
            <p className="text-[#fc4f4f] tracking-wider text-[14px] m-0">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <input
            placeholder="EMAIL"
            {...register("email", {
              required: "Email is required!",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-[#fc4f4f] tracking-wider text-[14px] m-0">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <textarea
            placeholder="MESSAGE"
            {...register("message", {
              required: "Message is required!",
            })}
          />
          {errors.message && (
            <p className="text-[#fc4f4f] tracking-wider text-[14px] m-0">
              {errors.message.message}
            </p>
          )}
        </div>
        <div className="flex gap-4 justify-end items-center">
          {isSubmitting ? (
            <span className="mt-[12px]">
              <Loader />
            </span>
          ) : null}
          <button
            type="submit"
            className="mt-2 self-end py-2 tracking-widest text-[15px] glowing-underline"
            disabled={isSubmitting}
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};

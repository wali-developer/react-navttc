import React from "react";

const InputField = ({ type, label, placeholder, ...rest }) => {
  return (
    <div className="flex flex-col gap-y-2 mb-5">
      <label className="text-base text-gray-800">{label}</label>
      <input
        type={type ?? "text"}
        required
        className=" h-[44px] border text-gray-700 text-base rounded-lg px-4 w-full focus:outline-none"
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default InputField;

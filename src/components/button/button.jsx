import React from "react";

function Button({ children, variant }) {
  let classname =
    "text-gray-800 text-[.98rem] py-1.5 px-5 rounded ease-in duration-300 ";

  if (variant === "transparent")
    classname += "bg-transparent hover:text-blue hover:bg-gray-100";
  else if (variant === "main")
    classname +=
      "bg-gradient-to-r from-blue to-blue-800 text-white hover:shadow";
  else classname += "bg-gray-300 hover:bg-gray-400";

  return <button className={`btn ${classname}`}>{children}</button>;
}

export default Button;

"use client";
import * as React from "react";

interface ButtonProps {
  name: string;
  func: () => void;
}

export function Button({ name, func }: ButtonProps) {
  return (
    <button
      className="
        w-1/4 h-16 text-green-500 border border-green-500 rounded-lg
        hover:bg-gray-100
        dark:hover:bg-gray-800
      "
      onClick={func}
    >
      {name}
    </button>
  );
}

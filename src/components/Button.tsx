import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return <button className="bg-gray-300 w-full p-1">{children}</button>;
}

import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="bg-gray-300 w-full p-1">
      {children}
    </button>
  );
}

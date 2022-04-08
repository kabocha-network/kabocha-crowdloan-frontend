import React from "react";

type FAQItemProps = {
  question: string;
  children: React.ReactNode;
}

export const FAQItem = ({ children, question }: FAQItemProps) => {
  return (
    <div className="border-b border-b-gray-200 pb-6 mb-4">
      <h3 className="text-2xl font-semibold py-2">{question}</h3>
      <div className="prose prose-lg max-w-none">
        {children}
      </div>
    </div>
  )
}

type FAQProps = {
  children: React.ReactNode;
}

export const FAQ = ({ children }: FAQProps) => {
  return (
    <div className="p-8 flex flex-col bg-gray-100 rounded-lg">
      {React.Children.map(children, (child) => {
        return (
          <div>{child}</div>
        )
      })}
    </div>
  )
}



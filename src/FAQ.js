import React, { useState } from "react";
import faqs from "./DataFAQ";
import { FaMinus, FaPlus } from "react-icons/fa6";

const FAQS = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleAccordion = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-lg font-semibold">{faq.pertanyaan}</h3>
              <span className="text-gray-600">
                {isOpen === index ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
            {isOpen === index && (
              <ul className="text-gray-700 mt-2">
                {faq.jawaban.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQS;

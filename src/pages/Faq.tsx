import React, { useState, useRef } from 'react';
import './FAQ.scss';
import { faqData } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const answerRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container faq-container">
      <h2 className="faq-title">FAQ</h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => handleToggle(index)}>
            {item.question}
            <span className="faq-toggle">
              {openIndex === index ? '-' : '+'}
            </span>
          </div>
          <div
            ref={(el) => (answerRefs.current[index] = el)}
            className={`faq-answer ${openIndex === index ? 'open' : ''}`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;

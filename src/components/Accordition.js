import React, { useState } from 'react';

const Accordition = () => {
  const [openSection, setOpenSection] = useState(null);

  const accordionData = [
    {
        id: "section1",
        title: "Can education flashcards be used for all age groups?",
        content: "Yes, education flashcards can be used across all age groups. They can be particularly effective for young learners in primary school as they make learning a fun, interactive process. However, they are also useful for older students and adults, especially for memorizing and reviewing key concepts."
    },
    {
        id: "section2",
        title: "How do education flashcards work?",
        content: "Flashcards can improve memory through repetition, make it easier to absorb details, and allow for self-paced study. They also enhance active recall, which is when you practice pulling information out of your memory (rather than passively reviewing it)."
    },
    {
        id: "section3",
        title: "Can education flashcards be used for test preparation?",
        content: "Review frequency can vary depending on the learning objectives. For optimal retention, using a spaced repetition system (SRS) is recommended, where the frequency of review is adjusted based on how well you know the material."
    }
];

    const toggleAccordion = (sectionId) => {
        setOpenSection(openSection === sectionId ? null : sectionId);
    };

    return (
        <div className='flex flex-col gap-5 mb-10 mt-20 sm:mt-28'>
            <p style={{background: 'linear-gradient(180deg, #06286E 0%, #164EC0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} className='font-bold text-3xl sm:text-5xl'>FAQ</p>
            <div data-accordion="collapse" id="accordion-collapse">
            {accordionData.map(({ id, title, content }) => (
                    <React.Fragment key={id}>
                        <h2>
                            <button 
                                  aria-controls={`${id}-body`}
                                  aria-expanded={openSection === id}
                                className="flex items-center justify-between w-[100%] md:w-[70%] p-5 font-medium border-2 border-blue-900 rounded-lg gap-3 mt-10"
                                onClick={() => toggleAccordion(id)}
                                type="button"
                            >
                                <span className='font-semibold text-base'>{title}</span>
                                <svg aria-hidden="true" className={`w-3 h-3 shrink-0 transform ${openSection === id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 5 5 1 1 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                            </button>
                        </h2>
                        <div
                            aria-labelledby={`${id}-heading`}
                            className={`p-5 border border-b-1 w-[100%] md:w-[70%] border-blue-900 rounded-lg ${openSection === id ? '' : 'hidden'}`}
                            id={`${id}-body`}
                        >
                            <p className="mb-2">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default Accordition;

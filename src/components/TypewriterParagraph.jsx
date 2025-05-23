import { useEffect, useState } from "react";

const TypewriterParagraph = ({
  messages = [],
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseTime = 5000,
  className = "",
}) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (messages.length === 0) return;

    let timeout;

    if (!isDeleting && charIndex < messages[index].length) {
      timeout = setTimeout(() => {
        setText((prev) => prev + messages[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === messages[index].length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % messages.length);
    }

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    isDeleting,
    index,
    messages,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1 }
          50% { opacity: 0 }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>

      <p
        className={`text-lg md:text-xl text-gray-600 max-w-2xl whitespace-pre-wrap min-h-[5rem] ${className}`}
      >
        {text}
        <span className="inline-block w-[1ch] animate-blink">|</span>
      </p>
    </>
  );
};

export default TypewriterParagraph;

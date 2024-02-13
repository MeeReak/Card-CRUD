"use client";

import { ReactNode, useState } from "react";
import { motion } from "framer-motion"; // import motion from framer-motion

interface ModalProps {
  children?: ReactNode;
  selectCard?: string;
}

const Modal: React.FC<ModalProps> = ({ children, selectCard }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <>
      <button
        className="fixed right-[10px] bottom-[10px] bg-pink-500 p-5 rounded-full"
        onClick={() => setIsShowModal(true)}
      >
        {selectCard ? (
          "Edit"
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        )}
      </button>
      {isShowModal && (
        <>
          <motion.div // use motion.div instead of div
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className=" fixed bg-pink-300 text-white shadow-lg top-0 right-0 w-full max-w-sm h-screen p-5"
          >
            <button
              onClick={() => setIsShowModal((sideBar) => !sideBar)}
              className="bg-white text-pink-500 p-5 block rounded-full "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div>{children}</div>
          </motion.div>
        </>
      )}
    </>
  );
};

export { Modal };

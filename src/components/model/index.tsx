import React, { useRef } from "react";
import { animated, useTransition } from "@react-spring/web";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { RxCross2 as CrossIcon } from "react-icons/rx";

interface ModelProps {
  show: boolean;
  setShow: (val: boolean) => void;
  children: React.ReactNode;
  styles?: string;
  loading?: boolean;
  title?: string;
  isCollapsable?: boolean;
}

const Model: React.FC<ModelProps> = (props) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { show, setShow, styles, children } = props;

  const transitions = useTransition(show, {
    from: { opacity: 0, transform: "translateY(-40px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-40px)" },
    config: { duration: 300 },
  });

  useOnClickOutside(modalRef, () => props.isCollapsable && setShow(false));

  return transitions(
    (style, item) =>
      item && (
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            backdropFilter: show ? "blur(1px)" : "none",
          }}
          className="fixed h-full top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 w-full"
        >
          <animated.div
            style={style}
            className={`absolute bg-base-400 rounded-lg shadow-md ${styles}`}
            ref={modalRef}
          >
            <div className="flex flex-col relative">
              {props.isCollapsable && (
                <div className=" absolute top-4 right-4 text-white p-2 rounded-full bg-black cursor-pointer">
                  <CrossIcon onClick={() => setShow(false)} />
                </div>
              )}
              {children}
            </div>
          </animated.div>
        </div>
      )
  );
};

export default Model;

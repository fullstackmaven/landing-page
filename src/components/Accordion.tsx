import classNames from "classnames";
import type { FC, HTMLAttributes, PropsWithChildren } from "react";

interface TAccordionProps {
  title: string;
  subtitle: string;
}

const Accordion: FC<
  PropsWithChildren<TAccordionProps & HTMLAttributes<HTMLDivElement>>
> = ({ title, subtitle, children, className, id, ...otherProps }) => {
  return (
    <div
      className={classNames(
        "bg-white w-full flex flex-row items-center flex-wrap py-2 px-2 md:py-3 md:px-4 rounded-s border border-[#DFDBD1]",
        className
      )}
      {...otherProps}
    >
      <input
        type="checkbox accordion-input"
        id={id}
        className="peer !appearance-none !hidden !select-none"
        hidden
      />
      <i className="fa-solid fa-chevron-right peer-checked:hidden flex items-center justify-center w-6 h-6"></i>
      <i className="fa-solid fa-chevron-down peer-checked:flex items-center hidden justify-center w-6 h-6"></i>
      <label
        htmlFor={id}
        className="items-center grow flex justify-between pl-2 !select-none"
      >
        <p className="text-dark text-s font-semibold leading-6">{title}</p>
        <p className="text-[#2254B5] bg-success px-2 p-1 text-center text-xxs font-medium rounded-xs">
          {subtitle}
        </p>
      </label>
      <div className="peer-checked:max-h-max max-h-0 basis-full peer-checked:pt-3 overflow-hidden transition-all select-text">
        {children}
      </div>
    </div>
  );
};

export default Accordion;

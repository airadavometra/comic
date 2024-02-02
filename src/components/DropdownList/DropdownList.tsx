import { Listbox } from "@headlessui/react";
import s from "./DropdownList.module.css";
import { Chevron } from "@icons/Chevron";
import classNames from "classnames";
import { WithClassName } from "@/types/withClassName";

type DropdownListProps = WithClassName & {
  value: any;
  onChange: (value: any) => void;
  label: string;
  displayValue: number | string;
  options: Array<{
    key: number | string;
    value: any;
    displayValue: number | string;
  }>;
};

export const DropdownList = ({
  value,
  onChange,
  label,
  displayValue,
  options,
  className,
}: DropdownListProps) => {
  return (
    <div className={classNames(s.listboxContainer, className)}>
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <>
            <Listbox.Label className={s.listboxLabel}>{label}</Listbox.Label>
            <Listbox.Button className={s.listboxButton}>
              {displayValue}
              <Chevron
                className={classNames(s.listboxChevron, {
                  [s.listboxOpenChevron]: open,
                })}
              />
            </Listbox.Button>
            <Listbox.Options className={s.listboxOptions}>
              {options.map((option) => (
                <Listbox.Option
                  key={option.key}
                  value={option.value}
                  className={s.listboxOption}
                >
                  {option.displayValue}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </div>
  );
};

import clsx from "clsx";
import { useState } from "react";

interface checkboxProps {
  labelName: string;
}

const CustomCheckbox: React.FC<checkboxProps> = ({ labelName }) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div
      className={`${checked ? "text-green-300" : "text-white hover:text-yellow-300"} text-xl `}
      onClick={() => setChecked(!checked)}
    >
      <input
        className="h-5"
        type="checkbox"
        name={labelName}
        checked={checked}
      />
      <label
        className={clsx(
          { "line-through": checked },
          `pl-3 text-2xl fancy-regular hover:cursor-pointer`,
        )}
        htmlFor={labelName}
      >
        {labelName}
      </label>
    </div>
  );
};

export default CustomCheckbox;

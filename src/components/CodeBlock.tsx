import copyIcon from "../assets/copy.svg";
import checkIcon from "../assets/tick.svg";
import outputVisible from "../assets/see-pass.svg";
import outputInvisible from "../assets/hide-pass.svg";
import { useState } from "react";
import { clsx } from "clsx";

interface codeBlockProps {
  codeText: string;
  imp: boolean;
  outText: string;
}

interface codeOutProps {
  outText: string;
  className: string;
  imp: boolean;
}

const CodeBlock: React.FC<codeBlockProps> = ({ codeText, imp, outText }) => {
  const [icon, seticon] = useState(copyIcon);
  const [toggleOutput, setToggleOutput] = useState<boolean>(false);
  const [toggleOutputIcon, setToggleOutputIcon] = useState(outputInvisible);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeText);
    seticon(checkIcon);
    setTimeout(() => {
      seticon(copyIcon);
    }, 10000);
  };

  const outputVisiblityHandler = () => {
    setToggleOutput(!toggleOutput);
    if (toggleOutput) {
      setToggleOutputIcon(outputInvisible);
    } else {
      setToggleOutputIcon(outputVisible);
    }
  };
  return (
    <div>
      <div
        className={clsx(
          "rounded-t-md flex items-center justify-between pl-1 pr-3 pb-5",
          { "bg-gray-700 opacity-90": !imp },
          { "bg-cyan-900 text-white": imp },
        )}
      >
        <pre>
          <code className="text-md">{codeText}</code>
        </pre>
        <div className="icon-field flex gap-5 self-start mt-2">
          <img
            className="cursor-pointer self-start mt-2"
            src={icon}
            height={20}
            width={20}
            alt="Copy"
            onClick={copyToClipboard}
          />
          <img
            className="cursor-pointer self-start mt-2 color-white"
            src={toggleOutputIcon}
            height={20}
            width={20}
            alt="visible"
            onClick={outputVisiblityHandler}
          />
        </div>
      </div>
      <CodeOut
        className={`${toggleOutput ? "opacity-90 transition-opacity ease-linear duration-300 scale-100" : "opacity-0 max-w-0 max-h-0"}`}
        imp={imp}
        outText={outText}
      />
    </div>
  );
};

const CodeOut: React.FC<codeOutProps> = ({ className, outText, imp }) => {
  return (
    <div
      className={`${className} m-0 mt-0 border-t-2 border-gray-300 mb-7 px-3 pb-5 rounded-b-md 
      ${clsx({ "bg-cyan-950": imp }, { "bg-gray-800": !imp })}`}
    >
      <pre>
        <p className="block underline decoration-gray-400 pt-5 pl-5 pb-0 mb-0 text-xl font-bold">
          Sample Output:
        </p>
        <code className="pt-0 mt-0 text-md overflow-x-auto">{outText}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;

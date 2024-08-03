import copyIcon from "./assets/copy.svg";
import checkIcon from "./assets/tick.svg";
import { useState } from "react";
interface codeBlockProps {
  codeText: string;
}
const CodeBlock: React.FC<codeBlockProps> = ({ codeText }) => {
  const [icon, seticon] = useState(copyIcon);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeText);
    seticon(checkIcon);
  };
  return (
    <div className="bg-gray-700 rounded-md flex items-center justify-between pl-1 pr-3 pb-5 my-3">
      <pre>
        <code className="text-md">{codeText}</code>
      </pre>
      <img
        className="cursor-pointer"
        src={icon}
        height={25}
        width={25}
        alt="Copy"
        onClick={copyToClipboard}
      />
    </div>
  );
};

export default CodeBlock;

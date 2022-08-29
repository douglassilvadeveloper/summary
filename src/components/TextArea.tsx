import { capitalize } from "../helpers/capitalize";
import { parse } from "../helpers/parse";

type TextAreaProps = {
  labelDescription: string;
  inputTextValue: string;
  onTextChange?: (newText: string, newSmmary: string[]) => void;
  id: string;
  autoFocus?: boolean;
};

function TextArea({
  labelDescription,
  inputTextValue,
  onTextChange,
  id,
  autoFocus = false,
}: TextAreaProps) {
  const handleTextChange = ({ currentTarget }: any) => {
    if (onTextChange) {
      const newValue = currentTarget.value;
      const newSummary = parse(newValue);
      onTextChange(newValue, newSummary);
    }
  };

  return (
    <form className="form">
      <div className="form-group flex-col">
        <label className="py-1 border-default" htmlFor={id}>
          {labelDescription}
        </label>
        <textarea
          id={id}
          className="p-1 border-light-1"
          name="name"
          rows={22}
          autoFocus={autoFocus}
          value={inputTextValue}
          onChange={handleTextChange}
        />
      </div>
    </form>
  );
}

export default TextArea;

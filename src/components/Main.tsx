import { ReactNode, useState } from "react";
import TextArea from "./TextArea";

function Main() {
  // Text
  const [text, setText] = useState<string>("");

  // Summary
  const [summary, setSummary] = useState<string[]>([]);

  const handleTextChange = (newText: string, newSmmary: string[]) => {
    setText(newText);
    setSummary(newSmmary);
  };
  return (
    <main>
      <div className="flex-col px-1">
        <p className="p-1">
          <span>Example: </span>
          {`{Lorem ipsum} dolor sit amet, {consectetur adipiscing elit} ==> `}
          Lorem ipsum. Consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex-row f-between px-1">
        <div className="p-1 w-50">
          <TextArea
            autoFocus={true}
            id="textArea"
            labelDescription="Entre or paste your text:"
            inputTextValue={text}
            onTextChange={handleTextChange}
          />
        </div>
        <div className="p-1 w-50">
          <TextArea
            autoFocus={false}
            id="summary"
            labelDescription="Summary:"
            inputTextValue={summary.join(". ")}
          />
        </div>
      </div>
    </main>
  );
}

export default Main;

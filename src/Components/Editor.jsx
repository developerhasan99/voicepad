import { forwardRef } from "react";
import lStorage from "../utils/localStorage";

const Editor = forwardRef(({ state, setState }, ref) => {
  const handleChange = (e) => {
    const newDraftArray = state.draftArray;
    newDraftArray[state.selectedDraft] = e.target.value;
    setState({ ...state, draftArray: newDraftArray });
    lStorage.set(state);
  };

  return (
    <div className="editor">
      <textarea
        ref={ref}
        placeholder="Hello! We have set your default language as English (United States). But you can easily change it from the language dropdown. Next, click the Start listening button or press Alt+z to activate voice typing. 👉🎙️🚀️"
        cols="30"
        rows="10"
        onChange={handleChange}
        value={state.draftArray[state.selectedDraft]}
      ></textarea>
    </div>
  );
});

export default Editor;

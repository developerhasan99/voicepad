import lStorage from "./localStorage";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.interimResults = true;

const SpeechRecognizer = (state, setState, useEffect, editorRef) => {
  // ─── Set The Language From State ────────────────────────────────────────────────
  recognition.lang = state.language;

  // ─── Conditionaly Start And Stop Voice Recognition ──────────────────────────────
  useEffect(() => {
    if (state.isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }
  }, [state.isListening]);

  recognition.onresult = (e) => {
    const editor = editorRef.current;
    let transcript = e.results[0][0].transcript;

    setState({ ...state, recognized: transcript });

    if (e.results[0].isFinal) {
      // ─── Get Current Cursor Position Before Updating The State ───────
      const curPos = editor.selectionStart;

      // ─── Conditionaly Return Added Text Space ──────────────────────
      const newText = () => {
        if (transcript.includes("clear") && transcript.includes("editor")) {
          return "";
        }

        if (
          (transcript.includes("new") && transcript.includes("line")) ||
          (transcript.includes("new") && transcript.includes("paragraph"))
        ) {
          transcript = "\n\n";
        }

        //System commands
        if (transcript.includes("copy") && transcript.includes("clipboard")) {
          window.navigator.clipboard.writeText(editor.value);
          return editor.value;
        }

        console.log(transcript);

        if (editor.value.length === 0) {
          return transcript + " ";
        }
        if (editor.value.length === curPos) {
          return editor.value + transcript + " ";
        }

        return (
          editor.value.slice(0, curPos) +
          transcript +
          " " +
          editor.value.slice(curPos)
        );
      };

      // ─── Calculate New Cursor Position ───────────────────────────────
      const newCurPos = curPos + transcript.length + 1;

      // ─── Create New Darft Array ──────────────────────────────────────
      const newDraftArray = state.draftArray;
      newDraftArray[state.selectedDraft] = newText();
      setState(
        {
          ...state,
          draftArray: newDraftArray,
        },
        () => {
          editor.setSelectionRange(newCurPos, newCurPos);
          lStorage.set(state);
        }
      );
    }
  };

  recognition.onend = () => {
    if (state.isListening) {
      recognition.start();
    }
  };
};

export default SpeechRecognizer;

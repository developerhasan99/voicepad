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
      //
      // INSERT STOP SIGNS
      //

      transcript = transcript.replace("full stop", ".");
      transcript = transcript.replace("coma", ",");
      transcript = transcript.replace("exclamation mark", "!");
      transcript = transcript.replace("question mark", "?");
      transcript = transcript.replace("semicolon", ";");
      transcript = transcript.replace("দাড়ি", "।");
      transcript = transcript.replace("কমা", ",");
      transcript = transcript.replace("বিস্ময় চিহ্ন", "!");
      transcript = transcript.replace("প্রশ্নবোধক চিহ্ন", "?");
      transcript = transcript.replace("সেমিকোলন", ";");

      // ─── Get Current Cursor Position Before Updating The State ───────
      const curPos = editor.selectionStart;

      // ─── Calculate and modify transcript ──────────────────────
      const calculateNewText = () => {
        //
        // EXICUTE COMMANDS
        //
        if (
          transcript.includes("clear editor") ||
          transcript.includes("erase everything") ||
          transcript.includes("এডিটর পরিষ্কার করো") ||
          transcript.includes("সবকিছু মুছে ফেলো")
        ) {
          return "";
        }

        if (
          transcript.includes("new line") ||
          transcript.includes("নতুন লাইন")
        ) {
          transcript = "\n";
        }

        if (
          transcript.includes("new paragraph") ||
          transcript.includes("নতুন প্যারা") ||
          transcript.includes("নতুন প্যারাগ্রাফ")
        ) {
          transcript = "\n\n";
        }

        if (
          transcript.includes("copy text to clipboard") ||
          transcript.includes("লেখা ক্লিপবোর্ডে কপি করো")
        ) {
          window.navigator.clipboard.writeText(editor.value);
          return editor.value;
        }

        //
        // CALCULATE TEXT INSERTION POINT
        //
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

      const newText = calculateNewText();

      // ─── Calculate New Cursor Position ───────────────────────────────
      const newCurPos = curPos + transcript.length + 1;

      // ─── Create New Darft Array ──────────────────────────────────────
      const newDraftArray = state.draftArray;
      newDraftArray[state.selectedDraft] = newText;
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

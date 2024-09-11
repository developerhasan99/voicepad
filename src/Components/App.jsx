// ─── Import Dependencies ────────────────────────────────────────────────────────
import { useEffect, useRef } from "react";
import { useStateWithCallbackLazy } from "use-state-with-callback";
import { Container } from "@mui/system";
import { Alert, AlertTitle, Grid } from "@mui/material";

// ─── Import Custom Components ───────────────────────────────────────────────────
import Editor from "./Editor";
import Language from "./Language";
import RecognizedTexts from "./RecognizedTexts";
import SwitchListeningMode from "./SwitchListeningMode";
import DraftList from "./DraftList";

// ─── Import Util Functions ──────────────────────────────────────────────────────
import SpeechRecognizer from "../utils/SpeechRecognizer";
import lStorage from "../utils/localStorage";
import handleKyeEvents from "../utils/handleKyeEvents";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// ─── Component Scafolding ───────────────────────────────────────────────────────
function App() {
  // ─── Initialize State ───────────────────────────────────────────────────────────
  const [state, setState] = useStateWithCallbackLazy({
    isListening: false,
    language: "en-us",
    recognized: "",
    selectedDraft: 0,
    draftArray: [],
  });

  // ─── Initialize Refs ────────────────────────────────────────────────────────────
  const editorRef = useRef(null);

  // ─── Call Use Effect Function ───────────────────────────────────────────────────
  useEffect(() => {
    const localDrafts = lStorage.get();
    setState({ ...state, ...localDrafts });
    editorRef.current.focus();
  }, []);

  // ─── Call Util Functions ────────────────────────────────────────────────────────
  handleKyeEvents(state, setState);

  // Check and initiate Speech recognition
  if (SpeechRecognition) {
    const recognition = new SpeechRecognition();

    recognition.interimResults = true;
    SpeechRecognizer(state, setState, useEffect, editorRef, recognition);
  }

  return (
    <div>
      <Container>
        <Grid container spacing={2} sx={{ minHeight: "100vh" }}>
          <Grid item xs={12} md={8}>
            <Editor ref={editorRef} state={state} setState={setState} />
          </Grid>
          <Grid item xs={12} md={4} className="sidebar">
            {SpeechRecognition ? (
              <>
                <Language state={state} setState={setState} />
                <RecognizedTexts text={state.recognized} />
                <SwitchListeningMode state={state} setState={setState} />
              </>
            ) : (
              <Alert
                variant="filled"
                severity="error"
                sx={{
                  marginBottom: "30px",
                }}
              >
                <AlertTitle>
                  <strong>
                    Your browser does not support speech-recognition API!
                  </strong>
                </AlertTitle>
                You are probably using the Firefox or Internet Explorer browser.
                Please consider using Google Chrome, Safari, Opera Mini, or any
                other modern browser that supports speech-recognition API.
              </Alert>
            )}
            <DraftList state={state} setState={setState} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;

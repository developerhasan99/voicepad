import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import lStorage from "../utils/localStorage";

function DraftList({ state, setState }) {
  const handleListItemClick = (index) => {
    setState({ ...state, selectedDraft: index });
    lStorage.set(state);
  };

  return (
    <>
      <h4>Dirfts:</h4>
      <List>
        {state.draftArray.map((value, index) => {
          let draftTitle = value
            ? value.slice(0, 25) + "..."
            : "Daraft " + index;

          return (
            <ListItem disablePadding key={index}>
              <ListItemButton
                selected={index === state.selectedDraft}
                onClick={() => handleListItemClick(index)}
              >
                <ListItemText primary={draftTitle} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export default DraftList;

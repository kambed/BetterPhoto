import {Divider, List, ListItem} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/DeleteRounded";
import React from "react";

interface ListParams {
    strings: string[];
    handleDelete: (index: number) => void;
}

function StringsList({ strings, handleDelete }: ListParams) {
  return (
      <List className="mb-4">
          {strings.map((key, index) => (
              <>
                  <ListItem className="px-0" secondaryAction={
                      <IconButton edge="end" aria-label="delete"
                                  onClick={() => handleDelete(index)}>
                          <DeleteIcon/>
                      </IconButton>
                  }>
                      {key}
                  </ListItem>
                  <Divider/>
              </>
          ))}
      </List>
  );
}

export default StringsList;

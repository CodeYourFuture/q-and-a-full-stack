import React from "react";
import { Editor as DraftEditor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editor = ({ editorState, onEditorStateChange }) => {
  return (
    <DraftEditor
      editorStyle={{ minHeight: "8em" }}
      editorState={editorState}
      toolbarClassName="text-dark "
      wrapperClassName="text-dark"
      editorClassName="text-dark"
      onEditorStateChange={onEditorStateChange}
      toolbar={{
        options: ["inline", "list", "colorPicker", "link", "emoji", "image"],
        inline: { inDropdown: false, options: ["monospace"] },
        list: { inDropdown: true },
        textAlign: { inDropdown: true },
        link: { inDropdown: true },
        history: { inDropdown: true },

        image: {
          defaultSize: {
            width: "100%",
          },
        },
      }}
    />
  );
};

export default Editor;

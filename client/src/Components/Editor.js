/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import { Editor as DraftEditor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editor = ({ editorState, onEditorStateChange }) => {
  return (
    <>
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
      <p className="text-muted mt-2 border rounded px-1 hint-color">
        Hint: host your screenshots on &nbsp;
        <a className="hint-link" href="https://linkpicture.com/en/?set=en">
          LinkPicture,
        </a>
        &nbsp; click on image icon and share the URL.
      </p>
    </>
  );
};

export default Editor;

Editor.propTypes = {
  editorState: PropTypes.object,
  onEditorStateChange: PropTypes.func,
};

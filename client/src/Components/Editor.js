/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
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
    />
  );
};

export default Editor;

Editor.PropTypes = {
  editorState: PropTypes.object,
  onEditorStateChange: PropTypes.func,
};

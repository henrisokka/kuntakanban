import React from "react";
import { Input } from "semantic-ui-react";

export default function SearchTool(props) {
  return (
    <div className="SearchTool">
      <Input />
      <div className="tag">
        {props.tags ? props.tags.map(t => <span>{t}</span>) : ""}
      </div>
    </div>
  );
}

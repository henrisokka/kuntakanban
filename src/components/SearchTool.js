import React from "react";
import { Input } from "semantic-ui-react";

export default function SearchTool(props) {
  return (
    <div className="SearchTool">
      <Input />
      <div className="tag-container">
        {props.tags
          ? props.tags.map(t => (
              <span
                onClick={() => props.switchTag(t)}
                className="tag"
                style={{
                  backgroundColor: props.selectedTags.includes(t)
                    ? "green"
                    : "white"
                }}
              >
                {t}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
}

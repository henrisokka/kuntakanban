import React from "react";
import { Input } from "semantic-ui-react";

export default function SearchTool(props) {
  return (
    <div className="SearchTool">
      <h5>Haku</h5>
      <div style={{ height: "60px" }}>
        <Input />
      </div>
      <div className="tag-search">
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

import React, { useState } from "react";
import { Input, TextArea, Form, Button } from "semantic-ui-react";

export default function TicketCreator(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ticketCount, setCount] = useState(0);
  const [tags, updateTags] = useState([]);
  const [tagInputContent, updateContent] = useState("");

  return (
    <div className="TicketCreator">
      <h3 className="Title">Uusi aloite</h3>
      <div className="Input-Container">
        <h5>Otsikko</h5>
        <Input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Otsikko"
        />
      </div>
      <div className="Input-Container">
        <h5>Kuvaus</h5>
        <Form>
          <TextArea
            rows={10}
            placeholder="Ongelman kuvaus"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </Form>
      </div>
      <div className="Input-Container">
        <Button>Lisää kuva</Button>
        <Button>Liitä sijainti</Button>
      </div>
      <Form>
        <Input
          tagContent={tagInputContent}
          onChange={e => updateContent(e.target.value)}
          placeholder="Tag"
        />
        <Button
          onClick={() => {
            updateTags(addTag(tags, tagInputContent));
          }}
        >
          Lisää
        </Button>
      </Form>
      {tags.map(t => (
        <span style={{ marginLeft: "5px" }}>{t}</span>
      ))}
      <div className="Input-Container">
        <Button
          primary
          onClick={() => {
            if (title.length < 1 || description.length < 1) {
              return;
            }
            setCount(ticketCount + 1);
            console.log(tags);
            props.createTicket(
              newTicket(
                "id" + ticketCount,
                title,
                description,
                "testihenkilo1",
                tags
              )
            );
            props.close();
          }}
        >
          Luo aloite
        </Button>
        <Button secondary onClick={props.close}>
          Peruuta
        </Button>
      </div>
    </div>
  );
}

function newTicket(id, title, description, owner, tags) {
  return {
    id,
    title,
    description,
    owner: null,
    column: 0,
    voters: [],
    comments: [],
    tags
  };
}

const addTag = (tags, newTag) => {
  if (newTag.length === 0) {
    return tags;
  }
  return [...tags, newTag];
};

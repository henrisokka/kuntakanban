import React, { useState } from "react";
import { Input } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

export default function TicketCreator() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("no title");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h1>Täällä luodaan tikettejä</h1>
      <div>
        <Input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Otsikko"
        />
      </div>
      <div>
        <Input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text"
          placeholder="Yhteystiedot"
        />
      </div>
      <div>
        <textarea
          placeholder="Ongelman kuvaus"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <Button primary>Luo aloite</Button>
    </div>
  );
}

const createTicket = (name, description, tags) => {
  return {
    name,
    description,
    tags
  };
};

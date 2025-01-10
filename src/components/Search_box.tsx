import React, { useState } from "react";
import { Form, FormControl, Dropdown, DropdownButton } from "react-bootstrap";

function Search() {
  const [language, setLanguage] = useState("English");
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "20px", maxWidth: "750px", margin: "auto" }}>
      <div className="shadow-textarea">
        <Form.Group
          controlId="exampleInput"
          style={{
            border: "2px solid #4CAF50",
            borderRadius: "8px",
            padding: "40px",
            backgroundColor: "#F9F8FF",
          }}
        >
          <FormControl
            type="text"
            placeholder="A portfolio website for my boutique shop"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ boxShadow: "none" }}
            as="textarea"
            rows={3}
            className="custom-textarea"
          />
          <small
            style={{ display: "block", textAlign: "right", color: "#888" }}
          >
            {text.length}/200
          </small>
          {/* Place DropdownButton directly inside InputGroup */}
          <DropdownButton
            variant="outline-secondary"
            title={`Website Language: ${language}`}
            id="language-dropdown"
            onSelect={(e: any) => setLanguage(e)}
          >
            <Dropdown.Item eventKey="English">English</Dropdown.Item>
            <Dropdown.Item eventKey="Spanish">Spanish</Dropdown.Item>
            <Dropdown.Item eventKey="French">French</Dropdown.Item>
          </DropdownButton>
        </Form.Group>
      </div>
    </div>
  );
}

export default Search;

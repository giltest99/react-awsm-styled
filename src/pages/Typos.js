import React, { useState } from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";

const ParaStatus = styled.p`
  color: ${(props) => (props.completed ? "green" : "red")};
`;

export default function Typos() {
  const toggleMessages = {
    ok: "Tâche terminée",
    ko: "Tâche à faire",
  };
  const [toggle, setToggle] = useState(false);
  const [msg, setMsg] = useState(toggleMessages.ko);

  const toggleTask = () => {
    const val = !toggle;
    setToggle(val);
    if (val === true) setMsg(toggleMessages.ok);
    else setMsg(toggleMessages.ko);
  };

  return (
    <>
      <main>
        <section>
          <h1>Typography</h1>
          <Navigation />
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <p>
            Paragraphe : Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dolor quos quaerat nemo. Magnam, qui? Corrupti minus rerum
            ducimus obcaecati eum.
          </p>
          <p>
            <i>Lorem ipsum dolor sit amet consectetur adipisicing elit.</i>
          </p>
          <p>
            <u>Lorem ipsum dolor sit amet consectetur adipisicing elit.</u>
          </p>
          <p>
            <s>Lorem ipsum dolor sit amet consectetur adipisicing elit.</s>
          </p>

          <pre>
            <code>
              Code: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, nesciunt.
            </code>
          </pre>
        </section>
        <section>
          <h3>Toggle task status : useState & styled-components</h3>
          <ParaStatus completed={toggle}>{msg}</ParaStatus>
          <button onClick={toggleTask}>Toggle</button>
        </section>
      </main>
    </>
  );
}

import React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";

const Task = styled.li`
  color: ${(props) =>
    props.status === "todo"
      ? "crimson"
      : props.status === "in-progress"
      ? "orange"
      : props.status === "completed"
      ? "green"
      : ""};
`;

export default function Lists() {
  return (
    <>
      <main>
        <h1>Navigation</h1>
        <Navigation />
        <section>
          <h2>Unordered list</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ul>
        </section>
        <section>
          <h2>Ordered list</h2>
          <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ol>
        </section>

        <section>
          <h2>Description list</h2>
          <dl>
            <dt>Item 1</dt>
            <dd>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, aut.
            </dd>
          </dl>
          <dl>
            <dt>Item 2</dt>
            <dd>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
              provident quod molestiae commodi tenetur repellat eum repudiandae
              veniam!
            </dd>
          </dl>
          <dl>
            <dt>Item 3</dt>
            <dd>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              nisi repellat dolore. Libero, voluptas doloremque.
            </dd>
          </dl>
        </section>
        <section>
          <h3>Styled list : task status</h3>
          <ul>
            <Task status="todo">To do</Task>
            <Task status="in-progress">In progress</Task>
            <Task status="completed">Completed</Task>
          </ul>
        </section>
        <section>
          <h2>Navigation with unordered list (including links)</h2>
          <nav>
            <ul>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 3</a>
              </li>
              <li>
                <a href="#">Link 4</a>
              </li>
              <li>
                <a href="#">Link 5</a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </>
  );
}

import React from "react";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <>
      <main>
        <h1>Home</h1>
        <Navigation />
        <h2>Awesome AWSM.css !</h2>
        <h3>Semantic css framework</h3>
        <p>
          <a
            href="https://igoradamenko.github.io/awsm.css/index.html"
            target="_blank"
            rel="noreferrer"
          >
            AWSM.css
          </a>
        </p>
      </main>
    </>
  );
}

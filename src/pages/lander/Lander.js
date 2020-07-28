import React from "react";
// react router link for chargen / mapquiz
// add header component

const Lander = () => {
  return (
    <main>
      <h1>Welcome to the Campaign (setup)!</h1>

      <section>
        <p>If you're here, then either:</p>
        <ol>
          <li>
            I sent you a token so we could get you onboarded and prepped to
            play, and/or
          </li>
          <li>
            ...you know how to use browser DevTools (
            <em>which is also cool!</em>)
          </li>
        </ol>
        <p>
          So let's get started! The backgrounder map-n'-quiz should take ~10
          min, while you can spend as much time as you like on the rando-PC
          generator.
        </p>
      </section>
      <section>
        <h2>Backgrounder Map and Quiz</h2>
        <p>more text here -- why you created it, and what we'll use it for</p>
      </section>
      <section>
        <h2>Random-PC Generator</h2>
        <p>more text here -- why you created it, and what we'll use it for</p>
      </section>
    </main>
  );
};

export default Lander;

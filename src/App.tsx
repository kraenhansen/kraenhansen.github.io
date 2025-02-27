import "./App.css";
import { BlueskyLogo } from "./BlueskyLogo";
import { GitHubLogo } from "./GitHubLogo";
import { LinkedInLogo } from "./LinkedInLogo";

function App() {
  return (
    <>
      <h1>Hi 👋 I'm Kræn</h1>
      <p>I'm a Software Engineer from Denmark 🇩🇰</p>
      <p>
        You can find me on{" "}
        <a href="https://bsky.app/profile/kraenhansen.dk" target="_blank">
          Bluesky <BlueskyLogo />
        </a>
        {", "}
        <a href="https://github.com/kraenhansen" target="_blank">
          GitHub <GitHubLogo />
        </a>
        {" and "}
        <a href="https://linkedin.com/in/kraenhansen" target="_blank">
          LinkedIn <LinkedInLogo />
        </a>
      </p>
    </>
  );
}

export default App;

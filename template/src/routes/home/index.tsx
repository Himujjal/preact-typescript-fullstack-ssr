import { h } from "preact";
import * as style from "./style.css";

const Home = (props: { path?: string }) => (
  <div class={style.home}>
    <h1>Home</h1>
    <p>This is the Home component.</p>
  </div>
);

export default Home;

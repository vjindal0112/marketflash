import styled from "styled-components";
import { Tagline, Subtitle, Button } from "../styles";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Tagline>Find the perfect email targets</Tagline>
      <Subtitle>Hit your mark, increase conversions</Subtitle>
      <Button to="/salesforce">Let's get started</Button>
    </>
  );
}

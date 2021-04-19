import styled from "styled-components";
import { OnboardingTagline, Subtitle, Button, ButtonLogo } from "../styles";
import Navbar from "../components/Navbar";

export default function People() {
  return (
    <>
      <Navbar />
      <OnboardingTagline>List of People</OnboardingTagline>
      <Subtitle>Send emails seamlessly through the platform</Subtitle>
      <Button to="/email">Connect</Button>
    </>
  );
}

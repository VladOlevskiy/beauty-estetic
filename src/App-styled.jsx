import styled from "styled-components";
import { img_back } from "./media";

export const Wrapper = styled.div`
  background-image: url(${img_back});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  padding-top: 200px;
  padding-bottom: 200px;
  height: 80vh;
  width: 80vw;
`;

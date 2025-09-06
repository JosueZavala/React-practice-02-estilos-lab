"use client";
import styled from "styled-components";

export const SCCard = styled.article`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 1rem;
  h3 {
    font-size: 1.125rem;
    font-weight: 800;
    margin: 0 0 0.25rem;
  }
  p {
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
  }
`;

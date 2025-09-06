"use client";
import styled from "styled-components";

export const SCButton = styled.button<{ $variant?: "primary" | "ghost" }>`
  border: none;
  padding: 0.6rem 1rem;
  border-radius: ${({ theme }) => theme.radius};
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease;
  ${({ $variant, theme }) =>
    $variant === "ghost"
      ? `background: transparent; color: ${theme.colors.primary}; border: 2px solid ${theme.colors.primary};`
      : `background: ${theme.colors.primary}; color: white;`}
  &:hover {
    transform: translateY(-1px);
  }
`;

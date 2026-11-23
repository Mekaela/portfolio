import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders local blog posts in English and Portuguese", () => {
  render(<App />);

  fireEvent.click(screen.getByRole("link", { name: "blog" }));
  expect(
    screen.getByRole("heading", { name: "Agricultural Data Insights" })
  ).toBeInTheDocument();
  fireEvent.click(
    screen.getByRole("link", {
      name: /Tree detection to estimate tree heights and crown areas in Montado woodland/,
    })
  );
  expect(
    screen.getByRole("heading", {
      name: "Tree detection to estimate tree heights and crown areas in Montado woodland",
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("img", { name: "Cork oak trees detected from above" })
  ).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Portuguese" }));
  expect(
    screen.getByRole("heading", {
      name: "Deteção de árvores para estimar a altura e a área da copa em montado",
    })
  ).toBeInTheDocument();
});

test("project cards link to their matching blog posts", () => {
  window.localStorage.setItem("portfolio-language", "en");
  window.location.hash = "#/";
  render(<App />);

  expect(
    screen.getByText(/Before becoming a data scientist/)
  ).toBeInTheDocument();

  fireEvent.click(
    screen.getByRole("link", {
      name: /Tree detection to estimate tree heights and crown areas in Montado woodland/,
    })
  );
  expect(
    screen.getByRole("heading", {
      name: "Tree detection to estimate tree heights and crown areas in Montado woodland",
    })
  ).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Portuguese" }));
  expect(
    screen.getByRole("heading", {
      name: "Deteção de árvores para estimar a altura e a área da copa em montado",
    })
  ).toBeInTheDocument();

  fireEvent.click(screen.getByRole("link", { name: /Mekaela Stevenson home/ }));
  fireEvent.click(screen.getByRole("button", { name: "Inglês" }));
  fireEvent.click(
    screen.getByRole("link", {
      name: /Carbon soil prediction and management tool for farmers/,
    })
  );
  expect(
    screen.getByRole("heading", {
      name: "Carbon soil prediction and management tool for farmers",
    })
  ).toBeInTheDocument();
});

test("the farm management project opens its English and Portuguese post", () => {
  window.localStorage.setItem("portfolio-language", "en");
  window.location.hash = "#/";
  render(<App />);

  expect(
    screen.getByText(/Before becoming a data scientist/)
  ).toBeInTheDocument();

  fireEvent.click(screen.getByRole("link", { name: /Farm management system/ }));
  expect(
    screen.getByRole("heading", { name: "Farm management system" })
  ).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Portuguese" }));
  expect(
    screen.getByRole("heading", { name: "Sistema de gestão agrícola" })
  ).toBeInTheDocument();
});

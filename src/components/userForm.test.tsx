/*

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UserForm from "./UserForm";

describe("UserForm Component", () => {
  test("se renderiza correctamente", () => {
    render(<UserForm />);
    expect(screen.getByText("Formulario de Registro")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Nombre")).toBeInTheDocument();
  });

  test("actualiza el estado al cambiar los valores de los inputs", () => {
    render(<UserForm />);
    const inputNombre = screen.getByPlaceholderText("Nombre");
    fireEvent.change(inputNombre, { target: { value: "Juan" } });
    expect(inputNombre.value).toBe("Juan");
  });

  test("permite enviar el formulario", async () => {
    render(<UserForm />);
    const botonEnviar = screen.getByText("Enviar");
    fireEvent.click(botonEnviar);

    await waitFor(() => {
      expect(screen.getByText("Successfully add!")).toBeInTheDocument();
    });
  });
});
*/

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskInput from "./TaskInput";

describe("TaskInput", () => {
  it("renderiza el formulario", () => {
    render(
      <TaskInput
        onAddTask={vi.fn().mockResolvedValue(undefined)}
        isLoading={false}
      />
    );

    expect(
      screen.getByRole("button", {
        name: /Agregar tarea/i,
      })
    ).toBeInTheDocument();
  });

  it("permite escribir una tarea", async () => {
    const user = userEvent.setup();

    render(
      <TaskInput
        onAddTask={vi.fn().mockResolvedValue(undefined)}
        isLoading={false}
      />
    );

    const input = screen.getByPlaceholderText(
      "Ej. Elaborar el proyecto final"
    );

    await user.type(input, "Comprar pan");

    expect(input).toHaveValue("Comprar pan");
  });

  it("no llama a onAddTask cuando el título está vacío", async () => {
    const user = userEvent.setup();

    const onAddTask = vi.fn().mockResolvedValue(undefined);

    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

    render(
      <TaskInput
        onAddTask={onAddTask}
        isLoading={false}
      />
    );

    await user.click(
      screen.getByRole("button", {
        name: /Agregar tarea/i,
      })
    );

    expect(onAddTask).not.toHaveBeenCalled();
    expect(alertSpy).toHaveBeenCalled();

    alertSpy.mockRestore();
  });

  it("deshabilita el formulario cuando isLoading es true", () => {
    render(
      <TaskInput
        onAddTask={vi.fn()}
        isLoading={true}
      />
    );

    expect(
      screen.getByPlaceholderText("Ej. Elaborar el proyecto final")
    ).toBeDisabled();

    expect(
      screen.getByRole("button", {
        name: /Agregar tarea/i,
      })
    ).toBeDisabled();
  });

  it("limpia el formulario después de agregar una tarea", async () => {
    const user = userEvent.setup();

    const onAddTask = vi.fn().mockResolvedValue(undefined);

    render(
      <TaskInput
        onAddTask={onAddTask}
        isLoading={false}
      />
    );

    const input = screen.getByPlaceholderText(
      "Ej. Elaborar el proyecto final"
    );

    await user.type(input, "Nueva tarea");

    await user.click(
      screen.getByRole("button", {
        name: /Agregar tarea/i,
      })
    );

    expect(onAddTask).toHaveBeenCalledTimes(1);

    expect(input).toHaveValue("");
  });
});
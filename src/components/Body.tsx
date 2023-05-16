import styles from "./Body.module.css";
import { useState, FormEvent } from "react";

export function Body() {
  const [tasks, setTasks] = useState<string[]>([]); //aqui estou criando uma lista de tarefas
  const [newTasks, setNewTask] = useState(""); // apaga a tarefa digitada anterior

  function handleCreateNewTask(event: FormEvent) {
    // add uma noiva tarefa e deixa o input empty
    event.preventDefault();

    if (newTasks.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTasks]);
      setNewTask("");
    }
  }

  function handleDeleteTask(index: number) {
    // deleta tarefa
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.splice(index, 1);
      return updatedTasks;
    });
  }

  return (
    <div className={styles.fundoDaTela}>
      <h2 className={styles.mensagem}>Vamos adicionar uma nova tarefa ?</h2>
      <form onSubmit={handleCreateNewTask}>
        <input
          className={styles.inputBarra}
          type="text"
          value={newTasks}
          onChange={(event) => setNewTask(event.target.value)}
          placeholder="Digite uma nova tarefa"
        />
        <button type="submit">Adicionar Tarefa</button>
      </form>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task: string, index: number) => (
            <li key={index}>
              {task}
              <button onClick={() => handleDeleteTask(index)}>
                Excluir Tarefa
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma tarefa adicionada ainda.</p>
      )}
    </div>
  );
}

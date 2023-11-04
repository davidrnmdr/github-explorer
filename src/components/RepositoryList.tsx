import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import { Repository } from "./types/repository";

const repository: Repository = {
  name: "unform",
  description: "Forms in React",
  html_url: "https://github.com/unform/unform",
};

// https://api.github.com/orgs/rocketseat/repos

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, [repositories]);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}

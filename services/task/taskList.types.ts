export type TaskProperties = {
  id: number;
  title: string;
  description: string;
  deadline: string;
  difficulty: string;
};

export type TaskPropertiesAPI = {
  id: number;
  titulo: string;
  descricao: string;
  dataFim: string;
  nivelDificuldade: string;
};

export type TaskResponse = TaskPropertiesAPI[];

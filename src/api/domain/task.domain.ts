export type TaskDomain = {
  id: string;
  title: string;
  description: string;
  status: 'TODO' | 'DOING' | 'DONE' | 'ARCHIVED';
};

export type TaskListDomain = TaskDomain[];

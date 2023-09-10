import { ComponentProps } from 'react';
import { useApiTasks } from '../api/hooks/useApiTasks';
import TaskCard from '../components/TaskCard';

export default function TaskList() {
  const { data } = useApiTasks();

  return (
    <div className="flex gap-2">
      <TaskColumn title="TODO" items={data?.TODO || []} />
      <TaskColumn title="DOING" items={data?.DOING || []} />
      <TaskColumn title="DONE" items={data?.DONE || []} />
    </div>
  );
}

type TaskColumnProps = {
  title: string;
  items: ComponentProps<typeof TaskCard>[];
};

function TaskColumn({ items, title }: TaskColumnProps) {
  return (
    <div className="max-w-[500px] w-full">
      <h1>{title}</h1>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <TaskCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

import { useApiTasks } from '../api/hooks/useApiTasks';

export default function TaskList() {
  const { data, isLoading } = useApiTasks();

  return (
    <div>
      {isLoading
        ? 'Loading...'
        : data?.map((t) => <div key={t.id}>{t.title}</div>)}
    </div>
  );
}

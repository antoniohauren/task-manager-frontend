import { UpdateTaskStatusDto } from '../api/dto/update-task-status.dto';
import { useApiArchiveTask } from '../api/hooks/useApiArchiveTask';
import { useApiUpdateTaskStatus } from '../api/hooks/useApiUpdateTaskStatus';
import Button from './Button';

type TaskCardProps = {
  title: string;
  description: string;
  status: string;
  id: string;
  archived?: boolean;
};

export default function TaskCard({
  id,
  description,
  status,
  title,
  archived,
}: TaskCardProps) {
  const { mutate: changeStatus } = useApiUpdateTaskStatus(id);
  const { mutate: archiveTask } = useApiArchiveTask(id);

  function handleUpdateStatus(status: UpdateTaskStatusDto['status']) {
    changeStatus({
      status,
    });
  }

  function handleArchiveTask() {
    archiveTask();
  }

  return (
    <div className="border-2 w-full">
      <div className="flex gap-2 bg-gray-100 items-center p-2">
        <h1 className="text-lg font-semibold w-full">{title}</h1>
        {!archived && (
          <p className="cursor-pointer" onClick={() => handleArchiveTask()}>
            ARCHIVE
          </p>
        )}
      </div>
      <p className="p-2">{description}</p>

      {status === 'TODO' && (
        <div className="flex">
          <Button onClick={() => handleUpdateStatus('DOING')}>TODO</Button>
          <Button onClick={() => handleUpdateStatus('DONE')}>DONE</Button>
        </div>
      )}

      {status === 'DOING' && (
        <div className="flex">
          <Button onClick={() => handleUpdateStatus('TODO')}>TODO</Button>
          <Button onClick={() => handleUpdateStatus('DONE')}>DONE</Button>
        </div>
      )}
    </div>
  );
}

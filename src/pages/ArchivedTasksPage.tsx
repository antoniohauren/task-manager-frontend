import ArchivedTaskList from '../partials/ArchivedTasksList';
import Header from '../partials/Header';

export default function ArchivedTasksPage() {
  return (
    <div>
      <Header />

      <div className="w-full max-w-[1200px] mx-auto mt-4">
        <h1 className="text-4xl font-bold mb-4">Tasks</h1>

        <ArchivedTaskList />
      </div>
    </div>
  );
}

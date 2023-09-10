import Header from './partials/Header';
import TaskList from './partials/TaskList';

function App() {
  return (
    <div>
      <Header />

      <div className="w-full max-w-[1200px] mx-auto mt-4">
        <h1 className="text-4xl font-bold mb-4">Tasks</h1>

        <TaskList />
      </div>
    </div>
  );
}

export default App;

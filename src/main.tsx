import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import SignInPage from './pages/SignInPage.tsx';
import SignUpPage from './pages/SignUpPage.tsx';
import NewTaskPage from './pages/NewTaskPage.tsx';
import ArchivedTasksPage from './pages/ArchivedTasksPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/new-task',
    element: <NewTaskPage />,
  },
  {
    path: '/archived-tasks',
    element: <ArchivedTasksPage />,
  },
  {
    path: '/sign-in',
    element: <SignInPage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);

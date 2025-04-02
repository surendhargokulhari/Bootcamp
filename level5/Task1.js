import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { Edit, Trash } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';



const Button = ({ children, ...props }) => (
  <button {...props} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    {children}
  </button>
);


const Card = ({ children, className }) => (
  <div className={`p-4 rounded-lg shadow ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`flex justify-between items-center ${className}`}>
    {children}
  </div>
);

const TaskManagerApp = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [editTaskId, setEditTaskId] = useState(null);
  const [editTask, setEditTask] = useState({ title: '', description: '' });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (values, { resetForm }) => {
    const newTask = {
      id: uuidv4(),
      title: values.title,
      description: values.description,
      completed: false
    };
    setTasks([...tasks, newTask]);
    resetForm();
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const handleEditTask = (task) => {
    setEditTaskId(task.id);
    setEditTask({ title: task.title, description: task.description });
  };

  const handleUpdateTask = (values) => {
    setTasks(tasks.map(task => task.id === editTaskId ? { ...task, title: values.title, description: values.description } : task));
    setEditTaskId(null);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Task Manager</h1>

      <Formik
        initialValues={{ title: '', description: '' }}
        onSubmit={handleAddTask}
      >
        <Form className="mb-4">
          <Field name="title" placeholder="Task Title" className="border p-2 rounded m-3 w-full mb-2" />
          <Field name="description" placeholder="Task Description" className="border p-2 m-3 rounded w-full mb-2" />
          <Button id="bt" type="submit">Add Task</Button>
        </Form>
      </Formik>

      {tasks.map(task => (
        <Card key={task.id} className={`mb-2 ${task.completed ? 'bg-gray-200' : ''}`}>
          <CardContent>
            {editTaskId === task.id ? (
              <Formik
                initialValues={editTask}
                onSubmit={handleUpdateTask}
              >
                <Form className="flex flex-col w-full">
                  <Field name="title" className="border p-1 mb-1" />
                  <Field name="description" className="border p-1 mb-1" />
                  <Button id="box"  type="submit">Update Task</Button>
                </Form>
              </Formik>
            ) : (
              <>
                <div>
                  <input type="checkbox" checked={task.completed} onChange={() => handleToggleComplete(task.id)} />
                  <span className={task.completed ? 'line-through ml-2' : 'ml-2'}>{task.title}</span>
                  <p className="ml-6 text-sm text-gray-600">{task.description}</p>
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => handleEditTask(task)}><Edit size={16} /></Button>
                  <Button onClick={() => handleDeleteTask(task.id)}><Trash size={16} /></Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TaskManagerApp;

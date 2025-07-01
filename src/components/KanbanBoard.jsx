import { useState, useEffect } from 'react'
import Column from './Column'
import AddTaskForm from './AddTaskForm'
import EditTaskModal from './EditTaskModal'
import { loadTasks, saveTasks } from '../utils/localStorage'
import '../styles/KanbanBoard.css'

const COLUMNS = {
  todo: { id: 'todo', title: 'To Do', color: '#e3f2fd' },
  inProgress: { id: 'inProgress', title: 'In Progress', color: '#fff3e0' },
  completed: { id: 'completed', title: 'Completed', color: '#e8f5e8' }
}

function KanbanBoard() {
  const [tasks, setTasks] = useState(loadTasks())
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingTask, setEditingTask] = useState(null)
  const [draggedTask, setDraggedTask] = useState(null)

  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

  const addTask = (taskData) => {
    const newTask = {
      id: Date.now().toString(),
      ...taskData,
      status: 'todo',
      createdAt: new Date().toISOString()
    }
    setTasks([...tasks, newTask])
    setShowAddForm(false)
  }

  const updateTask = (taskId, updatedData) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, ...updatedData } : task
    ))
    setEditingTask(null)
  }

  const deleteTask = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter(task => task.id !== taskId))
    }
  }

  const moveTask = (taskId, newStatus) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    ))
  }

  const handleDragStart = (task) => {
    setDraggedTask(task)
  }

  const handleDragEnd = () => {
    setDraggedTask(null)
  }

  const handleDrop = (status) => {
    if (draggedTask && draggedTask.status !== status) {
      moveTask(draggedTask.id, status)
    }
    setDraggedTask(null)
  }

  const getTasksByStatus = (status) => {
    return tasks.filter(task => task.status === status)
  }

  return (
    <div className="kanban-board">
      <div className="board-header">
        <button 
          className="add-task-btn"
          onClick={() => setShowAddForm(true)}
        >
          + Add New Task
        </button>
      </div>

      <div className="board-columns">
        {Object.values(COLUMNS).map(column => (
          <Column
            key={column.id}
            column={column}
            tasks={getTasksByStatus(column.id)}
            onTaskEdit={setEditingTask}
            onTaskDelete={deleteTask}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDrop={handleDrop}
            isDragOver={draggedTask && draggedTask.status !== column.id}
          />
        ))}
      </div>

      {showAddForm && (
        <AddTaskForm
          onSubmit={addTask}
          onCancel={() => setShowAddForm(false)}
        />
      )}

      {editingTask && (
        <EditTaskModal
          task={editingTask}
          onSave={updateTask}
          onCancel={() => setEditingTask(null)}
        />
      )}
    </div>
  )
}

export default KanbanBoard
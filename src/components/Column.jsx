import Task from './Task'
import '../styles/Column.css'

function Column({ 
  column, 
  tasks, 
  onTaskEdit, 
  onTaskDelete, 
  onDragStart, 
  onDragEnd, 
  onDrop,
  isDragOver 
}) {
  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    onDrop(column.id)
  }

  return (
    <div 
      className={`column ${isDragOver ? 'drag-over' : ''}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="column-header" style={{ backgroundColor: column.color }}>
        <h3>{column.title}</h3>
        <span className="task-count">{tasks.length}</span>
      </div>
      
      <div className="column-content">
        {tasks.length === 0 ? (
          <div className="empty-column">
            <p>No tasks yet</p>
            <span>Drop tasks here</span>
          </div>
        ) : (
          tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              onEdit={onTaskEdit}
              onDelete={onTaskDelete}
              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Column
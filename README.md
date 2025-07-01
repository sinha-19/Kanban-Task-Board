# Kanban Task Board with React.js

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           KANBAN WORKFLOW DIAGRAM                               │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐      │
│  │    USER     │    │   ACTIONS   │    │   STORAGE   │    │   DISPLAY   │      │
│  └─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘      │
│         │                   │                   │                   │           │
│         ▼                   ▼                   ▼                   ▼           │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐      │
│  │ Click "Add  │───▶│ Open Modal  │───▶│ Save to     │───▶│ Update UI   │      │
│  │ New Task"   │    │ Form        │    │ LocalStorage│    │ Instantly   │      │
│  └─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘      │
│         │                   │                   │                   │           │
│         ▼                   ▼                   ▼                   ▼           │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐      │
│  │ Fill Form:  │───▶│ Validate    │───▶│ Create Task │───▶│ Add to      │      │
│  │ • Title     │    │ Required    │    │ Object with │    │ "To Do"     │      │
│  │ • Description│    │ Fields      │    │ Unique ID   │    │ Column      │      │
│  │ • Priority  │    │             │    │             │    │             │      │
│  └─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘      │
│         │                   │                   │                   │           │
│         ▼                   ▼                   ▼                   ▼           │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐      │
│  │ Drag & Drop │───▶│ Update Task │───▶│ Save New    │───▶│ Move Task   │      │
│  │ Between     │    │ Status      │    │ Status to   │    │ to Target   │      │
│  │ Columns     │    │             │    │ LocalStorage│    │ Column      │      │
│  └─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘      │
│         │                   │                   │                   │           │
│         ▼                   ▼                   ▼                   ▼           │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐      │
│  │ Edit/Delete │───▶│ Show Modal/ │───▶│ Update/     │───▶│ Refresh     │      │
│  │ Task        │    │ Confirmation│    │ Remove from │    │ Display     │      │
│  │             │    │             │    │ LocalStorage│    │             │      │
│  └─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘      │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                        COLUMN STRUCTURE                                 │   │
│  │                                                                         │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                     │   │
│  │  │   TO DO     │  │ IN PROGRESS │  │  COMPLETED  │                     │   │
│  │  │ ┌─────────┐ │  │ ┌─────────┐ │  │ ┌─────────┐ │                     │   │
│  │  │ │ Task 1  │ │  │ │ Task 3  │ │  │ │ Task 5  │ │                     │   │
│  │  │ │ High    │ │  │ │ Medium  │ │  │ │ Low     │ │                     │   │
│  │  │ └─────────┘ │  │ └─────────┘ │  │ └─────────┘ │                     │   │
│  │  │ ┌─────────┐ │  │ ┌─────────┐ │  │ ┌─────────┐ │                     │   │
│  │  │ │ Task 2  │ │  │ │ Task 4  │ │  │ │ Task 6  │ │                     │   │
│  │  │ │ Medium  │ │  │ │ High    │ │  │ │ Medium  │ │                     │   │
│  │  │ └─────────┘ │  │ └─────────┘ │  │ └─────────┘ │                     │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘                     │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## 🚀 Overview

A modern, responsive Kanban Task Board built with **React.js** and **Vite**. This application provides an intuitive drag-and-drop interface for managing tasks across different stages of completion. Perfect for personal productivity, team collaboration, and project management.

## ✨ Key Features

### 🎯 **Core Functionality**
- **📝 Task Management**: Create, edit, and delete tasks with ease
- **🔄 Drag & Drop**: Seamlessly move tasks between columns
- **📊 Three-Column Layout**: To Do → In Progress → Completed
- **⚡ Real-time Updates**: Instant UI updates with persistent storage
- **💾 Local Storage**: Automatic data persistence across browser sessions

### 🎨 **User Experience**
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **🎭 Clean Interface**: Professional, minimalist design with Arial font
- **🌈 Priority System**: Visual priority indicators (High, Medium, Low)
- **⏰ Timestamps**: Track when tasks were created
- **🎪 Smooth Animations**: Polished interactions and transitions

### 🛠️ **Technical Features**
- **⚛️ React Hooks**: Modern functional components with useState and useEffect
- **🏗️ Modular Architecture**: Clean separation of concerns
- **📦 Component-Based**: Reusable and maintainable code structure
- **🎯 Event Handling**: Comprehensive drag-and-drop implementation
- **💻 Cross-Browser**: Compatible with all modern browsers

## 🏗️ Project Structure

```
kanban-task-board/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── AddTaskForm.jsx      # Modal form for creating new tasks
│   │   ├── Column.jsx           # Individual column component
│   │   ├── EditTaskModal.jsx    # Modal form for editing tasks
│   │   ├── KanbanBoard.jsx      # Main board container
│   │   └── Task.jsx             # Individual task card component
│   ├── styles/
│   │   ├── AddTaskForm.css      # Styling for add task modal
│   │   ├── App.css              # Global application styles
│   │   ├── Column.css           # Column-specific styles
│   │   ├── EditTaskModal.css    # Edit modal styles
│   │   ├── KanbanBoard.css      # Main board layout styles
│   │   └── Task.css             # Task card styles
│   ├── utils/
│   │   └── localStorage.js      # Local storage utility functions
│   ├── App.jsx                  # Root application component
│   ├── index.css               # Base CSS styles
│   └── main.jsx                # Application entry point
├── index.html                  # HTML template
├── package.json               # Dependencies and scripts
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (version 14 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kanban-task-board
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 📖 How to Use

### 🆕 **Creating Tasks**
1. Click the **"+ Add New Task"** button
2. Fill in the task details:
   - **Title** (required): Brief description of the task
   - **Description** (optional): Detailed information
   - **Priority**: Choose from High, Medium, or Low
3. Click **"Add Task"** to save

### 🔄 **Moving Tasks**
- **Drag and Drop**: Click and drag any task card to move it between columns
- **Visual Feedback**: Columns highlight when you drag a task over them
- **Auto-Save**: Changes are automatically saved to local storage

### ✏️ **Editing Tasks**
1. Click the **edit button (✏️)** on any task card
2. Modify the task details in the modal
3. Click **"Save Changes"** to update

### 🗑️ **Deleting Tasks**
1. Click the **delete button (🗑️)** on any task card
2. Confirm the deletion in the popup dialog
3. Task is permanently removed

## 🎨 Design Features

### **Color Scheme**
- **Background**: Subtle gradient from light gray to blue-gray
- **Cards**: Clean white background with subtle shadows
- **Priority Indicators**: 
  - 🔴 **High**: Red accent
  - 🟡 **Medium**: Orange accent  
  - 🔵 **Low**: Blue accent

### **Typography**
- **Font Family**: Arial (consistent across all elements)
- **Hierarchy**: Clear font sizes and weights for different content types
- **Readability**: High contrast text for excellent readability

### **Layout**
- **Horizontal Columns**: Side-by-side layout for easy task flow visualization
- **Responsive Grid**: Adapts to different screen sizes
- **Consistent Spacing**: 8px spacing system throughout

## 🔧 Technical Implementation

### **State Management**
- **React Hooks**: Uses `useState` for component state
- **Effect Hooks**: `useEffect` for side effects and data persistence
- **Local Storage**: Automatic saving and loading of task data

### **Drag and Drop**
- **HTML5 Drag API**: Native browser drag-and-drop functionality
- **Event Handlers**: Comprehensive drag event management
- **Visual Feedback**: Real-time UI updates during drag operations

### **Data Structure**
```javascript
{
  id: "unique-timestamp",
  title: "Task Title",
  description: "Optional description",
  priority: "high|medium|low",
  status: "todo|inProgress|completed",
  createdAt: "2024-01-01T12:00:00.000Z"
}
```

## 📱 Responsive Design

- **Desktop**: Full three-column layout with hover effects
- **Tablet**: Optimized spacing and touch-friendly interactions
- **Mobile**: Stacked layout with swipe-friendly drag operations

## 🔮 Future Enhancements

- **🔐 User Authentication**: Multi-user support with personal boards
- **☁️ Cloud Storage**: Sync data across devices
- **🏷️ Tags & Labels**: Categorize tasks with custom tags
- **📅 Due Dates**: Add deadline tracking
- **📈 Analytics**: Task completion statistics and productivity insights
- **🔔 Notifications**: Reminders and deadline alerts
- **🎨 Themes**: Customizable color schemes
- **📤 Export**: Export tasks to various formats (JSON, CSV)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Vite** for the lightning-fast build tool
- **Modern CSS** techniques for responsive design
- **HTML5 Drag and Drop API** for seamless interactions

---

**Built with ❤️ using React.js and Vite**

*Happy task managing! 🎯*
## 🏗️ Project Architecture & Data Flow



✨ Features
Complete Task Management (CRUD): Users can Create, Read, Update (move), and Delete tasks seamlessly.

Unidirectional Data Flow: The application maintains a clean architecture where all task data is centrally managed by the BugTrackerBoard component, ensuring predictable state changes.

Bidirectional Task Workflow: Tasks can be moved forward (e.g., from 'To Do' to 'In Progress') and backward using dynamic buttons, providing flexibility in managing the workflow.

Persistent Filtering and Search:

Live Search: Tasks are filtered instantly as the user types, matching text against both the Title and Description fields.

Status Filtering: Tasks are automatically grouped into distinct Status Columns ('To Do', 'In Progress', 'Done').

Dynamic UI/UX:

Conditional Form Display: The task submission form is hidden by default and can be toggled via the 'Add New Task' button, keeping the primary board view clean and focused.

Priority Visuals: Task cards display color-coded tags (High, Medium, Low) for immediate prioritization.

Clean Component Structure: The application uses dedicated components for the header, form, columns, and cards, optimizing code readability and maintenance.

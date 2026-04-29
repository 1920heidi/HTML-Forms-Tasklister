document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log("DOM loaded successfully!");
  
  // Step 2: Select form
  const form = document.getElementById("create-task-form");
  console.log("Form element found:", form);

  // Add submit event listener
  form.addEventListener("submit", (event) => {
    console.log("Form submitted!");
    
    // Prevent page refresh
    event.preventDefault();

    // Step 3: Get form data - access input directly
    const taskInputElement = document.getElementById("new-task-description");
    const taskInput = taskInputElement.value;
    console.log("Task inputvalue:", taskInput);

    // Validate input is not empty
    if (taskInput.trim() === "") {
      console.log("Empty input");
      return;
    }

    // Call function to build task
    buildToDo(taskInput);

    // Optional: clear input field
    form.reset();
    console.log("Form reset after task creation");
  });
});

// Step 4: Build and display task
function buildToDo(task) {
  console.log("Building todo with task:", task);
  
  // Select task list
  const taskList = document.getElementById("tasks");
  console.log("Task list element found:", taskList);

  // Create new list item
  const li = document.createElement("li");
  console.log("Created new list li element");

  // Add text
  li.textContent = task;
  console.log("Added text content to list li:", task);

  // Append to list
  taskList.appendChild(li);
  console.log("Task added successfully to list!");
}

// Export for testing (only in Node.js environment)
if (typeof window === 'undefined' && typeof module !== 'undefined' && module.exports) {
  module.exports = {
    buildToDo
  };
}

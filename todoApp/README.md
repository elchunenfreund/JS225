The application is structured around three classes:

Todo: Represents a single task.

TodoList: Manages the collection of todos, handling ID generation and ensuring data integrity by returning copies of data rather than references, It also handles the data validation.

TodoManager: Acts as the client interface to query and filter the list.

** Implementation Details **
Encapsulation
  All data properties (id, title, completed, month, year, description) are stored as private fields (e.g., #title) to prevent direct external modification.

Data access is provided strictly through getters and specific setter methods (markDone, updateTitle, etc.).

Data Integrity
  The TodoList class never exposes the internal array of Todo objects.

Methods like allTodos() or findTodoById() return copies of the objects. This ensures that modifying a returned object does not corrupt the internal state of the application.

** Assumptions & Design Decisions **
Date Handling & Categories
  Data Type:
  month and year are stored as strings.

  Case Sensitivity:
  The filtering logic uses strict equality (===). Therefore, queries are case-sensitive. So that a query for month 'jan' will not match a todo with month 'Jan'.

  Empty Values:
  An empty string ('') is treated as a valid date, assuming it was intentially left unset.

  Querying allTodosWithinMonthYear('', '') will strictly return todos where both the month and year are explicitly empty.

Validation
  Required Fields: title and description must be non-empty strings. Attempting to set them to empty strings or other data types will throw an Error.

  Optional Fields: month and year must be strings, but they are allowed to be empty as stated above.

ID Generation
  IDs are automatically generated integers managed internally by the TodoList class, starting at 0 and incrementing theirafter.

** Testing Strategy **
  The test suite included in the code verifies the following:

Input Validation:
  Ensures the application throws errors when initializing or updating todos with invalid data types, or empty required fields.

Collection Integrity:
  Verifies that mutating a todo object returned by findTodoById does not change the original object inside the TodoList.

State Management:
  Tests the markDone, markUndone, and deleteTodo functionality.

Filtering Logic:

Verifies allTodosWithinMonthYear correctly filters based on strict string matching.

Edge Case:
  Specifically tests that passing empty strings ('', '') correctly retrieves items with unset dates.
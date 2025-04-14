export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees).flat(); // Get all employees from the report

  return employees[Symbol.iterator](); // Return an iterator
}

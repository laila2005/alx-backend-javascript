export default function iterateThroughObject(reportWithIterator) {
  const employees = [...reportWithIterator]; // Convert iterator to an array
  return employees.join(' | '); // Join all employee names with " | "
}

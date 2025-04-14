export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList }, // Spread the employeesList into allEmployees
    getNumberOfDepartments: function () {
      return Object.keys(employeesList).length; // Returns the number of departments
    },
  };
}

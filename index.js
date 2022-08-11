const employee = {};

function beforeEach(){
    for (const key in employee) {
        delete employee[key];

        employee.name = "Sam";
      }
}

employee = updateEmployeeWithKeyAndValue(
    employee,
    "streetAddress",
    "11 Broadway"
)


function updateEmployeeWithKeyAndValue(employee, streetAddress, value = "11 Broadway"){
     const newObject = {...employee}
     newObject[streetAddress] = "11 Broadway"

     return newObject;
    
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value = "12 Broadway"){
    employee.streetAddress = "12 Broadway";

    return employee;
}


function deleteFromEmployeeByKey(employee, name){
    let newEmployee = {...employee}
    
    delete newEmployee.name;

    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee.name;

    return employee;
}
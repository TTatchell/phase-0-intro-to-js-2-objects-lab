const employee = {
    name: "Tim",
    streetAddress: "McDougall Avenue",
}

function updateEmployeeWithKeyAndValue(emp, key, value) {
    const newObj = {...emp};
    newObj[key] = value;
    return newObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(emp, key, value) {
    emp[key] = value;
    return emp
}

function deleteFromEmployeeByKey(emp, key) {
    const newEmp = {...emp};
    delete newEmp[key];
    return newEmp

}

function destructivelyDeleteFromEmployeeByKey(emp, key) {
    delete emp[key];
    return emp

}
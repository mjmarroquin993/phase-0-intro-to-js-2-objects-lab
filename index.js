const employee = {
    name: 'marisa',
    streetAddress: '11 broadway',
}
function updateEmployeeWithKeyAndValue (obj, key, value) {
    const employeeName = {...obj, [key]: value};
    return employeeName
}
function destructivelyUpdateEmployeeWithKeyAndValue (obj, key, value) {
    obj[key] = value;
    return obj
}
function deleteFromEmployeeByKey (obj, key) {
    const copyObj = {...obj}
    delete copyObj[key]
    return copyObj
}
function destructivelyDeleteFromEmployeeByKey (obj, key) {
    delete obj[key]
    return obj
}
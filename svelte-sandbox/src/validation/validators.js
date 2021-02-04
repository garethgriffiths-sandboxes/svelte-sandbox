function requiredValidator(fieldName) {
    return function required(value) {
        return (value !== undefined && value !== null && value !== '') || fieldName + ' is required'
    }
}

export {
    requiredValidator
}
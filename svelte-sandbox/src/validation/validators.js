function requiredValidator() {
    return function required(value) {
        return (value !== undefined && value !== null && value !== '') || 'This is required'
    }
}

export {
    requiredValidator
}
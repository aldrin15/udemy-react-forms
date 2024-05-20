const isEmail = (value: string) => {
    return value.includes('@')
}

const isNotEmpty = (value: string) => {
    return value.trim() !== ''
}

const hasMinLength = (value: string, minLength: number) => {
    return value.length >= minLength
}

const isEqualsToOtherValue = (value: string, otherValue: string) => {
    return value === otherValue
}

export { isEmail, isNotEmpty, hasMinLength, isEqualsToOtherValue }

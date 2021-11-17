namespace App {
// Validation logic 
export interface Validatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
}
// if the required check is flagged, we check is the value is empty etc.
export function validate(validatableInput: Validatable) {
    let isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    if (
        validatableInput.minLength != null && 
        typeof validatableInput.value === 'string'
        ) {
        isValid = 
        isValid && validatableInput.value.length > validatableInput.minLength;
    }
    if (
        validatableInput.maxLength != null &&
        typeof validatableInput.value === 'string'
    ) {
        isValid = 
        isValid && validatableInput.value.length < validatableInput.maxLength;
    }
    //checking the final min/max variables of the interface
    if (validatableInput.min != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value > validatableInput.min;
    }
    if (validatableInput.max != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value < validatableInput.max;
    }
    return isValid;
}
}

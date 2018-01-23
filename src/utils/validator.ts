export class Validator {

    public static isNotEmpty(subject: any, message?: string) {
        if (Number.isFinite(subject) && subject !== 0)
            return;
        
        if (!subject || subject.length == 0 || Object.keys(subject).length === 0)
            throw new Error(message || "A not empty value was expected!");
    }

    public static arrayIsGreaterThen(array: any[], count: number, message?: string) {
        if (array.length < count)
            throw new Error(message || "Array too short");
    }

}

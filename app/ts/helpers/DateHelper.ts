class DateHelper {

    constructor() { }

    static dateToText(data: Date) {
        var day = data.getDay();
        var month = (data.getMonth() + 1);
        var year = data.getFullYear();
        return `${day}/${month}/${year}`;
    }

    static textToDate(data: String) {
        return new Date(data.replace(/-/g, ','));
    }
}
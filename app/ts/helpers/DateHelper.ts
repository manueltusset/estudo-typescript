class DateHelper {

    constructor() { }

    static dateToText(data: Date): String {
        var day = data.getDate();
        var month = (data.getMonth() + 1);
        var year = data.getFullYear();
        return `${day}/${month}/${year}`;
    }

    static textToDate(data: String): Date {
        return new Date(data.replace(/-/g, ','));
    }
}
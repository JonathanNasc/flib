export class Random {
    public static int(max = 99999): number {
        return Math.floor(Math.random() * Math.floor(max));
    }

    public static string(options: Array<string>): string {
        return options[Random.int(options.length)];
    }
}
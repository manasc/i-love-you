export class Timer {
    private timer: NodeJS.Timeout;
    private interval: NodeJS.Timeout;

    public delay: number;

    constructor(delay: number = 3000) {
        this.delay = delay;
    }

    start(callback: () => void) {
        this.reset();

        this.timer = setTimeout(() => {
            callback();
        }, this.delay);
    }

    reset() {
        clearTimeout(this.timer);
    }
}

const refs = {
    daysEl: document.querySelector('[data-value="days"]'),
     hoursEl: document.querySelector('[data-value="hours"]'),
     minsEl: document.querySelector('[data-value="mins"]'),
     secsEl: document.querySelector('[data-value="secs"]'),
}
const padTime = num => String(num).padStart(2, '0');

class CountdownTimer {
    constructor({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
    }      

    findDate(time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);
        return {days, hours, mins, secs};
    }

    countDelta() {
        const currentDate = new Date();
        let time = this.targetDate - currentDate;       

        const {days, hours, mins, secs} = this.findDate(time);
 
        refs.daysEl.innerHTML = padTime(days);
        refs.hoursEl.innerHTML = padTime(hours);
        refs.minsEl.innerHTML = padTime(mins);
        refs.secsEl.innerHTML = padTime(secs);
    }

    start() {
       this.countDelta();        
        setInterval(() =>  {
        this.countDelta();
        }, 1000)        
    }
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021'),
});

timer.start()

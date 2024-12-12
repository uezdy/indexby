export const getNickName = (email?: string) => {
    let emailToParse = '';
    if (email) {
        emailToParse = email;
    } else {
        emailToParse = localStorage.getItem('user');
    }

    const [nickname] = emailToParse ? emailToParse.split('@') : [];
    return nickname ? nickname : 'anonymous';
};

export function throttle(func: Function, ms: number) {

    let isThrottled = false;
    let savedArgs: any;
    let savedThis: any;

    function wrapper() {

        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments); // (1)

        isThrottled = true;

        setTimeout(function() {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}

export function plural(number: number, titles: Array<string> = ['год', 'года', 'лет']) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

export function copyToClipboard(data: string) {
    try {
        navigator.clipboard.writeText(data.trim());
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

export const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
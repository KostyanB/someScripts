class Validator {
    constructor({selector, pattern = {}, method}) {
        this.selector = selector;
        this.pattern = pattern;
        this.method = method;
        this.error = new Set();
    }

    init() {
        this.setPattern();
        document.body.addEventListener('change', e => {
            let form = e.target.closest(this.selector);
            if (e.target.closest(this.selector)) {
                this.checkIt(e.target);
            } else {
                return;
            }
            form.addEventListener('submit', e => {
                if (this.error.size) { // запрет отправки формы если есть ошибки
                    e.preventDefault();
                }
            });
        });
    }

    isValid(elem) {
        const validatorMethod = {
            notEmpty(elem) {
               if (elem.value.trim() === '') {
                   return false;
               }
               return true;
            },
            pattern(elem, pattern) {
                const testElem = pattern.test(elem.value);
                return testElem;
            }
        };

        if (this.method) { // Проверка переданы ли паттерны пользователем
            const method = this.method[elem.name];
            if (method) {
                return method.every(item => validatorMethod[item[0]](elem, this.pattern[item[1]]));
            }
        } else {
            console.warn('Передайте идентификаторы полей ввода и методы проверки этих полей');
        }
        return true;
    }

    checkIt(event) {
        if (this.isValid(event)) {
            this.showSuccess(event);
            this.error.delete(event);
        } else {
            this.showError(event);
            this.error.add(event);
        }
    }

    showError(elem) {
        elem.style.border = '3px solid #fe193f';
        elem.classList.remove('success');
        elem.classList.add('error');
    }

    showSuccess(elem) {
        elem.style.border = '3px solid #19fe52';
        elem.classList.remove('error');
        elem.classList.add('success');

    }

    setPattern() {
        this.pattern.phone = this.pattern.phone ? this.pattern.phone : /^\+?[78]([-()\s]*\d){10}$/;
        this.pattern.email = this.pattern.email ? this.pattern.email : /^\w+@\w+\.\w{2,}$/;
    }
}
(() => {

    // Problema: Herencia profunda y violación del principio de responsabilidad única.

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    // InputAttributes hereda de HtmlElement
    class InputAttributes{
        constructor(
            public value: string,
            public placeholder: string,
        ) {

        }
    }

    // InputEvents hereda de InputAttributes (que a su vez hereda de HtmlElement)
    class InputEvents{
        
        constructor() {}

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    class InputElement {
        public htmlElement: HtmlElement;
        public inputAttributes: InputAttributes;
        public inputEvents: InputEvents;

        constructor(value: string, placeholder: string, id: string) {
            this.htmlElement = new HtmlElement(id, 'input');
            this.inputAttributes = new InputAttributes(value, placeholder);
            this.inputEvents = new InputEvents();
        }
    }

    // Instanciábamos la última clase de la cadena
    const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

    console.log({ nameField });

})();
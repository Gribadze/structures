const Stack = (function(EventEmitterClass) {
    class Stack extends EventEmitterClass {
        constructor() {
            super();
            this._values = [];
        }

        push(value) {
            this._values.push(value);
        }

        pop() {
            return this._values.pop();
        }
    }

    return Stack;
})(EventEmitter);

const StackNodeUI = (function (docObj) {
    class StackNodeUI {
        static createNodeUI(...props) {
            return new StackNodeUI(...props);
        }

        constructor(parentNode, value) {
            this.nodeEl = docObj.createElement('div');
            this.nodeEl.className = 'stack-node-ui';
            this.nodeEl.innerText = value;
            parentNode.append(this.nodeEl);
        }
    }

    return StackNodeUI;
})(document);
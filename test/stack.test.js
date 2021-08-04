// Stack DS class replication
class Stack {

    top = -1;
    items = {};

    constructor() {}

    push(val) {
        this.items[this.top] = val;
    }

    peek() {
        return this.items[this.top];
    }

    pop() {
        this.top--;
    }

}

// Organizing a set of type of tests
describe('Stack Tests', () => {

    // Arrange
    let stack;

    // beforeEach(() => {
    //     stack = new Stack();
    // })

    beforeAll(() => {
        stack = new Stack();
    })
    
    // test case
    it('should have initial properties', () => {
        expect(stack.top).toBe(-1); // checks the reference
        expect(stack.items).toEqual({}); // checks the value
    })

    it('should have item on top', () => {
        // Act
        stack.top = stack.top + 1;
        stack.push('🥑');
        // Assert
        expect(stack.top).toBe(0);
        expect(stack.peek()).toBe('🥑');
    })

    it('should remove item from top', () => {
        stack.pop();
        expect(stack.top).toBe(-1);
    })

    it.todo('should be a todo');

})
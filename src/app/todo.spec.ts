import {Todo} from './todo';

describe('Todo', () => {
    it('should create an instance', () => {
        expect(new Todo()).toBeTruthy();
    });
    it('should accept values in the constructor', () => {
        let todo = new Todo({
            title: 'Test task',
            complete: true
        });
        expect(todo.title).toEqual('Test task');
        expect(todo.complete).toEqual(true);
    });

});

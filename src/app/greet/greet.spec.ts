import { greet } from './greet';

describe('addition', () =>{ //great suit
    it('should be equal to Hi : <name> good day.', () => {
        expect(greet('arceogc')).toEqual('Hi : ' + 'arceogc' + ' good day.');
    })

    it('should include the <name> in the message', () => {
        expect(greet('arceogc')).toContain('arceogc');
    })

    it('should include the "Hi" in the message', () => {
        expect(greet('arceogc')).toContain('Hi');
    })

    it('should include the "good day" in the message', () => {
        expect(greet('arceogc')).toContain('good day');
    })

    it('should include the "." in the message', () => {
        expect(greet('arceogc')).toContain('.');
    })
});
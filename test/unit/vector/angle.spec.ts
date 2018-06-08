import { angle } from '../../../src/vector/angle';
import { Vector } from '../../../src/vector/Vector';

describe('vector', (): void => {
    describe('angle', (): void => {
        it('add two vectors and return a new vector object', (): void => {
            expect(angle({x: 0, y: 1})).toBe(Math.PI / 2);
            expect(angle({x: 0, y: 0})).toBe(0);
            expect(angle({x: 1, y: 0})).toBe(0);
            expect(angle({x: 1, y: 1})).toBe(Math.PI / 4);
        });
    });
});

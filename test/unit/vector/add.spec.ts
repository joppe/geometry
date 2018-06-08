import { add } from '../../../src/vector/add';
import { Vector } from '../../../src/vector/Vector';

describe('vector', (): void => {
    describe('add', (): void => {
        it('add two vectors and return a new vector object', (): void => {
            const a: Vector = {
                x: 0,
                y: 12
            };
            const b: Vector = {
                x: -56,
                y: 234
            };
            const c: Vector = add(a, b);

            expect(c.x).toBe(-56);
            expect(c.y).toBe(246);
        });
    });
});

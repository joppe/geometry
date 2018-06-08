import { dotProduct } from '../../../src/vector/dotProduct';
import { Vector } from '../../../src/vector/Vector';

describe('vector', (): void => {
    describe('dotProduct', (): void => {
        it('calculate the dot product of two vectors', (): void => {
            const a: Vector = {
                x: 0,
                y: 10
            };
            const b: Vector = {
                x: 10,
                y: 10
            };
            const d: number = dotProduct(a, b);

            expect(d).toBe(100);
        });
    });
});

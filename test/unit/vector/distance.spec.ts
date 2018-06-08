import { distance } from '../../../src/vector/distance';
import { Vector } from '../../../src/vector/Vector';

describe('vector', (): void => {
    describe('distance', (): void => {
        it('calculate the distance between two vectors', (): void => {
            const a: Vector = {
                x: 0,
                y: 10
            };
            const b: Vector = {
                x: 10,
                y: 10
            };
            const d: number = distance(a, b);

            expect(d).toBe(10);
        });
    });
});

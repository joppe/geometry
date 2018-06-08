import { unit } from '../../../src/vector/unit';
import { Vector } from '../../../src/vector/Vector';

describe('vector', (): void => {
    describe('unit', (): void => {
        it('create a unit vector of a given vector', (): void => {
            const a: Vector = {
                x: 0,
                y: 12
            };
            const b: Vector = {
                x: -56,
                y: 234
            };
            const aa: Vector = unit(a);
            const bb: Vector = unit(b);

            expect(aa.x).toBe(0);
            expect(aa.y).toBe(1);

            expect(bb.x).toBe(-0.23274413737629865);
            expect(bb.y).toBe(0.9725380026081051);
        });
    });
});

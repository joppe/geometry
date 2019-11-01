import { Angle } from '@apestaartje/geometry/angle/Angle';
import { clone } from '@apestaartje/geometry/angle/clone';

describe('angle', (): void => {
    describe('clone', (): void => {
        it('create a clone of an angle object', (): void => {
            const a: Angle = {
                radians: Math.PI / 2
            };
            const c: Angle = clone(a);

            expect(c.radians).toBe(a.radians);
            expect(c).not.toBe(a);
        });
    });
});

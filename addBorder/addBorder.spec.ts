import { addBorder } from './addBorder';

describe(addBorder.name, () => {
    it('Test 1', () => {
        // arrange
        const data = ['abc', 'ded'];

        // act
        const response = addBorder(data);
        console.log('werwerew', response);

        // assert
        expect(response).toEqual([
            "*****",
            "*abc*",
            "*ded*",
            "*****"
        ]);
    });
});

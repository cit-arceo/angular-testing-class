import { getCurrencies } from './getCurrencies';

describe('curriencies', () => {//currencies suite
    it('should return  the supported currencies', () =>{
        //Arranging
        let result;
        //Act
        result = getCurrencies();
        //Assert
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    })
})
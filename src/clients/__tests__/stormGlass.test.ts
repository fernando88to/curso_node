import {StormGlass} from '@src/clients/stormGlass';
import axios from 'axios';
import stormglass_weather_3_hours from '@test/fixtures/stormglass_weather_3_hours.json';
import stormglass_normalized_response_3_hours from '@test/fixtures/stormglass_normalized_response_3_hours.json';

jest.mock('axios');

describe('StormGlass  client',()=>{
    it('should return normalized forecast the stormglass service', async ()=>{
        const lat = -33.792726;
        const lg = 151.289824;

        axios.get = jest.fn().mockResolvedValue(stormglass_weather_3_hours);

        const stormGlass = new StormGlass(axios);
        const response = await stormGlass.fetchPoints(lat, lg);
        expect(response).toEqual(stormglass_normalized_response_3_hours);
    });
});
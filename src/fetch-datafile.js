
import cacheStorage from './fetch-cache-storage';

export default function FetchDataFile(optimizely, id, url) {
    const cache = cacheStorage(url.replace(/[^a-zA-Z0-9]/g, '_'));

    function parser(datafile) {
        const optimizelyClientInstance = optimizely.createInstance({ datafile: datafile });
        const variation = optimizelyClientInstance.activate('Exp_PS_Number_of_Cards', id);
        cache.set('datafile', datafile);
        return {
            datafile: datafile,
            variation: variation
        };
    }

    const datafile = cache.get('datafile');

    if(datafile) {
        return Promise.resolve(parser(datafile));
    }

    return fetch(url)
        .then(function response(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(parser);
}

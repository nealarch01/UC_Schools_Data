import axios from 'axios';
import { writeFileSync } from 'fs';
import config from './config.json';
import uc_school_lookup_data from './UCs/uc_lookup_data.json';

async function getCaliforniaColleges_UC(): Promise<void> {
    try {
        uc_school_lookup_data.forEach(async (element: any) => {
            const fields: string = `school.name=${element.uri_lookup}`
            const url: string = `https://api.data.gov/ed/collegescorecard/v1/schools?${fields}&api_key=${config.API_KEY}`;
            // console.log(element.alias);
            // console.log(element.uri_lookup);
            const response = await axios.get(url);
            writeDataToFile(`./UCs/ca_colleges_${element.alias}.json`, JSON.stringify(response.data, null, 4));
        });
    } catch (err) {
        // console.log(err); // uncomment this to view error message
        console.log('There was an error getting UC Colleges');
    }
}

function writeDataToFile(filename: string, query_data: string): void {
    writeFileSync(`./${filename}`, query_data); // write to current directory of index.ts
}

async function main(): Promise<void> {
    await getCaliforniaColleges_UC();
}

main();
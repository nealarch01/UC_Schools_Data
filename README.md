# UC_Schools_Data
Getting data of each UC school saved in json format
To run index.ts you will need to have TypeScript and ts-node installed


run command: ``` ts-node index.ts ``` \n
alternatively: ``` tsc index.ts; node index.js```

**You need to have a config.json file in your local directory**
My formatting for config.json:
```
{
  "API_KEY": "your_api_key"
}
```

Link to request api key: https://collegescorecard.ed.gov/data/documentation/
Link to documentation: https://github.com/RTICWDT/open-data-maker/blob/master/API.md

Sample data:
```
 "school": {
  "zip": "92093",
  "city": "La Jolla",
  "name": "University of California-San Diego",
  "alias": "UCSD  UC San Diego",
  "state": "CA",
 }
"program_percentage": {
  "legal": 0,
  "health": 0.0289,
  "english": 0.0079,
  "history": 0.0064,
  "library": 0,
  "computer": 0.054,
  "language": 0.0054,
  "military": 0,
  "education": 0.0008,
  "resources": 0.0064,
  "biological": 0.213,
  "humanities": 0,
  "psychology": 0.0492,
  ...
 "programs": {
    "cip_4_digit": [
       {
            "code": "1107",
            "title": "Computer Science.",
            "ope6_id": "001317",
            "unit_id": 110680,
            "school": {
                "name": "University of California-San Diego",
                "type": "Public",
                "main_campus": 1
            },
            "credential": {
                "level": 3,
                "title": "Bachelors Degree"
            },
            "counts": {
                "ipeds_awards1": 542,
                "ipeds_awards2": 412
            },
            "repayment": {...}
            ...
       }
    ]
  }
},
```

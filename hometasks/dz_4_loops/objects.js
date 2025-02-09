const company = {
    name: "Pro Nice",
    amountOfEmployees: 1000,
    workers: [
        {
            name: "John",
            surname: "Moon",
            age: 30,
            gender: "male",
            contacts: 3456543245,
            languages: {
                programLanguage: {
                    java: 2,
                    python: 2,
                    js: 2,
                    pascal: 1
                },
                speaking: {
                    english: "fluent",
                    ukrainian: "B1",
                    portugal: "A1"
                }
            },
            personDetails: function () {
                console.log(this.name);
                console.log(this.surname);
                console.log(this.age);
                console.log(this.gender);
                console.log(this.contacts);
                console.log(this.languages);
            }
        },
        {
            name: "Clark",
            surname: "Kent",
            age: 35,
            gender: "male",
            contacts: 3459943145,
            languages: {
                programLanguage: {
                    java: 3,
                    js: 2
                },
                speaking: {
                    english: "native",
                    ukrainian: "B1",
                    chinese: "A1"
                }
            },
            personDetails: function () {
                console.log(this.name);
                console.log(this.surname);
                console.log(this.age);
                console.log(this.gender);
                console.log(this.contacts);
                console.log(this.languages);
            }
        },
        {
            name: "Harley",
            surname: "Quinn",
            age: 32,
            gender: "female",
            contacts: 3009943100,
            languages: {
                programLanguage: {
                    python: 3,
                    js: 3
                },
                speaking: {
                    english: "native",
                    ukrainian: "C1",
                    french: "C1"
                }
            },
            personDetails: function () {
                console.log(this.name);
                console.log(this.surname);
                console.log(this.age);
                console.log(this.gender);
                console.log(this.contacts);
                console.log(this.languages);
            }
        }
    ],
    companyWorkersDetails: function () {
        this.workers.forEach(worker => worker.personDetails());
    }

};

company.companyWorkersDetails();



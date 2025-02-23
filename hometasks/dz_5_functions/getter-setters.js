const company = {
    _company_name: "Pro Nice",
    _amountOfEmployees: 1000,
    _city: "New York",
    _contactInfo: {
        _email: "pro_nice@pronice.com",
        _phoneNumber: 3456776546,
        _socialMediaAcc: "@pro_niceNY"
    },

    get companyName() {
        return this._company_name;
    },
    get amountOfEmployees() {
        return this._amountOfEmployees;
    },
    get city() {
        return this._city;
    },

    get contactInfo() {
        return `Email: ${this._contactInfo._email}, Phone: ${this._contactInfo._phoneNumber}, Social Media: ${this._contactInfo._socialMediaAcc}`;
    },
    set companyName(name) {
        this._company_name = name;
    },
    set amountOfEmployees(amount) {
        this._amountOfEmployees = amount;
    },
    set city(cityName) {
        this._city = cityName;
    },
    /**
     * @param {string} email
     */
    set email(email) {
        this._contactInfo._email = email;
    },
    showAllCompanyInfo() {
        console.log("Company name:" + this._company_name);
        console.log("Amount of employees: " + this._amountOfEmployees);
        console.log("Company location: " + this._city);
        console.log("Company email: " + this._contactInfo._email);
        console.log("Company phone number: " + this._contactInfo._phoneNumber);
        console.log("Company socialMediaAcc: " + this._contactInfo._socialMediaAcc);
    }

};

console.log("Company name is: " + company.companyName);
console.log("Amount of employees: " + company.amountOfEmployees);
console.log("Company location: " + company.city);
console.log(company.contactInfo);
company.amountOfEmployees = 900;
company.email = "pro_nice@gmail.com";
console.log("Amount of employees: " + company.amountOfEmployees);
console.log("------------------------------");
company.showAllCompanyInfo();


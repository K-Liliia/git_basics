const company = {
    name: "Pro Nice",
    amountOfEmployees: 1000,
    city: "New York",
    contactInfo: {
        email: "pro_nice@pronice.com",
        phoneNumber: 3456776546,
        socialMediaAcc: "@pro_niceNY"
    },

    getCompanyName() {
        return this.name;
    },
    getAmountOfEmployees() {
        return this.amountOfEmployees;
    },
    getCity() {
        return this.city;
    },

    getContactInfo() {
        return `Email: ${this.contactInfo.email}, Phone: ${this.contactInfo.phoneNumber}, Social Media: ${this.contactInfo.socialMediaAcc}`;
    },
    setCompanyName(name) {
        return this.name = name;
    },
    setAmountOfEmployees(amount) {
        return this.amountOfEmployees = amount;
    },
    setCity(cityName) {
        return this.city = cityName;
    },
    setEmail(email) {
        return this.contactInfo.email = email;
    },
    setContactInfo(email, phoneNumber, socialMediaAcc) {
        return this.contactInfo.email = email, this.contactInfo.phoneNumber = phoneNumber, this.contactInfo.socialMediaAcc = socialMediaAcc;
    },
    showAllCompanyInfo() {
        console.log("Company name:" + this.name);
        console.log("Amount of employees: " + this.amountOfEmployees);
        console.log("Company location: " + this.city);
        console.log("Company email: " + this.contactInfo.email);
        console.log("Company phone number: " + this.contactInfo.phoneNumber);
        console.log("Company socialMediaAcc: " + this.contactInfo.socialMediaAcc);
    }

};

console.log("Company name is: " + company.getCompanyName());
console.log("Amount of employees: " + company.getAmountOfEmployees());
console.log("Company location: " + company.getCity());
console.log(company.getContactInfo());
company.setAmountOfEmployees(900);
console.log("Amount of employees: " + company.getAmountOfEmployees());
company.setEmail("pro_nice2025@pronice.com");
console.log(company.getContactInfo());
console.log("------------------------------");
company.showAllCompanyInfo();


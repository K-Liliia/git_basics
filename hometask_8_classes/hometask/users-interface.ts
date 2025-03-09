export interface Users {
    users: User[];
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export async function getJSON(): Promise<Users> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error('Response is not received, please check url');
    }
    const json = await response.json();
    return { users: json };
}

(async () => {
    const userData = await getJSON();
    console.log(userData);
})();

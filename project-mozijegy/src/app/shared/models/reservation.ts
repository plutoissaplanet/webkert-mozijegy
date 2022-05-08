export interface Reservation{
    id: string;
    movies: string;
    email: string;
    phonenumber: number;
    passcode: string;
    name: {
        firstname: string;
        lastname: string;
    }

} 
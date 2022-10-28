export interface UserDTO {
    name: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    typeNit: string;
    nit: string;
}

export interface UserResponse extends Omit<UserDTO, 'password' | 'lastname' | 'phone' | 'typeNit' | 'nit'> {
    id: string;
}
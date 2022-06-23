export type LoginProps={
    username:string,
    password:string
}
export type LoginProps3 = {
	username: string|null;
	password: string|null;
};
export type LoginProps1 = {
user:string|null
users:LoginProps2[]
};
export type LoginProps2={
    phonenumber:string,
    username:string,
    email:string,
    password:string
}
export type Reset1={
    email:string,
    password:string,
    password1:string
}
export type Menu={
    name:string,
    link:string,
    src:string

}
export type Images1={
    images:string[]
}
export type Item = {
	image: string;
	title: string;
	description: string;
	price: number;
	discount: number;
	category: string;
	id: number;
	qty: number;
	amount: number;
};
export type Card1={
    card_number:string,
    cvv:string,
    code:string
}
export type Profile1 = {
	email: string;
	username: string;
	phonenumber: string;
};


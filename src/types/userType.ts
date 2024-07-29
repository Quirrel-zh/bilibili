// src/types/userType.ts
export interface userType {
	readonly id: number
	img: string
	title: string
	subscribe: string
	upName: string
	date: string
}

export interface dataType {
	list: userType[]
}

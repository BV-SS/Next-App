// declare the type
export type Tag = 'Home' | 'Business' | 'Personal';

export interface Note {
    _id : number,
    title: string,
    content: string,
    created_at:string,
    tag:Tag
}

export interface Contact{
    id: number,
    name: string,
    designation: string,
    linkedIn: string,
    github: string,
    avatar: string,
    bio: string,
    address: string
}
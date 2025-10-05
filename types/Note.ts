// declare the type
type Tag = 'Home' | 'Business' | 'Personal';

export interface Note {
    id : number,
    title: string,
    content: string,
    created_at:string,
    tag:Tag
}
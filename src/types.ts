export type TCharacter = {
    name: string,
    heigth : string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: EGender
    url: string,
}

export type TCharacterResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: TCharacter[];
  }

export type TFilms = {
    title: string,
    producer: string,
    release_date: string

}

export enum EGender {
    MALE = 'male',
    FEMALE = 'female',
    UNKNOWN = 'n/a'
}
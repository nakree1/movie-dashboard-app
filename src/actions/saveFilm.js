import {filmDataSave} from "./actions";

export default function saveFilm(data) {
    const obj = {
        id: data.id,
        title: data.title,
        imageLink: data.imageLink
    }
    return filmDataSave(obj)
}
import { atom } from "recoil";

export const aiConfigState = atom({
    key: 'aiConfigState',
    default: { model:'',apiKey:'' },
});
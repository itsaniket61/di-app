import { Dashboard } from "@/interfaces/Dashboard";
import { atom } from "recoil";

export const dashboardState = atom<Dashboard>({
    key: 'dashboardState',
    default: {id:'',widgets:[],title:'',editMode:false},
});
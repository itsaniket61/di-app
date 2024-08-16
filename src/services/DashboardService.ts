import { randomUUID } from "crypto"

export class DashboardService {
    createDashboard = (name:string, description:string, datasource:string):Dashboard => {
        const dashboardId:string = randomUUID();
        const layout:DashboardLayout = {rows:[]};
        return {id:dashboardId,name,description,datasource,layout};
    }
}
class DashboardUtil {
    static async createDashboard(name:string,description:string,datasource:string):Promise<Dashboard>{
        const req = await fetch('/api/workbook',{
            method: 'POST',
            body: JSON.stringify({name,description,datasource})
        });
        return await req.json();
    }
}
import { DashboardService } from "@/services/DashboardService"
import { writeFile } from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

interface DashboardRequest { name: string; description: string; datasource: string; }

export class DashboardController {
    createDashboard = async (request: NextRequest): Promise<NextResponse<Dashboard>> => {
        const { name, description, datasource } = await request.json();
        const dashboardService: DashboardService = new DashboardService();
        const dashboard: Dashboard = dashboardService.createDashboard(name, description, datasource);
        const filePath = path.join(process.cwd(), 'public', 'Dashboard', dashboard.id + '.json');
        writeFile(filePath, JSON.stringify(dashboard), (err) => {
            throw err;
        })
        return NextResponse.json(dashboard);
    }
}
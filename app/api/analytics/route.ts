// app/api/analytics/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const analytics = {
    revenue: [4000, 3000, 5000, 8000, 7500, 12000, 11000, 13000, 14500, 16000, 17500, 19000],
    deals: [24, 18, 30, 35, 32, 48, 45, 52, 58, 62, 68, 75],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  };
  
  return NextResponse.json(analytics);
}
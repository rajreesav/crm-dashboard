// app/api/customers/route.ts
import { NextResponse } from 'next/server';

// Mock database
const customers = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah@techcorp.com', status: 'Active', value: 12400, company: 'TechCorp' },
  { id: 2, name: 'Mike Chen', email: 'mike@innovate.io', status: 'Active', value: 8500, company: 'Innovate Inc' },
  { id: 3, name: 'Emma Davis', email: 'emma@globaltech.com', status: 'Pending', value: 15200, company: 'GlobalTech' },
  { id: 4, name: 'Alex Rodriguez', email: 'alex@nextgen.dev', status: 'Active', value: 6800, company: 'NextGen' },
];

export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate DB delay
  return NextResponse.json(customers);
}

export async function POST(request: Request) {
  const newCustomer = await request.json();
  const customer = {
    id: customers.length + 1,
    ...newCustomer,
    status: 'Active'
  };
  customers.push(customer);
  return NextResponse.json(customer);
}
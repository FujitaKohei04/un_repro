export type Employee = {
  id: string;
  name: string;
  icon: string;
  status: string;
  role: string;
  department: string;
  group: string;
  team: string;
  internalNumber: string;
}

export type Seat = OfficeObject & {
  isExistedEmp:boolean;
  vector: {
    x: boolean; //true is right
    y: boolean; //true is under
  }
  emp?: Employee;
}

export type OfficeObject = {
  x: number;
  y: number;
}
type UserRole = 'admin' | 'user';

const getDashboard = (role: UserRole) => {
  if(role === 'admin') {
    return 'adminDashboard';
  } else if(role === 'user') {
    return 'userDashboard';
  } else {
    return 'guestDashboard';
  }
}

getDashboard('admin');


// intersaction &
type Employee = {
  id: string;
  name: string;
  phone: string;
};

type Manager = {
  department: string;
  teamSize: string;
}

type EmployeeManager = Employee & Manager;

const employeeManager: EmployeeManager = {
  id: '123',
  name: 'Chowdhury Shaheb',
  phone: '018********',
  department: 'IT',
  teamSize: '24'
}
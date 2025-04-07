export interface Employee {
  id: string
  lastName: string
  firstName: string
  patronymic: string
  dateOfBirth: string
  phoneNumber: string
  passportSeria: number
  passportNumber: number
  passportIssuedBy: string
  registrationAddress: string
  addressOfLiving: string
  passportDateOfIssue: string
  snils: string
  inn: string
  driverLicenseCategory: string
  millitaryIDNumber: string
  photoURL: string
  login: string
  password: string
}

export interface employeesListProps {
  employeesData: Employee[] | undefined
}

export interface GetEmployeesData {
  getEmployees: Employee[]
}

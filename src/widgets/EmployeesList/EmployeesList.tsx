import { IconButton, List, ListItem, ListItemAvatar, Avatar, ListItemText, Box, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Employee, employeesListProps } from '../../shared/types/types'
import formatPhone from '../../features/formatPhone'
import { useEffect, useState } from 'react'

function EmployeesList({ employeesData }: employeesListProps) {
  const [employees, setEmployees] = useState<Employee[]>()

  useEffect(() => {
    setEmployees(employeesData)
  }, [employeesData])

  if (!employees) return <h1>there are no employees :(((</h1>

  return (
    <List>
      {employees.map((employee: Employee) => (
        <Box key={employee.id}>
          <ListItem divider={true}>
            <ListItemAvatar>
              <Avatar alt={employee.firstName} src={employee.photoURL} />
            </ListItemAvatar>
            <Box>
              <Typography variant="body2" color="">
                {employee.lastName} {employee.firstName} {employee.patronymic}
              </Typography>
              <List>
                <ListItemText secondary={`Дата рождения: ${employee.dateOfBirth}`} />
                <ListItemText secondary={`Телефон: ${formatPhone(employee.phoneNumber)}`} />
                <ListItemText secondary={`Серия паспорта: ${employee.passportSeria}`} />
                <ListItemText secondary={`Номер паспорта: ${employee.passportNumber}`} />
                <ListItemText secondary={`Кем выдан: ${employee.passportIssuedBy}`} />
                <ListItemText secondary={`Адрес регистрации: ${employee.registrationAddress}`} />
                <ListItemText secondary={`Адрес проживания: ${employee.addressOfLiving}`} />
                <ListItemText secondary={`Дата выдачи паспорта: ${employee.passportDateOfIssue}`} />
                <ListItemText secondary={`СНИЛС: ${employee.snils}`} />
                <ListItemText secondary={`ИНН: ${employee.inn}`} />
                <ListItemText secondary={`Категории прав: ${employee.driverLicenseCategory ?? 'Нет'}`} />
                <ListItemText secondary={`Номер военного билета: ${employee.millitaryIDNumber}`} />
                <ListItemText secondary={`Логин: ${employee.login}`} />
                <ListItemText secondary={`Пароль: ${employee.password}`} />
              </List>
            </Box>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItem>
        </Box>
      ))}
    </List>
  )
}

export default EmployeesList

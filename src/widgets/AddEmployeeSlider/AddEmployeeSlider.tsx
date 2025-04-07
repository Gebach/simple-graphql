import { useState } from 'react'
import { Button, Drawer, FormControl, Input, InputLabel, Typography } from '@mui/material'
import { ADD_EMPLOYEE, GET_EMPLOYEES } from '../../shared/features/gqlQueries'
import { useMutation } from '@apollo/client'
import dayjs from 'dayjs'
import styles from './AddEmployeeSlider.module.scss'
import { GetEmployeesData } from '../../shared/types/types'

function AddEmployeeSlider() {
  const [open, setOpen] = useState<boolean>(false)
  const [newEmployee, setNewEmployee] = useState({
    lastName: '',
    firstName: '',
    patronymic: '',
    dateOfBirth: '',
    phoneNumber: '',
    passportSeria: 0,
    passportNumber: 0,
    passportIssuedBy: '',
    registrationAddress: '',
    addressOfLiving: '',
    passportDateOfIssue: '',
    snils: '',
    inn: '',
    driverLicenseCategory: '',
    millitaryIDNumber: '',
    photoURL: '',
    login: '',
    password: '',
  })

  const [addEmployee] = useMutation(ADD_EMPLOYEE, {
    update(cache, { data: { addEmployee } }) {
      // Получаем текущие данные из кеша
      const { getEmployees } = cache.readQuery<GetEmployeesData>({
        query: GET_EMPLOYEES,
      }) || { getEmployees: [] } // Если данных нет в кеше, возвращаем пустой массив

      // Обновляем кеш, добавив нового сотрудника
      cache.writeQuery({
        query: GET_EMPLOYEES,
        data: {
          getEmployees: [...getEmployees, addEmployee],
        },
      })
    },
  })

  const toggleDrawer = () => {
    setOpen(newOpen => !newOpen)
  }

  const handleAddEmployee = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log(newEmployee)
    // addEmployee({
    //   variables: {
    //     lastName: newEmployee.lastName,
    //     firstName: newEmployee.firstName,
    //     patronymic: newEmployee.patronymic,
    //     dateOfBirth: dayjs(newEmployee.dateOfBirth).format('DD-MM-YYYY'),
    //     phoneNumber: newEmployee.phoneNumber,
    //     passportSeria: +newEmployee.passportSeria,
    //     passportNumber: +newEmployee.passportNumber,
    //     passportIssuedBy: newEmployee.passportIssuedBy,
    //     registrationAddress: newEmployee.registrationAddress,
    //     addressOfLiving: newEmployee.addressOfLiving,
    //     passportDateOfIssue: dayjs(newEmployee.passportDateOfIssue).format('DD-MM-YYYY'),
    //     snils: newEmployee.snils,
    //     inn: newEmployee.inn,
    //     driverLicenseCategory: newEmployee.driverLicenseCategory,
    //     millitaryIDNumber: newEmployee.millitaryIDNumber,
    //     photoURL: newEmployee.photoURL,
    //     login: newEmployee.login,
    //     password: newEmployee.password,
    //   },
    // })
  }

  return (
    <>
      <Button onClick={toggleDrawer}>Добавить сотрудника</Button>
      <Drawer open={open} onClose={toggleDrawer} className={styles.drawer}>
        <Typography variant="h6">Добавить сотрудника</Typography>
        <form onSubmit={toggleDrawer} className={styles.form}>
          <FormControl className="">
            <InputLabel htmlFor="lastName">Введите фамилию</InputLabel>
            <Input
              id="lastName"
              placeholder="Введите фамилию"
              onChange={e => setNewEmployee(newEmployee => ({ ...newEmployee, lastName: e.target.value }))}
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="firstName">Введите имя</InputLabel>
            <Input
              id="firstName"
              placeholder="Введите имя"
              onChange={e => setNewEmployee(newEmployee => ({ ...newEmployee, firstName: e.target.value }))}
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="patronymic">Введите отчество</InputLabel>
            <Input
              id="patronymic"
              placeholder="Введите отчество"
              onChange={e => setNewEmployee(newEmployee => ({ ...newEmployee, patronymic: e.target.value }))}
            />
          </FormControl>

          <FormControl>
            <InputLabel variant="outlined" htmlFor="dateOfBirth">
              Введите дату рождения
            </InputLabel>
            <Input
              id="dateOfBirth"
              type="date"
              placeholder="Введите дату рождения"
              onChange={e =>
                setNewEmployee(newEmployee => ({
                  ...newEmployee,
                  dateOfBirth: e.target.value,
                }))
              }
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="phoneNumber">Введите номер телефона</InputLabel>
            <Input
              id="phoneNumber"
              placeholder="Введите номер телефона"
              onChange={e => setNewEmployee(newEmployee => ({ ...newEmployee, phoneNumber: e.target.value }))}
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="passportSeria">Введите серию паспорта</InputLabel>
            <Input
              id="passportSeria"
              placeholder="Введите серию паспорта"
              type="number"
              onChange={e => setNewEmployee(newEmployee => ({ ...newEmployee, passportSeria: +e.target.value }))}
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="passportNumber">Введите номер паспорта</InputLabel>
            <Input
              id="passportNumber"
              placeholder="Введите номер паспорта"
              type="number"
              onChange={e => setNewEmployee(newEmployee => ({ ...newEmployee, passportNumber: +e.target.value }))}
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="passportIssuedBy">Введите кем выдан</InputLabel>
            <Input
              id="passportIssuedBy"
              placeholder="Введите кем выдан"
              onChange={e => setNewEmployee(newEmployee => ({ ...newEmployee, passportIssuedBy: e.target.value }))}
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="registrationAddress">Введите адрес регистрации</InputLabel>
            <Input
              id="registrationAddress"
              placeholder="Введите адрес регистрации"
              onChange={e => setNewEmployee(newEmployee => ({ ...newEmployee, registrationAddress: e.target.value }))}
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="addressOfLiving">Введите адрес проживания</InputLabel>
            <Input
              id="addressOfLiving"
              placeholder="Введите адрес проживания"
              onChange={e => setNewEmployee(newEmployee => ({ ...newEmployee, addressOfLiving: e.target.value }))}
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="passportDateOfIssue">Введите дату выдачи паспорта</InputLabel>
            <Input
              id="passportDateOfIssue"
              type="date"
              placeholder="Введите дату выдачи паспорта"
              onChange={e =>
                setNewEmployee(newEmployee => ({
                  ...newEmployee,
                  passportDateOfIssue: e.target.value,
                }))
              }
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="snils">Введите СНИЛС</InputLabel>
            <Input
              id="snils"
              placeholder="Введите СНИЛС"
              onChange={e => setNewEmployee(newEmployee => ({ ...newEmployee, snils: e.target.value }))}
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="inn">Введите ИНН</InputLabel>
            <Input
              id="inn"
              placeholder="Введите ИНН"
              onChange={e => setNewEmployee(newEmployee => ({ ...newEmployee, inn: e.target.value }))}
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="driverLicenseCategory">Введите категории прав</InputLabel>
            <Input
              id="driverLicenseCategory"
              placeholder="Введите категории прав"
              onChange={e => setNewEmployee(newEmployee => ({ ...newEmployee, driverLicenseCategory: e.target.value }))}
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="millitaryIDNumber">Введите военный билет</InputLabel>
            <Input
              id="millitaryIDNumber"
              placeholder="Введите военный билет"
              onChange={e => setNewEmployee(newEmployee => ({ ...newEmployee, millitaryIDNumber: e.target.value }))}
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="photoURL">Добавьте фото</InputLabel>
            <Input
              id="photoURL"
              placeholder="Введите фото"
              type="file"
              onChange={e => setNewEmployee(newEmployee => ({ ...newEmployee, photoURL: e.target.value }))}
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="login">Введите логин</InputLabel>
            <Input
              id="login"
              placeholder="Введите логин"
              onChange={e => setNewEmployee(newEmployee => ({ ...newEmployee, login: e.target.value }))}
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="password">Введите пароль</InputLabel>
            <Input
              id="password"
              placeholder="Введите пароль"
              onChange={e => setNewEmployee(newEmployee => ({ ...newEmployee, password: e.target.value }))}
            />
          </FormControl>

          <Button onClick={e => handleAddEmployee(e)} type="submit">
            Добавить
          </Button>
        </form>
      </Drawer>
    </>
  )
}

export default AddEmployeeSlider

import EmployeesList from './widgets/EmployeesList/EmployeesList'
import { useQuery } from '@apollo/client'
import { GET_EMPLOYEES } from './shared/features/gqlQueries'
import { LinearProgress } from '@mui/material'
import './App.scss'
import AddEmployeeSlider from './widgets/AddEmployeeSlider/AddEmployeeSlider'
import { GetEmployeesData } from './shared/types/types'

function App() {
  const { data, error, loading } = useQuery<GetEmployeesData>(GET_EMPLOYEES)

  if (loading) return <LinearProgress />

  if (error) return <h1>Error!! : {error.message} :(((</h1>

  return (
    <>
      <AddEmployeeSlider />
      <EmployeesList employeesData={data?.getEmployees} />
    </>
  )
}

export default App

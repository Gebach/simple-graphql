import { gql } from '@apollo/client'

export const GET_EMPLOYEES = gql`
  query getEmployees {
    getEmployees {
      id
      lastName
      firstName
      patronymic
      dateOfBirth
      phoneNumber
      passportSeria
      passportNumber
      passportIssuedBy
      registrationAddress
      addressOfLiving
      passportDateOfIssue
      snils
      inn
      driverLicenseCategory
      millitaryIDNumber
      photoURL
      login
      password
    }
  }
`

export const ADD_EMPLOYEE = gql`
  mutation addEmployee(
    $lastName: String!
    $firstName: String!
    $patronymic: String
    $dateOfBirth: String!
    $phoneNumber: String!
    $passportSeria: Int!
    $passportNumber: Int!
    $passportIssuedBy: String!
    $registrationAddress: String!
    $addressOfLiving: String!
    $passportDateOfIssue: String!
    $snils: String!
    $inn: String!
    $driverLicenseCategory: String
    $millitaryIDNumber: String
    $photoURL: String
    $login: String!
    $password: String!
  ) {
    addEmployee(
      lastName: $lastName
      firstName: $firstName
      patronymic: $patronymic
      dateOfBirth: $dateOfBirth
      phoneNumber: $phoneNumber
      passportSeria: $passportSeria
      passportNumber: $passportNumber
      passportIssuedBy: $passportIssuedBy
      registrationAddress: $registrationAddress
      addressOfLiving: $addressOfLiving
      passportDateOfIssue: $passportDateOfIssue
      snils: $snils
      inn: $inn
      driverLicenseCategory: $driverLicenseCategory
      millitaryIDNumber: $millitaryIDNumber
      photoURL: $photoURL
      login: $login
      password: $password
    ) {
      id
    }
  }
`

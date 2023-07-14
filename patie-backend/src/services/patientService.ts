import patientEntries from '../../data/patients';
import { NonSensitivePatientEntry, PatientEntry, NewPatientEntry } from '../types';
import { v1 as uuid } from 'uuid'


const patients: Array<NonSensitivePatientEntry> = patientEntries.map(
    ({ id, name, dateOfBirth, gender, occupation }) => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
    })
);

const addPatient = (entry:NewPatientEntry):PatientEntry => {
  const newPatient = {
    id:uuid(),
   ...entry
  }
  patients.push(newPatient)
  return newPatient;


} 

const getAll = (): Array<NonSensitivePatientEntry> => {
    return patients;
  };
  
  export default {
    getAll,
    addPatient
  };
  


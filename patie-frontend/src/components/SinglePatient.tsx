import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import patientService from "../services/patients";
import { Patient, HospitalEntry, Entry } from "../types";
import Hospital from "./Hospital";
import OccupationalHealthcare from "./OccupationalHealthcare";
import HealthCheck from "./HealthCheck";

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const EntryDetails: React.FC<{ entry: Entry }> = ({ entry }) => {
  switch (entry.type) {
    case "Hospital":
      return <Hospital entry={entry} />;
    case "OccupationalHealthcare":
      return <OccupationalHealthcare entry={entry} />;
    case "HealthCheck":
      return <HealthCheck entry={entry} />;
    default:
      return assertNever(entry);
  }
};

const SinglePatient = () => {
  const { id } = useParams<{ id: string }>();

  const [patientInfo, setPatientInfo] = useState<Patient | null>(null);

  useEffect(() => {
    //console.log(id);

    const fetchPatientList = async () => {
      //console.log(id);

      const patientInfo = await patientService.fetchSinglePatient(id);
      console.log(patientInfo);
      setPatientInfo(patientInfo);
    };
    fetchPatientList();
  }, [id]);

  return (
    <div>
      <h2>{patientInfo?.name}</h2>
      <p>ssh:{patientInfo?.ssn}</p>
      <p>occupation:{patientInfo?.occupation}</p>

      <h3>entries</h3>
      {patientInfo?.entries.map((entry, i) => (
        <div key={i}>
          <EntryDetails entry={entry} />
        </div>
      ))}
    </div>
  );
};

export default SinglePatient;

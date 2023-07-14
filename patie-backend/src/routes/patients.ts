import express from "express";
import patientService from "../services/patientService";
import toNewPatEntry from "../utils";


const patientsRouter = express.Router();

patientsRouter.get("/", (_req, res) => {
  res.send(patientService.getAll());
});
patientsRouter.post("/", (req, res) => {
  try {
    
    const newPatEntry = toNewPatEntry(req.body);

    const addEntry = patientService.addPatient(newPatEntry);
    res.json(addEntry);



  } catch (error:unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage); 
  }



  










});
export default patientsRouter;

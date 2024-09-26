import { LoginValidate } from "./Validation";
import { DoctorData } from "./ColumnsData";
import { DummyData } from "./DummyData";

// Yup Validation
export const LoginValidation = LoginValidate;

// Columns for DataGrid
export const DoctorTableData  = (handleAction) => DoctorData(handleAction);

// DummyData for DataGrid
export const AppointmentData = DummyData

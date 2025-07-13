import { MultiSelect } from 'primereact/multiselect'
import './index.css'

const PrimeMultiSelect = ({ values, setValues, options, placeholder }) => {
  return <>
               <MultiSelect value={values} onChange={(e) => setValues(e.value)} options={options} optionLabel="name"
              filter display="chip" placeholder="Select Players" maxSelectedLabels={11} />

    </>
}
export default PrimeMultiSelect

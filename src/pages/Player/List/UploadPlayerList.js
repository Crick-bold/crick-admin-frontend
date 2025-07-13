import React from 'react'
import { FileUpload } from 'primereact/fileupload'
import useBulkUploadPlayers from '../hooks/useBulkUploadPlayers'
// import logo from "../../../../public/PlayerList.csv";
const UploadPlayersList = ({ setShow, listPlayers }) => {
  const { bulkUploadPlayers } = useBulkUploadPlayers({ setShow, listPlayers })
  const handleUpload = (event) => {
    const fileObjectURL = event.files[0]?.objectURL // Get the object URL of the first file
    if (!fileObjectURL) {
      alert('No file provided!')
      return
    }
    //  console.log(event);
    // Fetch the file from the object URL
    fetch(fileObjectURL)
      .then((response) => response.text())
      .then((text) => {
        const rows = text.split('\n').filter((row) => row.trim()) // Split and clean rows
        const parsedData = rows.map((row) => row.split(',')) // Parse CSV rows
        console.log(parsedData) // You can process or store this data as needed
        bulkUploadPlayers(parsedData)
      })
      .catch((error) => {
        console.error('Error reading the file:', error)
        alert('Failed to read the CSV file.')
      })
  }

  return (
    <div className="card">
      <FileUpload
        mode="basic"
        name="demo[]"
        customUpload
        uploadHandler={handleUpload}
      />
      <div style={{ marginTop: '10px', padding: '10px' }}>
        <a href="/PlayersList.csv" download style={{ color: '#fecc00' }}>Download</a>&nbsp; sample file.
      </div>

    </div>
  )
}
export default UploadPlayersList

import { useForm } from 'react-hook-form'
import Layout from '../Components/Layout'
import TeamControls from './team-controls'
import useCreateTeam from './hooks/useCreateTeam'

const AddTeamLayout = ({ listTeams, setShow = () => {} }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const controls = TeamControls()

  const { addTeam } = useCreateTeam({ listTeams, setShow })

  return (
    <>
      <Layout
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={addTeam}
        errors={errors}
        controls={controls}
      />
    </>
  )
}
export default AddTeamLayout

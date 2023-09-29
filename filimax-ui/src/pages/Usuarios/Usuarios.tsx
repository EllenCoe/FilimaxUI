import { UserProvider } from "../../hooks/useUsers"
import { UsersList } from "./ListaDeUsuarios"

const Usuarios = () => {
  return <UserProvider>
    <h1>Usuarios</h1>
    <UsersList></UsersList>
  </UserProvider>
}

export default Usuarios

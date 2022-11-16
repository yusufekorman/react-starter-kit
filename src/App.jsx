import { useModals, createModal } from './utils/modal'
import Modal from './modals'
import Button from './components/Button';

function App() {

  const modals = useModals();

  return (
    <>
      {modals.length > 0 && (<Modal />)}
      <Button onClick={() => createModal("test")} variant="success">
        Modal Aç
      </Button>
    </>
  )
}

export default App;
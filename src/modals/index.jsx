import modalsMap from "../modalsMap.js"
import { useModals, destroyModal } from "../utils/modal.js"

export default function Modal() {

  const modals = useModals();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      {modals.map(m => {
        const modal = modalsMap.find(mMap => mMap.name === m.name);

        return <div className="hidden last:block w-[500px] bg-white shadow-lg rounded" onClick={e => e.stopPropagation()}><modal.element data={m.data} close={destroyModal} /></div>;
      })}
    </div>
  )
}

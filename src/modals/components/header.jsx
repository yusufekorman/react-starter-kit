import { destroyModal } from '../../utils/modal'
import { TiTimes } from 'react-icons/ti'

export default function Header({ title }) {
  return (
    <header className='h-14 flex items-center justify-between px-4 border-b border-gray-300 text-sm font-medium'>
        <h6>{title}</h6>
        <button className="w-9 h-9 rounded hover:bg-gray-100 flex items-center justify-center" onClick={() => destroyModal()}>
            <TiTimes size={16}/>
        </button>
    </header>
  )
}
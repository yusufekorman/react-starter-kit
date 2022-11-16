import { useSelector } from 'react-redux';
import store from '../store';
import { append, destroy, destroyAll } from '../store/modal';


export const useModals = () => useSelector(state => state.modal.modals);
export const createModal = (name, data = false) => store.dispatch(append({
    name,
    data
}));
export const destroyModal = () => store.dispatch(destroy());
export const destroyAllModals = () => store.dispatch(destroyAll());
import { create } from 'zustand';

type ExpirationSessionModalProps = {
    opened: boolean,
    open: () => void,
    close: () => void
};

const expirationSessionModalStore = create<ExpirationSessionModalProps>((set:any) => ({
	opened: false,
	open: () => set(() => ({ opened: true })),
	close: () => set(() => ({ opened: false }))
}));

export default expirationSessionModalStore;
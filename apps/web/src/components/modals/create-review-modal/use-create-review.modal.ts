import { create } from 'zustand';
interface useReviewStore {
  isOpen: boolean;
  isEdit: boolean;
  editId?: string;
  review: {
    spoilers: boolean;
    content: string;
  };
  onOpen: () => void;
  onClose: () => void;
  onEdit: (id: string) => void;
  setReview: (review: ReviewType) => void;
}

type ReviewType = useReviewStore['review'];

const useCreateReviewModal = create<useReviewStore>((set) => ({
  isOpen: false,
  isEdit: false,
  editId: undefined,
  review: {
    spoilers: false,
    content: '',
  },
  setReview: (review: ReviewType) => set({ review }),
  onOpen: () => set({ isOpen: true, isEdit: false, editId: undefined }),
  onEdit: (id: string) => set({ isOpen: true, isEdit: true, editId: id }),
  onClose: () => set({ isOpen: false }),
}));

export default useCreateReviewModal;

import { createSlice } from "@reduxjs/toolkit"

interface IModalState {
  isOpen: boolean
}

const initialState: IModalState = {
  isOpen: false,
}

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state) => {
      state.isOpen = true;
    },
    hideModal: (state) => {
      state.isOpen = false;
    },
  },
})

export const { showModal, hideModal } = ModalSlice.actions
export default ModalSlice.reducer

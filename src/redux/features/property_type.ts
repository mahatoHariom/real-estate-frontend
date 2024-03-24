import { createSlice } from "@reduxjs/toolkit"

export enum PropertyTypeEnum {
  SELL = "SELL",
  RENT = "RENT",
}
interface IPropertyType {
  type: string
}

const initialState: IPropertyType = {
  type: PropertyTypeEnum.SELL,
}

export const propertyTypeSlice = createSlice({
  name: "propertyType",
  initialState,
  reducers: {
    chnagePropertyType: (state, action) => {
      state.type = action.payload
    },
  },
})

export const { chnagePropertyType } = propertyTypeSlice.actions
export default propertyTypeSlice.reducer

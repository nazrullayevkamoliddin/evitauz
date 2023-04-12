import {configureStore} from '@reduxjs/toolkit'
import { WaterSlice } from './waterSlice/WaterSlice'

const store = configureStore({
    reducer:{
        water: WaterSlice
    }
})
export default store;
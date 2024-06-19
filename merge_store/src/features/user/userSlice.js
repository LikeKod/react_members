import {
    createSlice
} from '@reduxjs/toolkit';

export const createUser = createAsyncThunk('users/createUser', async (payload, thunkAPI) => {
    try {
        const res = await axios.post(`${BASE_URL}/users`, payload)
        return res.data
    } catch (err) {
        console.log(err)
        return thunkAPI.rejectWithValue(err)
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: {},
        cart: [],
        isLoading: false,
    },
    reducers: {
        addItemToCart: (state, {
            payload
        }) => {
            let newCart = [...state.cart];
            const found = state.cart.find(({
                id
            }) => id === payload.id)
            if (found) {
                newCart = newCart.map((item) => {
                    return item.id === payload.id ? {
                        ...item,
                        quantity: payload.quantity || item.quantity + 1
                    } : item
                })
            } else newCart.push({
                ...payload,
                quantity: 1
            })
            state.cart = newCart;
        }
    },
    extraReducers: (builder) => {
        // builder.addCase(getUser.fulfilled, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(getUser.pending, (state, {payload}) => {
        //     state.list = payload;
        //     state.isLoading = false
        // });
        // builder.addCase(getUser.rejected, (state) => {
        //     state.isLoading = false
        // });
    }
})

export const {addItemToCart} = userSlice.actions;

export default userSlice.reducer;
'use client'

import React, { useEffect, useState } from 'react'
import { useApi } from 'frontend-js'
import { useShop } from '../../hooks'
import { getCookie, setCookie } from 'cookies-next'
import { useDebounce } from 'use-debounce'

const useCart = () => {
	const { api } = useApi()

	const { cartCookie, cart, setCart, cartOpen, setCartOpen } = useShop()

	const [cartId, setCartId] = useState(null)
	const [loading, setLoading] = useState(false)
	const [errors, setErrors] = useState(null)

	const apiParams = {
		url: '/api/v1/shop/carts',
		name: 'cart',
	}

	const fetchCart = async (cartId) => {
		return await loadingWrapper(() => api.fetchCart(cartId, apiParams))
	}

	const createCart = async () => {
		return await loadingWrapper(() => api.createCart(apiParams))
	}

	const addToCart = async (productId, quantity = 1) => {
		if (!cartId) return 'Cart not found'
		return await loadingWrapper(() =>
			api.addToCart(cartId, productId, quantity, apiParams)
		)
	}

	const removeFromCart = async (productId) => {
		if (!cartId) return 'Cart not found'
		return await loadingWrapper(() =>
			api.removeFromCart(cartId, productId, apiParams)
		)
	}

	const addQuantity = async (productId) => {
		if (!cartId) return 'Cart not found'
		return await loadingWrapper(() =>
			api.addQuantity(cartId, productId, apiParams)
		)
	}

	const removeQuantity = async (productId) => {
		if (!cartId) return 'Cart not found'
		return await loadingWrapper(() =>
			api.removeQuantity(cartId, productId, apiParams)
		)
	}

	const checkout = async (options) => {
		try {
			if (!cartId) return 'Cart not found'
			setLoading(true)
			return await api.checkout(cartId, options, apiParams)
		} catch (error) {
			console.log(error)
			setErrors(error)
		} finally {
			setLoading(false)
		}
	}

	const loadingWrapper = async (fn) => {
		try {
			setErrors(null)
			setLoading(true)
			const resp = await fn()
			if (resp?.data?.id) {
				setCart(resp.data)
				setCartId(resp?.data?.uid)
			}
			return resp?.data
		} catch (error) {
			console.log(error)
			setErrors(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		if (cart?.uid) {
			setCartId(cart?.uid)
		}
	}, [cart?.uid])

	return {
		cartId,
		cartCookie,
		loading,
		errors,
		createCart,
		fetchCart,
		cart,
		cartOpen,
		setCartOpen,
		setCart,
		addToCart,
		removeFromCart,
		addQuantity,
		removeQuantity,
		checkout,
	}
}

export default useCart

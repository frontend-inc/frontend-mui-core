import React from 'react'
import { useResource } from 'frontend-js'
import { useAdmin } from '..'

const useProducts = () => {
	const { apiUrl } = useAdmin()

	const {
		loading,
		delayedLoading,
		loaded,
		errors,
		empty,
		editing,
		isValid,
		resource: document,
		resources: documents,
		findOne: findProduct,
		findMany: findProducts,
		update: updateProduct,
		updateMany: updateProducts,
		create: createProduct,
		save: saveProduct,
		destroy: deleteProduct,
		deleteMany: deleteProducts,
		loadMore,
		publish,
		unpublish,
		handleChange,
		handleChangePage,
		updatePositions,
		addAttachment,
		removeAttachment,
		query,
		setQuery,
		page,
		numPages,
		perPage,
		totalCount,
		sortBy,
		sortDirection,
		handleSort,
		reloadOne: reloadProduct,
		reloadMany: reloadProducts,
		setResource: setProduct,
		setResources: setProducts,		
		startIndex,
		endIndex,
		paginate,
	} = useResource({
		url: `${apiUrl}/shop/products`,
		name: 'product',
	})

	return {
		paginate,
		loading,
		loaded,
		delayedLoading,
		errors,
		empty,
		editing,
		isValid,
		document,
		documents,
		findProduct,
		findProducts,
		saveProduct,
		updateProduct,
		updateProducts,
		createProduct,
		deleteProduct,
		deleteProducts,
		loadMore,
		publish,
		unpublish,
		addAttachment,
		removeAttachment,
		handleChange,
		handleChangePage,
		query,
		setQuery,
		reloadProduct,
		reloadProducts,
		page,
		numPages,
		perPage,
		totalCount,
		updatePositions,
		sortBy,
		sortDirection,
		handleSort,
		setProduct,
		setProducts,
		startIndex,
		endIndex,
	}
}

export default useProducts

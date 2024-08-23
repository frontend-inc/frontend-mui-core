import React from 'react'
import { Button } from '@mui/material'
import Image from 'next/image'

const LOGO_WIDTH = 120
const LOGO_HEIGHT = 60

type LogoProps = {
	src: string
	width?: number
	height?: number
	handleClick: (path: string) => void
}

const Logo: React.FC<LogoProps> = (props) => {
	const {
		src,
		width = LOGO_WIDTH,
		height = LOGO_HEIGHT,
		handleClick,
	} = props || {}

	return (
		// @ts-ignore
		<Button disableRipple sx={sx.root} onClick={handleClick}>
			{src && (
				<Image
					src={src}
					alt="logo"
					width={160}
					height={160}
					style={{
						maxHeight: '50px',
						maxWidth: '120px',
						objectFit: 'contain',
					}}
				/>
			)}
			{!src && (
				<svg
					width="62"
					height="24"
					viewBox="0 0 62 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M5.39884 14.542H14.0568L13.2508 18H0.120836L4.09884 0.839999H8.57084L5.39884 14.542ZM22.5257 18.26C21.2084 18.26 20.0644 18 19.0937 17.48C18.1404 16.96 17.4037 16.258 16.8837 15.374C16.3637 14.4727 16.1037 13.4673 16.1037 12.358C16.1037 10.954 16.3897 9.68 16.9617 8.536C17.5511 7.37467 18.3917 6.456 19.4837 5.78C20.5931 5.08667 21.9364 4.74 23.5137 4.74C24.8484 4.74 25.9924 5 26.9457 5.52C27.8991 6.04 28.6357 6.742 29.1557 7.626C29.6757 8.51 29.9357 9.51533 29.9357 10.642C29.9357 12.0287 29.6411 13.3027 29.0517 14.464C28.4797 15.6253 27.6391 16.5527 26.5297 17.246C25.4377 17.922 24.1031 18.26 22.5257 18.26ZM22.5777 15.14C23.0284 15.14 23.4357 15.0013 23.7997 14.724C24.1811 14.4293 24.5017 14.0393 24.7617 13.554C25.0391 13.0687 25.2471 12.5487 25.3857 11.994C25.5244 11.422 25.5937 10.85 25.5937 10.278C25.5937 9.77533 25.5071 9.35067 25.3337 9.004C25.1777 8.64 24.9351 8.36267 24.6057 8.172C24.2937 7.964 23.9037 7.86 23.4357 7.86C23.0024 7.86 22.5951 8.00733 22.2137 8.302C21.8497 8.57933 21.5291 8.96067 21.2517 9.446C20.9917 9.914 20.7837 10.434 20.6277 11.006C20.4891 11.578 20.4197 12.15 20.4197 12.722C20.4197 13.2073 20.4977 13.632 20.6537 13.996C20.8271 14.36 21.0784 14.646 21.4077 14.854C21.7371 15.0447 22.1271 15.14 22.5777 15.14ZM36.0918 23.59C35.3118 23.59 34.5578 23.4947 33.8298 23.304C33.1192 23.1133 32.4865 22.8187 31.9318 22.42C31.3772 22.0213 30.9352 21.5187 30.6058 20.912C30.2765 20.3227 30.1032 19.6293 30.0858 18.832L34.5318 18.364C34.5665 19.092 34.7225 19.664 34.9998 20.08C35.2945 20.5133 35.8318 20.73 36.6118 20.73C37.0452 20.73 37.4352 20.6347 37.7818 20.444C38.1458 20.2533 38.4578 19.9413 38.7178 19.508C38.9952 19.0747 39.2118 18.4853 39.3678 17.74L40.3298 13.58H40.5638C40.2865 14.8973 39.7578 15.9113 38.9778 16.622C38.1978 17.3153 37.2272 17.662 36.0658 17.662C35.1992 17.662 34.4192 17.4627 33.7258 17.064C33.0325 16.648 32.4865 16.0587 32.0878 15.296C31.6892 14.516 31.4898 13.5973 31.4898 12.54C31.4898 11.5 31.6372 10.5207 31.9318 9.602C32.2438 8.666 32.6772 7.834 33.2318 7.106C33.7865 6.36067 34.4538 5.78 35.2338 5.364C36.0138 4.948 36.8892 4.74 37.8598 4.74C38.5358 4.74 39.1598 4.88733 39.7318 5.182C40.3212 5.47667 40.7978 5.936 41.1618 6.56C41.5432 7.16667 41.7252 7.94667 41.7078 8.9L41.1878 9.55L42.2278 5H46.6478L43.7878 17.376C43.4238 18.9187 42.8952 20.1407 42.2018 21.042C41.5258 21.9433 40.6765 22.5933 39.6538 22.992C38.6312 23.3907 37.4438 23.59 36.0918 23.59ZM38.0158 14.464C38.5878 14.464 39.0818 14.2647 39.4978 13.866C39.9312 13.4673 40.2605 12.956 40.4858 12.332C40.7285 11.6907 40.8498 11.0147 40.8498 10.304C40.8498 9.836 40.7632 9.42867 40.5898 9.082C40.4338 8.73533 40.1998 8.46667 39.8878 8.276C39.5932 8.08533 39.2378 7.99 38.8218 7.99C38.1978 7.99 37.6605 8.198 37.2098 8.614C36.7765 9.01267 36.4385 9.524 36.1958 10.148C35.9705 10.7547 35.8578 11.3787 35.8578 12.02C35.8578 12.748 36.0398 13.3373 36.4038 13.788C36.7678 14.2387 37.3052 14.464 38.0158 14.464ZM53.9593 18.26C52.642 18.26 51.498 18 50.5273 17.48C49.574 16.96 48.8373 16.258 48.3173 15.374C47.7973 14.4727 47.5373 13.4673 47.5373 12.358C47.5373 10.954 47.8233 9.68 48.3953 8.536C48.9847 7.37467 49.8253 6.456 50.9173 5.78C52.0267 5.08667 53.37 4.74 54.9473 4.74C56.282 4.74 57.426 5 58.3793 5.52C59.3327 6.04 60.0693 6.742 60.5893 7.626C61.1093 8.51 61.3693 9.51533 61.3693 10.642C61.3693 12.0287 61.0747 13.3027 60.4853 14.464C59.9133 15.6253 59.0727 16.5527 57.9633 17.246C56.8713 17.922 55.5367 18.26 53.9593 18.26ZM54.0113 15.14C54.462 15.14 54.8693 15.0013 55.2333 14.724C55.6147 14.4293 55.9353 14.0393 56.1953 13.554C56.4727 13.0687 56.6807 12.5487 56.8193 11.994C56.958 11.422 57.0273 10.85 57.0273 10.278C57.0273 9.77533 56.9407 9.35067 56.7673 9.004C56.6113 8.64 56.3687 8.36267 56.0393 8.172C55.7273 7.964 55.3373 7.86 54.8693 7.86C54.436 7.86 54.0287 8.00733 53.6473 8.302C53.2833 8.57933 52.9627 8.96067 52.6853 9.446C52.4253 9.914 52.2173 10.434 52.0613 11.006C51.9227 11.578 51.8533 12.15 51.8533 12.722C51.8533 13.2073 51.9313 13.632 52.0873 13.996C52.2607 14.36 52.512 14.646 52.8413 14.854C53.1707 15.0447 53.5607 15.14 54.0113 15.14Z"
						fill="white"
					/>
				</svg>
			)}
		</Button>
	)
}

export default Logo

const sx = {
	root: {
		boxShadow: 0,
		width: '100%',
		minHeight: 'auto',
		minWidth: 'auto',
		'&:hover': {
			background: 'transparent',
		},
	},
}

const styles = {
	image: {
		objectFit: 'contain',
	},
}

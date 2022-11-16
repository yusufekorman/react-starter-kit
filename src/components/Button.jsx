import classNames from "classnames"

function Button({ children, variant = 'default', onClick = () => {}}) {
	return (
		<button className={classNames({
			"p-4 h-10 flex items-center rounded": true,
			"bg-gray-100": variant === 'default',
			"bg-green-600 text-white": variant === 'success',
			"bg-red-600 text-white": variant === 'danger',
			"bg-yellow-300 text-yellow-800": variant === 'warning',
		})} onClick={onClick}>{children}</button>
	)
}

export default Button
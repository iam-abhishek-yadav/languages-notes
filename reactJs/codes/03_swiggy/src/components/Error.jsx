import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
	const error = useRouteError();

	return (
		<div className='flex flex-col items-center justify-center h-screen p-5 bg-red-100 text-red-700 overflow-hidden'>
			<h1 className='text-2xl mb-2'>Something Went Wrong</h1>
			<p className='text-xl mb-5'>
				We're sorry, but there was an error processing your request.
			</p>
			{error && (
				<div className='bg-red-200 border border-red-300 rounded-lg p-4 w-full max-w-2xl overflow-auto max-h-[calc(100vh-40px)]'>
					<h2 className='text-xl mb-2'>Error Details:</h2>
					<p className='text-base mb-2'>
						<strong>Message:</strong> {error?.error?.message}
					</p>
					<p className='text-base mb-2'>
						<strong>Status:</strong> {error?.status} {error?.statusText}
					</p>
					{error?.stack && (
						<details className='mt-2'>
							<summary className='font-semibold cursor-pointer'>
								Stack Trace
							</summary>
							<pre className='bg-red-100 border border-red-200 rounded-md p-2 whitespace-pre-wrap'>
								{error?.stack}
							</pre>
						</details>
					)}
				</div>
			)}
			<Link
				to='/'
				className='mt-5 text-blue-600 underline'>
				Go Back Home
			</Link>
		</div>
	);
};

export default Error;

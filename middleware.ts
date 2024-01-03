import { connectToDatabase } from '@/util/database'
import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
	// Get a cookie
	// const token = request.cookies.get('token')?.value

	// Get all cookies
	// request.cookies.getAll()

	// To change a cookie, first create a response
	const response = NextResponse.next()
  
	// Set a cookie
	// response.cookies.set('visit', 'true')

	// Setting a cookie with additional options
	// response.cookies.set({
	// 	name: 'myCookieName',
	// 	value: 'some-value',
	// 	httpOnly: true,
	// })

	// Delete a cookie
	// response.cookies.delete('myCookieName')

	return response
}
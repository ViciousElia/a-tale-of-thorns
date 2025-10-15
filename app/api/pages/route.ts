// app/api/pages/route.ts
import { NextRequest, NextResponse } from 'next/server'
import mysql from 'mysql2/promise'
import data from '@/lib/pages.json'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const pageParam = searchParams.get('p')
  const pageNumber = parseInt(pageParam || '0')
  

    try {
      let filteredData = data.filter(item => 
        item.global >= 0 &&
        new Date(item.date).getTime() < new Date().getTime()
      )
      filteredData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      switch(pageParam) {
      case null:
        // Return all data
        return NextResponse.json(filteredData)
      case 'last':
        // Return newest page, previous page, and first page
        let retVal = [filteredData[filteredData.length - 1],filteredData[1],filteredData[0],null,null]
        return NextResponse.json(retVal)
      default:
        // Handle valid page numbers and return oldest, previous, current, next, last (or null as needed)
        if (isNaN(pageNumber)) {
          return NextResponse.json({ error: 'Page not found' }, { status: 404 })
        } else {
          let retVal = []
          const arrayItem = filteredData.findIndex(item => item.global === pageNumber)
          if (arrayItem === 0){
            retVal = [filteredData[filteredData.length - 1],filteredData[1],filteredData[0],null,null]
          } else if (arrayItem === filteredData.length - 1){
            retVal = [null,null,filteredData[filteredData.length - 1],filteredData[filteredData.length - 2],filteredData[0]]
          } else if (arrayItem === -1 ) {
            return NextResponse.json({ error: 'Page not found' }, { status: 404 })
          } else {
            retVal = [filteredData[filteredData.length - 1],filteredData[arrayItem+1],filteredData[arrayItem],filteredData[arrayItem-1],filteredData[0]]
          }
          return NextResponse.json(retVal)
        }
      }

    } catch(error) {
      return NextResponse.json({ error: 'Failed to load data' }, { status: 500 })
    }
  try {

    const { searchParams } = new URL(request.url)
    
    // @IMPLEMENTATION_NOTE: Replace with your database connection
    // Using environment variables for security
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    })

    let query = 'SELECT * FROM page_data WHERE global_id >= 0 AND date < CURDATE()'
    query += ' ORDER BY date DESC'

    const [rows] = await connection.execute(query, [])
    await connection.end()

    return NextResponse.json(rows)
  } catch (error) {
    return NextResponse.json({ error: 'Connection failed' }, { status: 500 })
  }
}
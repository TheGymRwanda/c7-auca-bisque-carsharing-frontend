import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import BookCar from './components/BookCar'
import CarList from './components/CarsList'
import CarDetails from './components/CarDetails'
import Bookings from './components/Bookings'
import ErrorCase from './components/ErrorCase'
import Layout from './components/Layout'
//import CarDetails from './screens/CarDetails'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  return (
    <main className="mx-auto flex min-h-screen w-1/3 flex-col gap-8 py-10">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="book-car" element={<BookCar />} />
          <Route path="car-details" element={<CarDetails />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="Error" element={<ErrorCase />} />
          <Route path="CarList" element={<CarList />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App

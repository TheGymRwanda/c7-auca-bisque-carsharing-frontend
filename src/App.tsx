import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import BookCar from './components/BookCar'
import Bookings from './components/Bookings'
import CarList from './components/CarsList'
import CarDetails from './screens/CarDetails'
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
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="book-car" element={<BookCar />} />
          <Route path="car-details" element={<CarDetails carId={2} />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="Error" element={<ErrorCase />} />
          <Route path="car-list" element={<CarList />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App

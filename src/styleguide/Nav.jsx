import './style.scss'

import Colors from './styleguide/views/Colors'

export default function Nav () {
    return <>
        <h1 className='nav'>NAV</h1>

        <header>
        <Link to ="views/Colors">Colors</Link>
        </header>

        <main>
        <Routes>
          <Route path="views/Colors" element={<Colors />} />
        </Routes>
      </main>
        

    </>
}
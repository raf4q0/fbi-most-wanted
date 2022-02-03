// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Product components
import FugitiveCards from './FugitiveCards'
import FugitiveHeader from './FugitiveHeader'
import FugitiveSearchbar from './FugitiveSearchbar'

// ** Third Party Components
import classnames from 'classnames'

// ** Reactstrap Imports
import ReactPaginate from 'react-paginate'

const ProductsPage = props => {
  // ** Props
  const {
    store,
    dispatch,    
    activeView,
    sidebarOpen,
    getFugitives,    
    setActiveView,    
    setSidebarOpen    
  } = props

  const [pageCount, setPageCount] = useState(0)

  useEffect(() => { 
    setPageCount(Math.ceil(Number(store.totalFugitives) / store.params.perPage))
  }, [pageCount, store.totalFugitives, store.fugitives.length])

  // ** Handles pagination
  const handlePageChange = e => {
    const { selected } = e    
    dispatch(getFugitives({ ...store.params, page: selected + 1 }))    
  }
 
  return (
    <div className='content-detached content-right'>
      <div className='content-body'>
        <FugitiveHeader
          store={store}
          dispatch={dispatch}
          activeView={activeView}
          getFugitives={getFugitives}
          setActiveView={setActiveView}
          setSidebarOpen={setSidebarOpen}
        />
        <div
          className={classnames('body-content-overlay', {
            show: sidebarOpen
          })}
          onClick={() => setSidebarOpen(false)}
        ></div>
        <FugitiveSearchbar dispatch={dispatch} getFugitives={getFugitives} store={store} />
        { store.fugitives && store.fugitives.length ? (
          <Fragment>
            <FugitiveCards
              store={store}
              dispatch={dispatch}              
              activeView={activeView}
              fugitives={store.fugitives}
              getFugitives={getFugitives}              
            />
              <ReactPaginate
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                activeClassName={'active'}                
                breakLabel={'...'}
                pageRangeDisplayed={5}
                pageCount={ pageCount }
                nextLabel=">>"
                previousLabel="<<"
                renderOnZeroPageCount={null}
                onPageChange={(e) => handlePageChange(e)}
              />
          </Fragment>
        ) : (
          <div className='d-flex justify-content-center mt-2'>
            <p>No Results</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductsPage

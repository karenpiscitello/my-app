import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true)
  const [prod, setProd] = useState({})
  const {id} = useParams()

  useEffect(() => {             
          const db = getFirestore()
          const queryDb = doc(db, 'items', id)
          getDoc(queryDb)
          .then(resp => setProd( { id: resp.id, ...resp.data() } ))
          .catch(err => console.log(err))
          .finally(()=>setLoading(false))
      // eslint-disable-next-line       
  },[])    
  
  return (
      <>
           {loading ? 
                  <h2>Cargando...</h2>
              :
                  <div className='border border-3 border-secondary'>
                      <ItemDetail prod={prod} />                        
                  </div>
          }            
      </>
  )
}

export default ItemDetailContainer